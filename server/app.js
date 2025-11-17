const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from app.js router!");
});

const userRouter = require("./routes/user.route");
router.use("/users", userRouter);

const courseRouter = require("./routes/courses.route");
router.use("/courses", courseRouter);

module.exports = router;
