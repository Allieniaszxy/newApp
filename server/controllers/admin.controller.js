const TryCatch = require("../middlewares/tryCatch");
const Course = require("../models/courses.model");

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

module.exports = {
  addLecture,
};
