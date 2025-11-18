const express = require("express");
const { isAuth, isAdmin } = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
// const { createCourse } = require("../controllers/course.controller");
const adminRouter = express.Router();

adminRouter.post(
  "/create",
  isAuth,
  isAdmin,
  upload,
  require("../controllers/admin.controller").createCourse
);

adminRouter.post(
  "/:id/add-lecture",
  isAuth,
  isAdmin,
  upload,
  require("../controllers/admin.controller").addLecture
);

adminRouter.delete(
  "/lecture/:id/delete",
  isAuth,
  isAdmin,
  require("../controllers/admin.controller").deleteLecture
);

adminRouter.delete(
  "/:id/delete",
  isAuth,
  isAdmin,
  require("../controllers/admin.controller").deleteCourse
);

adminRouter.get(
  "/stats",
  isAuth,
  isAdmin,
  require("../controllers/admin.controller").getAllStats
);
module.exports = adminRouter;
