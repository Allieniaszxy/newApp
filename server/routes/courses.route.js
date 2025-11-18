const express = require("express");
const courseRouter = express.Router();
const { isAuth } = require("../middlewares/isAuth");
courseRouter.get(
  "/all",
  require("../controllers/course.controller").getAllCourses
);

courseRouter.get(
  "/lectures/:id",
  isAuth,
  require("../controllers/course.controller").fetchLectures
);

courseRouter.get(
  "/lecture/:id",
  isAuth,
  require("../controllers/course.controller").fetchLecture
);

courseRouter.get(
  "/mycourses",
  isAuth,
  require("../controllers/course.controller").getMyCourses
);
courseRouter.get(
  "/:id",
  require("../controllers/course.controller").getSingleCourse
);
// courseRouter.put(
//   "/update/:id",
//   require("../controllers/courses.controller").updateCourse
// );
// courseRouter.delete(
//   "/delete/:id",
//   require("../controllers/courses.controller").deleteCourse
// );

// const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require("../controllers/courses.controller");

// courseRouter.post("/create", createCourse);
// courseRouter.get("/all", getAllCourses);
// courseRouter.get("/:id", getCourseById);
// courseRouter.put("/update/:id", updateCourse);
// courseRouter.delete("/delete/:id", deleteCourse);

// module.exports = courseRouter;
module.exports = courseRouter;
