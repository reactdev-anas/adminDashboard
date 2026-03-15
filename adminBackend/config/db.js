import mongoose from "mongoose";

const DBConnection= async(url)=>{
    try {
        await mongoose.connect(url);
        console.log("MongoDB is Connected")
        
    } catch (error) {
         console.log("MongoDB Connection Error :" ,error)
    }
}

export default DBConnection;