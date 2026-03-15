import Course from "../models/course.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export async function AddCourse(req, res) {
  try {
    const { title, videoUrl, duration, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // 1️⃣ Check for duplicate title
    const existingCourse = await Course.findOne({ title });
    if (existingCourse) {
      return res.status(400).json({ message: "Course title already exists!" });
    }

    // 2️⃣ Function to upload buffer to Cloudinary
    const uploadFromBuffer = (fileBuffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "courses" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });

    // 3️⃣ Upload image and get Cloudinary URL
    const result = await uploadFromBuffer(req.file.buffer);

    // 4️⃣ Save course in MongoDB
    const newCourse = await Course.create({
      title,
      image: result.secure_url,
      videoUrl,
      duration,
      description,
    });

    res.status(201).json({
      message: "Course added successfully ✅",
      newCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function GetCourses(req,res){
    try {
        const allCourses = await Course.find();
        if(!allCourses || allCourses.length===0){
            return res.status(404).json({
                success:false,
                message:"Courses Not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Courses Found Successfully",
            count:allCourses.length,
            allCourses
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
        
    }
}

export const getSingleCourse=async(req,res)=>{
  try {
    const {id}=req.params;
    const singleCourse = await Course.findById(id);
    if(!singleCourse){
      return res.status(404).json({
        success:false,
        message:"Course Does'nt exists"
      })
    }
    return res.status(200).json({
      message:"Found course successfully",
      success:true,
      singleCourse
    })
    
  } catch (error) {
    return res.status(500).json({
      message:"Internal Server Error"
    })
    
  }
}

export const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({
                success: false,
                message: "Course Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        });
    } catch (error) {
        console.error("Delete Course Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// controllers/course.js

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, videoUrl, duration, description } = req.body;

    // Find existing course
    const existingCourse = await Course.findById(id);
    if (!existingCourse) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    // Check for duplicate title (ignore current course)
    if (title && title !== existingCourse.title) {
      const duplicate = await Course.findOne({ title });
      if (duplicate) {
        return res.status(400).json({ message: "Course title already exists!" });
      }
    }

    // If image file is provided, upload to Cloudinary
    let imageUrl = existingCourse.image;
    if (req.file) {
      const uploadFromBuffer = (fileBuffer) =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "courses" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          streamifier.createReadStream(fileBuffer).pipe(stream);
        });
      const result = await uploadFromBuffer(req.file.buffer);
      imageUrl = result.secure_url;
    }

    // Update course
    existingCourse.title = title || existingCourse.title;
    existingCourse.videoUrl = videoUrl || existingCourse.videoUrl;
    existingCourse.duration = duration || existingCourse.duration;
    existingCourse.description = description || existingCourse.description;
    existingCourse.image = imageUrl;

    await existingCourse.save();

    res.status(200).json({
      success: true,
      message: "Course updated successfully ✅",
      updatedCourse: existingCourse,
    });
  } catch (error) {
    console.error("Update Course Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

