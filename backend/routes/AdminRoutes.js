import express from "express";
import {
  addImageToGallery,
  removeImageFromGallery,
  removeEvent,
  AddEvent,
  updateEventPrices,
} from "../Controller/AdminController.js";
import multer from "multer";
import path from "path";
const AdminRoute = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
AdminRoute.use(
  "/uploads",
  express.static(path.join(__dirname, "../../event/public/uploads/"))
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../event/public/uploads/"); // Adjust path to resolve correctly
  },
  filename: function (req, file, cb) {
    console.log(file, "this is the files")
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext); // Adjust filename generation
  },
});

const upload = multer({ storage: storage });
const uploadMultiple = upload.fields([
  { name: "coverImage", maxCount: 1 },
  { name: "galleryImages", maxCount: 1 }, // Adjust maxCount as per your requirement
]);
const addGallery =  upload.fields([
  {name : "gallery" , maxCount : 1}
])
AdminRoute.post("/event", uploadMultiple, AddEvent);
AdminRoute.post("/event/gallery",addGallery ,addImageToGallery);
AdminRoute.delete("/event/gallery", removeImageFromGallery);
// AdminRoute.put("/event/:eventId/cover-image", updateCoverImage);
// AdminRoute.delete("/event/:eventId/cover-image", removeCoverImage);
AdminRoute.delete("/event/:eventId", removeEvent);
AdminRoute.put("/event/price/:eventId" ,  updateEventPrices);

export default AdminRoute;
