// src/app.js
const express = require("express");
const cors = require("cors");

const reelsRoutes = require("./routes/reels.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/reels", reelsRoutes);

module.exports = app;
