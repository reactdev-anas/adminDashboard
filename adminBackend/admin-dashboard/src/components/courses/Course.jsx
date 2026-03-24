// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useContext } from "react";
// import { context } from "../contextAPI/DataProvider";

// const Course = () => {
//   const { handleEdit, handleDeleteCourse,courses } = useContext(context);

//   return (
//     <div className="mx-2">
//       <h2 className="text-2xl font-semibold ml-1 mt-3 mb-5">Courses</h2>

//       <div className="flex flex-col gap-3">
//         {courses.map((course, idx) => (
//           <div
//             key={idx}
//             className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded shadow-xl hover:shadow-md transition cursor-pointer"
//           >
//             {/* Image + Title/Duration */}
//             <div className="flex items-center gap-3">
//               <img src={course.image} alt="" className="w-9 h-9 rounded-full" />
//               <div className="flex flex-col">
//                 <h3 className="font-semibold">{course.title}</h3>
//                 <p className="text-gray-500 text-sm">{course.duration} h</p>
//               </div>
//             </div>

//             {/* Ratings */}
//             <div className="text-yellow-500 font-semibold mx-3">
//               ★★★★☆ {/* Example rating */}
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleEdit(course)}
//                 className="bg-black cursor-pointer text-white text-sm py-1 px-3 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteCourse(course._id)}
//                 className="bg-black cursor-pointer text-white text-sm py-1 px-3 rounded"
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

// export default Course;


import { useContext } from "react";
import { context } from "../contextAPI/DataProvider";

const Course = () => {
    const { handleEdit, handleDeleteCourse, courses } = useContext(context);

    return (
        <div className="mx-0 md:mx-2">
            <h2 className="text-2xl font-semibold mt-3 mb-5">Courses</h2>
            <div className="flex flex-col gap-3">
                {courses.map((course, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition gap-4">
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <img src={course.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <h3 className="font-semibold text-sm md:text-base">{course.title}</h3>
                                <p className="text-gray-500 text-xs">{course.duration} h</p>
                            </div>
                        </div>
                        <div className="text-yellow-500 md:font-semibold hidden md:block">★★★★☆</div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button onClick={() => handleEdit(course)} className="flex-1 sm:flex-none bg-black cursor-pointer hover:bg-gray-800 transition text-white text-sm py-1 px-3 rounded">Edit</button>
                            <button onClick={() => handleDeleteCourse(course._id)} className="flex-1 cursor-pointer sm:flex-none hover:bg-gray-800 transition bg-black text-white text-sm py-1 px-3 rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
