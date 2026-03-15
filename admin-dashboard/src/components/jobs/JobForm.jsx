import { useContext } from "react";
import { context } from "../contextAPI/DataProvider";

const JobForm = () => {
  const { 
    handleJobChange, 
    handleJobSubmit, 
    jobField, 
    toggleJob, 
    handleSaveJob 
  } = useContext(context);

  return (
    <div className="lg:ml-5 px-1 md:px-0">
      <h2 className="text-2xl font-semibold mt-3 mb-5">
        {toggleJob ? "Edit Job" : "Add New Job"}
      </h2>

      <form 
        onSubmit={toggleJob ? handleSaveJob : handleJobSubmit} 
        className="flex flex-col gap-5"
      >
        {/* Row 1: Company & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={jobField.company}
            onChange={handleJobChange}
            className="px-3 py-2 rounded-lg outline-none bg-gray-100 w-full focus:ring-1 focus:ring-black transition"
            required
          />

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={jobField.title}
            onChange={handleJobChange}
            className="px-3 py-2 rounded-lg outline-none bg-gray-100 w-full focus:ring-1 focus:ring-black transition"
            required
          />
        </div>

        {/* Row 2: Job Type & Work Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select
            name="jobType"
            value={jobField.jobType}
            onChange={handleJobChange}
            className="px-3 py-2 rounded-lg outline-none bg-gray-100 w-full focus:ring-1 focus:ring-black transition cursor-pointer"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>

          <select
            name="workMode"
            value={jobField.workMode}
            onChange={handleJobChange}
            className="px-3 py-2 rounded-lg outline-none bg-gray-100 w-full focus:ring-1 focus:ring-black transition cursor-pointer"
            required
          >
            <option value="">Select Work Mode</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Row 3: Description */}
        <textarea
          name="jobDescription"
          value={jobField.jobDescription}
          onChange={handleJobChange}
          placeholder="Job Description"
          className="p-3 outline-none bg-gray-100 rounded-lg h-32 w-full focus:ring-1 focus:ring-black transition resize-none"
          required
        />

        {/* Action Button */}
        <button
          type="submit"
          className="bg-black text-white py-2.5 rounded font-bold cursor-pointer hover:bg-gray-800 active:scale-[0.98] transition-all"
        >
          {toggleJob ? "Save Job Changes" : "Add New Job"}
        </button>
      </form>
    </div>
  );
};

export default JobForm;