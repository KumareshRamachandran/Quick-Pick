const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require('dotenv').config();
const api_key = process.env.API_KEY;
const cloud_name = process.env.CLOUD_NAME;
const api_secret= process.env.API_SECRET;


cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
