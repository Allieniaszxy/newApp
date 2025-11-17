const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const sendMail = require("../middlewares/sendMail");
const TryCatch = require("../middlewares/tryCatch");

const registerUser = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;

  let existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // IMPORTANT: Only store PLAIN OBJECT, not mongoose document
  const activationToken = jwt.sign(
    {
      user: { name, email, password: hashedPassword },
      otp,
    },
    process.env.JWT_SECRET,
    { expiresIn: "5m" }
  );

  await sendMail(email, "Account Activation OTP", { name, otp });

  res.status(200).json({
    message: "OTP sent to your email",
    activationToken,
  });
});

const verifyUser = TryCatch(async (req, res) => {
  const { activationToken, otp } = req.body;

  const decoded = jwt.verify(activationToken, process.env.JWT_SECRET);

  if (!decoded)
    return res.status(400).json({ message: "Invalid or expired token" });

  // Compare OTP safely
  if (String(decoded.otp) !== String(otp)) {
    console.log("Decoded OTP:", decoded.otp, "Sent OTP:", otp);
    return res.status(400).json({ message: "Invalid OTP" });
  }

  const { name, email, password } = decoded.user;

  await User.create({ name, email, password });

  res.status(201).json({ message: "User registered successfully" });
});

const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.status(200).json({
    message: "Login successful and welcome back " + user.name + "!",
    token,
    user,
  });
});

const myProfile = TryCatch(async (req, res) => {
  //   const user = await User.findById(req.user);
  res.status(200).json({ user: req.user });
});

module.exports = {
  registerUser,
  verifyUser,
  loginUser,
  myProfile,
};
