const express = require("express");
const { myProfile } = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/isAuth");
const userRouter = express.Router();

userRouter.post(
  "/register",
  require("../controllers/user.controller").registerUser
);
userRouter.post(
  "/verify",
  require("../controllers/user.controller").verifyUser
);
userRouter.post("/login", require("../controllers/user.controller").loginUser);

userRouter.get("/profile", isAuth, myProfile);

module.exports = userRouter;
