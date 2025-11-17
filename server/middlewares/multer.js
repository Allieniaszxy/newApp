const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${uuidv4()}${ext}`;
    cb(null, filename);
  },
});

// Accept only video files (mp4, avi, etc.) or PDFs
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "video/mp4",
    "video/avi",
    "video/mkv",
    "video/quicktime", // .mov
    "video/x-ms-wmv", // .wmv
    "application/pdf",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(`Only video or PDF files are allowed. Got: ${file.mimetype}`),
      false
    );
  }
};

const upload = multer({ storage, fileFilter }).single("file"); // expects 'file' field

module.exports = upload;
