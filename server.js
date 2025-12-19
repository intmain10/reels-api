// server.js
// console.log("🚀 server.js file loaded");
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => console.log("Server running 🚀"));
  });
