import express from "express";
import multer from "multer";
import { AddCourse, deleteCourse, GetCourses, getSingleCourse,updateCourse } from "../controllers/course.js";

const courseRouter = express.Router();

// Multer setup
const storage = multer.memoryStorage(); // memoryStorage for Cloudinary upload
const upload = multer({ storage });

courseRouter.post("/", upload.single("image"), AddCourse);
courseRouter.get('/',GetCourses)
courseRouter.delete('/:id',deleteCourse)
courseRouter.get('/:id',getSingleCourse)
courseRouter.put("/:id", upload.single("image"), updateCourse); // ✅ Update route
export default courseRouter;