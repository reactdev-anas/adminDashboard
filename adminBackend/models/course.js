import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        required:true,
        
    },
    videoUrl:{
        type:String,
        required:true,
    },
    duration:{
         type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }

}, {timestamps:true})

const Course = mongoose.model('Course',courseSchema)
export default Course;