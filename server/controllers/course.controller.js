const TryCatch = require("../middlewares/tryCatch");
const Course = require("../models/courses.model");

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

module.exports = {
  createCourse,
};
