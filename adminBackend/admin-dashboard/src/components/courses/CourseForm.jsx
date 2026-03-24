// import { useState } from "react";
// import axios from "axios";

// const CourseForm = () => {
//   const [courseFeild, setCourseFeild] = useState({
//     title: "",
//     image: null, // important
//     videoUrl: "",
//     duration: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       setCourseFeild({
//         ...courseFeild,
//         image: files[0], // store real file
//       });
//     } else {
//       setCourseFeild({
//         ...courseFeild,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();

//       // this is for beginner to understand clealry and properly that ki we can't upload files in json format in data base thats why we ra edoing this
//       // formData.append("title", courseFeild.title);
//       // formData.append("image", courseFeild.image);
//       // formData.append("videoUrl", courseFeild.videoUrl);
//       // formData.append("duration", courseFeild.duration);
//       // formData.append("description", courseFeild.description);

//       Object.keys(courseFeild).forEach((key) => {
//         formData.append(key, courseFeild[key]);
//       });

//       await axios.post("http://localhost:5001/api/courses", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("Data Saved Successfully");

//       // Reset form
//       setCourseFeild({
//         title: "",
//         image: null,
//         videoUrl: "",
//         duration: "",
//         description: "",
//       });
//     } catch (error) {
//       console.log("Error while sending data:", error);
//     }
//   };

//   return (
//     <div className="ml-5 ">
//       <h2 className="text-2xl font-semibold mt-3 mb-5">Add New Course</h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
//         <div className="grid grid-cols-2 gap-3">
//           <input
//             type="text"
//             placeholder="Course Title"
//             name="title"
//             value={courseFeild.title}
//             onChange={handleChange}
//             className="px-3 py-2 rounded bg-gray-100"
//           />

//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded bg-gray-100"
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <input
//             type="text"
//             placeholder="Course Video URL"
//             name="videoUrl"
//             value={courseFeild.videoUrl}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded bg-gray-100"
//           />

//           <input
//             type="number"
//             placeholder="Duration (in hours)"
//             name="duration"
//             value={courseFeild.duration}
//             onChange={handleChange}
//             className="w-full px-3 py-2 rounded bg-gray-100"
//           />
//         </div>

//         <textarea
//           placeholder="Course Description"
//           name="description"
//           value={courseFeild.description}
//           onChange={handleChange}
//           className="w-full p-3 bg-gray-100"
//         />

//         <button
//           type="submit"
//           className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//         >
//           Add Course
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CourseForm;




// import { useContext, useState } from "react";
// import axios from "axios";
// import { context } from "../contextAPI/DataProvider";

// const CourseForm = () => {

//   const {courseField,handleChange,handleSubmit,toggle,handleSave}=useContext(context)

//   return (
//     <div className="ml-5">
//       <h2 className="text-2xl font-semibold mt-3 mb-5">Add New Course</h2>
//       <form onSubmit={toggle ? handleSave:handleSubmit} className="grid grid-cols-1 gap-5">
//         <div className="grid grid-cols-2 gap-3">
//           <input type="text" placeholder="Course Title" name="title" value={courseField.title} onChange={handleChange} className="px-3 py-2 rounded bg-gray-100" />
//           <input type="file" name="image" onChange={handleChange} className="px-3 py-2 rounded bg-gray-100" />
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <input type="text" placeholder="Course Video URL" name="videoUrl" value={courseField.videoUrl} onChange={handleChange} className="px-3 py-2 rounded bg-gray-100" />
//           <input type="number" placeholder="Duration (in hours)" name="duration" value={courseField.duration} onChange={handleChange} className="px-3 py-2 rounded bg-gray-100" />
//         </div>

//         <textarea placeholder="Course Description" name="description" value={courseField.description} onChange={handleChange} className="w-full p-3 bg-gray-100" />

//        {toggle ?  <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">Save Course</button>: <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">Add Course</button>}
//       </form>
//     </div>
//   );
// };

// export default CourseForm;



import { useContext } from "react";
import { context } from "../contextAPI/DataProvider";

const CourseForm = () => {
    const { courseField, handleChange, handleSubmit, toggle, handleSave } = useContext(context);

    return (
        <div className="lg:ml-5">
            <h2 className="text-2xl font-semibold mt-3 mb-5">{toggle ? "Edit Course" : "Add New Course"}</h2>
            <form onSubmit={toggle ? handleSave : handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Title" name="title" value={courseField.title} onChange={handleChange} className="px-3 py-2 rounded-lg bg-gray-100 outline-none w-full" />
                    <input type="file" name="image" onChange={handleChange} className="px-3 py-2 rounded-lg bg-gray-100 text-sm w-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Video URL" name="videoUrl" value={courseField.videoUrl} onChange={handleChange} className="px-3 py-2 rounded-lg bg-gray-100 outline-none w-full" />
                    <input type="number" placeholder="Hours" name="duration" value={courseField.duration} onChange={handleChange} className="px-3 py-2 rounded-lg bg-gray-100 outline-none w-full" />
                </div>
                <textarea placeholder="Description" name="description" value={courseField.description} onChange={handleChange} className="p-3 bg-gray-100 rounded-lg outline-none h-32" />
                <button type="submit" className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition">
                    {toggle ? "Save Course" : "Add Course"}
                </button>
            </form>
        </div>
    );
};

export default CourseForm;
