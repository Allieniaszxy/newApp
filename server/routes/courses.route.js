const express = require("express");
const { isAuth, isAdmin } = require("../middlewares/isAuth");
const upload = require("../middlewares/multer");
// const { createCourse } = require("../controllers/course.controller");
const courseRouter = express.Router();

courseRouter.post(
  "/create",
  isAuth,
  isAdmin,
  upload,
  require("../controllers/course.controller").createCourse
);

courseRouter.post(
  "/:id/add-lecture",
  isAuth,
  isAdmin,
  upload,
  require("../controllers/admin.controller").addLecture
);
// courseRouter.get(
//   "/all",
//   require("../controllers/courses.controller").getAllCourses
// );
// courseRouter.get(
//   "/:id",
//   require("../controllers/courses.controller").getCourseById
// );
// courseRouter.put(
//   "/update/:id",
//   require("../controllers/courses.controller").updateCourse
// );
// courseRouter.delete(
//   "/delete/:id",
//   require("../controllers/courses.controller").deleteCourse
// );
module.exports = courseRouter;
// const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require("../controllers/courses.controller");

// courseRouter.post("/create", createCourse);
// courseRouter.get("/all", getAllCourses);
// courseRouter.get("/:id", getCourseById);
// courseRouter.put("/update/:id", updateCourse);
// courseRouter.delete("/delete/:id", deleteCourse);

// module.exports = courseRouter;
