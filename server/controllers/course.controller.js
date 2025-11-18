const Course = require("../models/courses.model");
const TryCatch = require("../middlewares/TryCatch");
const Lecture = require("../models/lectures.model");
const User = require("../models/user.model");
const { instance } = require("../index");

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

const fetchLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);

  const user = await User.findById(req.user._id); // Use _id, not id

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Admins can access all lectures
  if (user.role === "admin") {
    return res.status(200).json({ lecture });
  }

  // Subscription check for regular users
  const subscribedCourseIds = user.subscription.map((id) => id.toString());
  if (!subscribedCourseIds.includes(req.params.id)) {
    return res
      .status(403)
      .json({ message: "Please subscribe to access the lectures" });
  }

  res.status(200).json({ lecture });
});

const getMyCourses = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id).populate("subscription");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ courses: user.subscription });
});

const checkOut = TryCatch(async (req, res) => {
  // Implementation for checkout process
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  // Further checkout logic goes here
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  if (user.subscription.includes(course._id)) {
    return res
      .status(400)
      .json({ message: "Already subscribed to this course" });
  }

  const options = {
    amount: Number(course.price) * 1000, // amount in kobo
    currency: "NGN",
    // receipt: `receipt_${Math.floor(Math.random() * 1000000)}`,
  };

  const order = await instance.orders.create(options);
  res.status(200).json({ course, order });
});

module.exports = {
  getAllCourses,
  getSingleCourse,
  fetchLectures,
  fetchLecture,
  getMyCourses,
};
