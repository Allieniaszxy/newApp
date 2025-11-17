const nodemailer = require("nodemailer");
const { createTransport } = require("nodemailer");

const sendMail = async (email, subject, data) => {
  try {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: `Your OTP is ${data.otp}. It is valid for 10 minutes.`,
    };
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
module.exports = sendMail;
