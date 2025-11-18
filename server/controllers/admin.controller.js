const TryCatch = require("../middlewares/TryCatch");
const Course = require("../models/courses.model");
const Lecture = require("../models/lectures.model");
const { rm } = require("fs");
const fs = require("fs");
const path = require("path");
const util = require("util");
const unlinkAsync = util.promisify(fs.unlink);
const User = require("../models/user.model");

const createCourse = TryCatch(async (req, res) => {
  const { title, description, createdBy, price, category, duration } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "Course image is required" });
  }

  const newCourse = await Course.create({
    title,
    description,
    createdBy,
    price,
    category,
    image: file?.path,
    duration,
  });
  res
    .status(201)
    .json({ message: "Course created successfully", course: newCourse });
});

const addLecture = TryCatch(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  const { title, description } = req.body;
  const video = req.file;
  if (!video) {
    return res.status(400).json({ message: "Lecture video is required" });
  }
  const Lecture = require("../models/lectures.model");
  const newLecture = await Lecture.create({
    title,
    description,
    videoUrl: video.filename,
    courseId: course._id,
  });
  res
    .status(201)
    .json({ message: "Lecture added successfully", lecture: newLecture });
});

const deleteLecture = TryCatch(async (req, res) => {
  const lectureId = req.params.id;

  // 1. Find lecture
  const lecture = await Lecture.findById(lectureId);
  if (!lecture) {
    return res.status(404).json({ message: "Lecture not found" });
  }

  // 2. Delete File
  const filePath = path.join(__dirname, "..", lecture.videoUrl);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting video file:", err);
    }
  });

  // 3. Delete from DB
  await lecture.deleteOne();

  return res.status(200).json({ message: "Lecture deleted successfully" });
});

const deleteCourse = TryCatch(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  const lectures = await Lecture.find({ courseId: course._id });

  await Promise.all(
    lectures.map(async (lecture) => {
      // const filePath = path.join(
      //   __dirname,
      //   "..",
      //   "uploads",
      //   "videos",
      //   lecture.videoUrl
      // );
      try {
        await unlinkAsync(lecture.videoUrl);
      } catch (err) {
        console.error("Error deleting video file:", err); // continue even if missing
      }

      await lecture.deleteOne();
    })
  );

  if (course.image) {
    // const courseImgPath = path.join(process.cwd(), course.image);
    try {
      await unlinkAsync(course.image);
    } catch (err) {
      console.error("Error deleting course image:", err);
    }
  }

  await User.updateMany(
    { subscription: course._id },
    { $pull: { subscription: course._id } }
  );

  // Delete the course itself
  await course.deleteOne();

  res.status(200).json({
    message: "Course and associated lectures deleted successfully",
  });
});

const getAllStats = TryCatch(async (req, res) => {
  const totalCourses = (await Course.find()).length;
  const totalLectures = (await Lecture.find()).length;
  const totalUsers = (await User.find()).length;

  const stats = {
    totalCourses,
    totalLectures,
    totalUsers,
  };

  res.status(200).json({ stats });
});
module.exports = {
  createCourse,
  addLecture,
  deleteLecture,
  deleteCourse,
  getAllStats,
};
