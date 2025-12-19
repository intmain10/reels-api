// src/controllers/reels.controller.js
const cloudinary = require("../config/cloudinary");
const Reel = require("../model/Reel");

// Upload a video reel from Multer memory buffer to Cloudinary
exports.uploadReel = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No video file uploaded" });
    }

    // Build Data URI from memory buffer
    const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      resource_type: "video",
      folder: "reels",
    });

    // Generate a thumbnail URL from the uploaded video
    const thumbnailUrl = cloudinary.url(result.public_id, {
      resource_type: "video",
      format: "jpg",
      transformation: [
        { width: 600, height: 600, crop: "fill", gravity: "auto" },
        { start_offset: "auto" }
      ],
    });

    const reel = await Reel.create({
      videoUrl: result.secure_url,
      thumbnailUrl,
      caption: req.body.caption || "",
    });

    res.status(201).json(reel);
  } catch (err) {
    console.error("uploadReel error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Paginated list of reels
exports.getReels = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const reels = await Reel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json(reels);
  } catch (err) {
    console.error("getReels error:", err);
    res.status(500).json({ error: err.message });
  }
};
