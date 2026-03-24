import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const context = createContext();
export const DataProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [courseField, setCourseField] = useState({
    title: "",
    image: null,
    videoUrl: "",
    duration: "",
    description: "",
  });
  const [jobField, setJobField] = useState({
    title: "",
    company: "",
    jobType: "",
    workMode: "",
    jobDescription: "",
  });
  console.log(jobField);
  const [toggle, setToggle] = useState(false);
  const [toggleJob, setToggleJob] = useState(false);
  const [id, setId] = useState(null);
  const [jobId, setJobId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") setCourseField({ ...courseField, image: files[0] });
    else setCourseField({ ...courseField, [name]: value });
  };

  const handleJobChange = (e) => {
    const updatedFields = {
      ...jobField,
      [e.target.name]: e.target.value,
    };

    setJobField(updatedFields);
  };
  //  const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   Object.keys(courseField).forEach((key) => formData.append(key, courseField[key]));

  //   try {
  //     await axios.post("https://admindashboard-kom7.onrender.com/api/courses", formData);
  //     console.log("Data Saved Successfully ✅");

  //     setCourseField({ title: "", image: null, videoUrl: "", duration: "", description: "" });
  //   } catch (error) {
  //     console.log("Error while sending data:", error.response?.data || error.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(courseField).forEach((key) =>
      formData.append(key, courseField[key]),
    );

    try {
      const response = await axios.post(
        "https://admindashboard-kom7.onrender.com/api/courses",
        formData,
      );
      const newCourse = response.data.newCourse;

      // 🔹 Update courses state locally (instant add)
      setCourses((prevCourses) => [...prevCourses, newCourse]);

      console.log("Course added successfully ✅");

      // Reset form
      setCourseField({
        title: "",
        image: null,
        videoUrl: "",
        duration: "",
        description: "",
      });
    } catch (error) {
      console.log(
        "Error while sending data:",
        error.response?.data || error.message,
      );
    }
  };

  //  const handleJobSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post("https://admindashboard-kom7.onrender.com/api/jobs", jobField);

  //     console.log("Data Saved Successfully");

  //     // Reset form
  //     setJobField({
  //       title: "",
  //       company: "",
  //       jobType: "",
  //       workMode: "",
  //       jobDescription: "",
  //     });

  //   } catch (error) {
  //     console.log("Error while saving the data", error);
  //   }
  // };

  const handleJobSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://admindashboard-kom7.onrender.com/api/jobs",
        jobField,
      );
      const newJob = response.data.newJob; // assume backend me naya job return ho raha hai

      // 🔹 Instant add to local state
      setJobs((prevJobs) => [...prevJobs, newJob]);

      console.log("Job added successfully ✅");

      // Reset form
      setJobField({
        title: "",
        company: "",
        jobType: "",
        workMode: "",
        jobDescription: "",
      });
    } catch (error) {
      console.log(
        "Error while saving the data",
        error.response?.data || error.message,
      );
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

  const getAllJobs = async () => {
    try {
      const response = await axios.get("https://admindashboard-kom7.onrender.com/api/jobs");
      const allJobs = response.data.alljobs; // ✅ correct
      console.log(allJobs);

      setJobs(allJobs);
    } catch (error) {
      console.log("Error while fetching the jobs data :", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    console.log(id);
    try {
      await axios.delete(`https://admindashboard-kom7.onrender.com/api/courses/${id}`);
      console.log("Job Deleted Successfully");

      // Update state to remove deleted course
      setCourses((prevCourses) => prevCourses.filter((job) => job._id !== id));
    } catch (error) {
      console.log("error while deleting the course :", error);
    }
  };

  const handleDeleteJob = async (id) => {
    console.log(id);
    try {
      await axios.delete(`https://admindashboard-kom7.onrender.com/api/jobs/${id}`);
      console.log("Job Deleted Successfully");

      // Update state to remove deleted job
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      console.log("error while deleting the job :", error);
    }
  };

  const handleEdit = (course) => {
    setId(course._id);
    setCourseField({
      title: course.title,
      image: course.image,
      videoUrl: course.videoUrl,
      duration: course.duration,
      description: course.description,
    });
    setToggle(true);
  };

  const handleEditJob = (job) => {
    console.log(job);
    setJobId(job._id);
    setJobField({
      title: job.title,
      company: job.company,
      jobType: job.jobType,
      workMode: job.workMode,
      jobDescription: job.jobDescription,
    });
    setToggleJob(true);
  };

  //    const handleSave = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   Object.keys(courseField).forEach((key) => formData.append(key, courseField[key]));

  //   try {
  //     await axios.put(`https://admindashboard-kom7.onrender.com/api/courses/${id}`, formData);
  //     console.log("Course updated successfully ✅");

  //     // Reset form and toggle
  //     setCourseField({ title: "", image: null, videoUrl: "", duration: "", description: "" });
  //     setToggle(false);

  //     // Refresh courses
  //     getCourses();
  //   } catch (error) {
  //     console.log("Error while updating course:", error.response?.data || error.message);
  //   }
  // };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(courseField).forEach((key) =>
      formData.append(key, courseField[key]),
    );

    try {
      const response = await axios.put(
        `https://admindashboard-kom7.onrender.com/api/courses/${id}`,
        formData,
      );
      const updatedCourse = response.data.updatedCourse;

      // 🔹 Update courses state locally
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === id ? updatedCourse : course,
        ),
      );

      console.log("Course updated successfully ✅");

      // Reset form & toggle
      setCourseField({
        title: "",
        image: null,
        videoUrl: "",
        duration: "",
        description: "",
      });
      setToggle(false);
      setId(null);
    } catch (error) {
      console.log(
        "Error while updating course:",
        error.response?.data || error.message,
      );
    }
  };
  const handleSaveJob = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://admindashboard-kom7.onrender.com/api/jobs/${jobId}`,
        jobField,
      );

      const updatedJob = response.data.updatedJob;

      // 🔹 Instant update in local state
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job._id === jobId ? updatedJob : job)),
      );

      console.log("Job updated successfully ✅");

      // Reset form & toggle
      setJobField({
        title: "",
        company: "",
        jobType: "",
        workMode: "",
        jobDescription: "",
      });
      setToggleJob(false);
      setJobId(null);
    } catch (error) {
      console.log(
        "Error while updating job:",
        error.response?.data || error.message,
      );
    }
  };

  useEffect(() => {
    getCourses();
    getAllJobs();
  }, []);

  return (
    <context.Provider
      value={{
        courseField,
        handleChange,
        handleSubmit,
        handleEdit,
        handleDeleteCourse,
        courses,
        toggle,
        toggleJob,
        handleSave,
        handleJobChange,
        handleJobSubmit,
        jobField,
        handleDeleteJob,
        jobs,
        handleEditJob,
        handleSaveJob,
      }}
    >
      {children}
    </context.Provider>
  );
};
