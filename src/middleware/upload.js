// src/middleware/upload.js
// src/middleware/upload.js
const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 100 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only video files are allowed"), false);
    }
  }
});

module.exports = upload; // ✅ export directly
