import Admin from "./Admin";
import Course from "./courses/Course";
import CourseForm from "./courses/CourseForm";
import JobForm from "./jobs/JobForm";
import AdminSidePanel from "./layout/AdminSidePanel";
import Job from "./jobs/Job";

const MainArea = ({activePage}) => {

  return (
    // Desktop: grid-cols-3 | Mobile: flex-col with scrolling
    <div className="flex-1 flex flex-col overflow-y-auto lg:overflow-y-hidden  lg:grid lg:grid-cols-3 bg-white rounded-2xl p-4 md:p-8  pb-24 md:pb-8">
        <div className="lg:col-span-2">
          <Admin />
        </div>
        <div className="hidden lg:block"> {/* Stats hidden on small mobile to save space, or keep it if needed */}
          <AdminSidePanel/>
        </div>
        <div className="lg:col-span-2 lg:overflow-y-auto">
          {activePage==='courses' && <Course />}
          {activePage==='jobs' && <Job/>}
        </div>
        <div className="mt-8 lg:mt-0">
          {activePage==='courses' && <CourseForm/>}
          {activePage==='jobs' && <JobForm/>}
        </div>    
    </div>
  );
};

export default MainArea;