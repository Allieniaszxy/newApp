const Course = require("../models/courses.model");
const TryCatch = require("../middlewares/TryCatch");
const Lecture = require("../models/lectures.model");
const User = require("../models/user.model");

const getAllCourses = TryCatch(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({ courses });
});

const getSingleCourse = TryCatch(async (req, res) => {
  const courseId = req.params.id;
  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.status(200).json({ course });
});

const fetchLectures = TryCatch(async (req, res) => {
  const lectures = await Lecture.find({ courseId: req.params.id });

  const user = await User.findById(req.user._id); // Use _id, not id

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Admins can access all lectures
  if (user.role === "admin") {
    return res.status(200).json({ lectures });
  }

  // Subscription check for regular users
  const subscribedCourseIds = user.subscription.map((id) => id.toString());
  if (!subscribedCourseIds.includes(req.params.id)) {
    return res
      .status(403)
      .json({ message: "Please subscribe to access the lectures" });
  }

  res.status(200).json({ lectures });
});

module.exports = {
  getAllCourses,
  getSingleCourse,
  fetchLectures,
};
