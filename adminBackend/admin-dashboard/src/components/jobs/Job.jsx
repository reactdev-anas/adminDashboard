

import { useContext } from "react";
import { context } from "../contextAPI/DataProvider";

const Job = () => {
    const { handleDeleteJob, jobs, handleEditJob } = useContext(context);

    return (
        <div className="mx-0  md:mx-2">
            <h2 className="text-2xl font-semibold mb-5">Jobs</h2>
            <div className="flex flex-col gap-3">
                {jobs.map((job, idx) => (
                    <div key={idx} className="p-6 md:px-4 mb-4 md:mb-0  md:py-3 rounded-lg flex flex-col sm:flex-row items-center transition-all duration-300 hover:shadow-md justify-between bg-gray-100 shadow-sm gap-6">
                        <div className="flex items-center gap-3 w-full sm:w-[30%]">
                            <div className="w-12 h-12 md:h-10 md:w-10 text-xl md:text-lg bg-black flex justify-center items-center rounded-full text-white shrink-0">{job.title[0]}</div>
                            <div className="truncate">
                                <h3 className="font-semibold truncate text-lg md:text-base">{job.title}</h3>
                                <p className="text-gray-500 text-md md:text-xs truncate">{job.company}</p>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 justify-center gap-2">
                            <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded">{job.jobType}</span>
                            <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded">{job.workMode}</span>
                        </div>
                        <div className="flex gap-2 mt-4 md:mt-0 w-full sm:w-auto">
                            <button onClick={() => handleEditJob(job)} className="flex-1 sm:flex-none bg-black text-white py-2 md:py-1 px-3 rounded text-sm cursor-pointer hover:bg-gray-800 transition">Edit</button>
                            <button onClick={() => handleDeleteJob(job._id)} className="flex-1 sm:flex-none bg-black text-white py-2 md:py-1 px-3 rounded text-sm cursor-pointer hover:bg-gray-800 transition">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Job;

