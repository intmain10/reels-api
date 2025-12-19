// src/model/Reel.js
const mongoose = require('mongoose');

const ReelSchema = new mongoose.Schema(
  {
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    caption: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reel', ReelSchema);
