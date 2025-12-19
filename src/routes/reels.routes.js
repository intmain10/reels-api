// src/routes/reels.routes.js
const express = require("express");
const upload = require("../middleware/upload");
const { uploadReel, getReels } = require("../controllers/reels.controller");

const router = express.Router();

router.get("/", getReels);
router.post("/upload", upload.single("video"), uploadReel);

module.exports = router;
