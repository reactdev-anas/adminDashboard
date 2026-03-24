// import figma from "../../../public/fig.png";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { context } from "../contextAPI/DataProvider";

// const Job = () => {
//   const { handleDeleteJob, jobs, handleEditJob } = useContext(context);

//   return (
//     <div className="mx-2">
//       <h2 className="text-2xl font-semibold ml-2 mb-5">Jobs</h2>
//       <div>
//         {jobs.map((job, idx) => (
//           <div
//             key={idx}
//             className="px-4 py-2 rounded flex items-center justify-between mx-2 bg-gray-100 mb-3 shadow-xl hover:shadow-md transition cursor-pointer"
//           >
//             {/* LEFT: Title & Company */}
//             <div className="flex items-center gap-3 w-[30%]">
//               <div className="w-9 h-9 bg-black flex justify-center items-center rounded-full border border-gray-700 flex-shrink-0">
//                 <p className="text-white">{job.title[0]}</p>
//               </div>
//               <div className="truncate">
//                 <h3 className="font-semibold truncate">{job.title}</h3>
//                 <p className="text-gray-500 text-sm truncate">{job.company}</p>
//               </div>
//             </div>

//             {/* MIDDLE: Job Type & Work Mode (Ab center mein dikhenge) */}
//             <div className="flex-1 flex justify-center gap-4">
//               <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded">
//                 {job.jobType}
//               </span>
//               <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded">
//                 {job.workMode}
//               </span>
//             </div>

//             {/* RIGHT: Buttons (closer to each other) */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleEditJob(job)}
//                 className="bg-black cursor-pointer rounded py-1 px-4 text-sm text-white hover:bg-gray-800 transition"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteJob(job._id)}
//                 className="bg-black cursor-pointer rounded py-1 px-4 text-sm text-white hover:bg-gray-800 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Job;

import { useContext } from "react";
import { context } from "../contextAPI/DataProvider";

const Job = () => {
    const { handleDeleteJob, jobs, handleEditJob } = useContext(context);

    return (
        <div className="mx-0 md:mx-2">
            <h2 className="text-2xl font-semibold mb-5">Jobs</h2>
            <div className="flex flex-col gap-3">
                {jobs.map((job, idx) => (
                    <div key={idx} className="px-4 py-3 rounded-lg flex flex-col sm:flex-row items-center justify-between bg-gray-100 shadow-sm gap-4">
                        <div className="flex items-center gap-3 w-full sm:w-[30%]">
                            <div className="w-10 h-10 bg-black flex justify-center items-center rounded-full text-white shrink-0">{job.title[0]}</div>
                            <div className="truncate">
                                <h3 className="font-semibold truncate text-sm md:text-base">{job.title}</h3>
                                <p className="text-gray-500 text-xs truncate">{job.company}</p>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 justify-center gap-2">
                            <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded">{job.jobType}</span>
                            <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded">{job.workMode}</span>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button onClick={() => handleEditJob(job)} className="flex-1 sm:flex-none bg-black text-white py-1 px-3 rounded text-sm cursor-pointer hover:bg-gray-800 transition">Edit</button>
                            <button onClick={() => handleDeleteJob(job._id)} className="flex-1 sm:flex-none bg-black text-white py-1 px-3 rounded text-sm cursor-pointer hover:bg-gray-800 transition">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Job;
