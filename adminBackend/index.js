import dns from "node:dns/promises"
dns.setServers(["1.1.1.1","8.8.8.8"])

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DBConnection from './config/db.js';
import courseRouter from "./routes/course.js"
import jobRouter from "./routes/job.js"
import contactRouter from "./routes/contact.js"
import authRouter from "./routes/authRoute.js"

const app = express();
dotenv.config();


app.use(express.json())
app.use(cors());

app.use('/api/courses',courseRouter)
app.use('/api/jobs',jobRouter)
app.use('/api/contact',contactRouter)
app.use("/api/auth", authRouter);

import { protect } from "./middleware/authMiddleware.js";
app.get("/api/admin/dashboard", protect, (req, res) => {
  res.json({ message: `Welcome ${req.admin.email}` });
});

DBConnection(process.env.MONGO_URI).then(()=> console.log("MongoDB is connected Successfully ✔️")).catch((error)=>console.log("MongoDb Error", error))

app.get('/',(req,res)=>{
    res.send("Server is running properly their is no problem of operating system")
})

const PORT = process.env.PORT || 5001

app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})