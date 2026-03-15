import express from 'express'

import { addJob, getAllJobs,deleteJob,updateJob } from '../controllers/job.js'

const jobRouter = express.Router();

jobRouter.post('/', addJob);
jobRouter.get('/',getAllJobs)
jobRouter.delete('/:id',deleteJob)
jobRouter.put('/:id', updateJob); // ✅ Update route

export default  jobRouter