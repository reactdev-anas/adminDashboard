import Job from "../models/job.js";

export const addJob = async (req, res) => {
    try {
        const jobData = req.body;

        // Basic validation
        if (!jobData || Object.keys(jobData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Job data is required"
            });
        }

        const newJob = await Job.create(jobData);

        return res.status(201).json({
            success: true,
            message: "Job added successfully",
             newJob
        });

    } catch (error) {
        console.error("Add Job Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while adding the job"
        });
    }
};

export const getAllJobs = async(req,res)=>{
    try {
        const alljobs = await Job.find();
        if(!alljobs || alljobs.length===0){
            return res.status(404).json({
                success:false,
                message:"No Jobs Found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Jobs Found Successfully",
            count:alljobs.length,
            alljobs
        })
    } catch (error) {
         return res.status(500).json({
            message:"Internal Server Error"
        })
        
    }
}

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJob = await Job.findByIdAndDelete(id);

        if (!deletedJob) {
            return res.status(404).json({
                success: false,
                message: "Job Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        });
    } catch (error) {
        console.error("Delete Job Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, jobType, workMode, jobDescription } = req.body;

    const existingJob = await Job.findById(id);
    if (!existingJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    // Update fields
    existingJob.title = title || existingJob.title;
    existingJob.company = company || existingJob.company;
    existingJob.jobType = jobType || existingJob.jobType;
    existingJob.workMode = workMode || existingJob.workMode;
    existingJob.jobDescription = jobDescription || existingJob.jobDescription;

    await existingJob.save();

    return res.status(200).json({
      success: true,
      message: "Job updated successfully ✅",
      updatedJob: existingJob,
    });
  } catch (error) {
    console.error("Update Job Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};