import { useState,useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
const AdminSidePanel = () => {

  const [jobs, setJobs] = useState([]);
  const [courses, setCourses]= useState([])
  
  const getAllJobs = async () => {
    try {
      const response = await axios.get("https://admindashboard-kom7.onrender.com/api/jobs");
      const allJobs = response.data.alljobs; // ✅ correct
      console.log(allJobs)

      setJobs(allJobs)
   
    
    } catch (error) {
      console.log("Error while fetching the jobs data :", error);
    }
  };


  const getCourses = async () => {
    try {
      const response = await axios.get("https://admindashboard-kom7.onrender.com/api/courses");
      setCourses(response.data.allCourses);
    } catch (error) {
      console.log("Error while fetching the data :", error);
    }
  };

   useEffect(() => {
      getAllJobs();
      getCourses()
    }, []);
  return (
  
    <>
      {/* Dummy Stats Cards */}
      <div className="mx-3 flex items-center relative mb-3 py-2 bg-gray-100">
        <IoIosSearch className="absolute left-3  text-xl"/>
        <input type="text" className=" rounded  outline-none border-none px-2 w-full " />
      </div>
      <div className="grid grid-cols-2 ml-3  gap-4">
        <div className="bg-gray-100 text-black py-2 flex items-center justify-center rounded shadow-md text-center">
          <p className="text-5xl font-bold ">{courses.length}</p>
          <p className=" w-16 text-sm">Total Courses</p>
        </div>
        <div className="bg-gray-100 mr-3 text-black py-2 flex items-center justify-center rounded shadow-md text-center">
          <p className="text-5xl font-bold">{jobs.length}</p>
          <p className=" w-16  text-sm">Total Jobs</p>
        </div>
      </div>
    </>
  );
};

export default AdminSidePanel;
