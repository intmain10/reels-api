require("dotenv").config();
const cloudinary = require("./src/config/cloudinary");

cloudinary.uploader.upload("sample.mp4", {
  resource_type: "video",
  folder: "test-reels"
})
.then(result => {
  console.log("Upload success ✅");
  console.log(result.secure_url);
})
.catch(err => {
  console.error("Upload failed ❌");
  console.error(err);
});
