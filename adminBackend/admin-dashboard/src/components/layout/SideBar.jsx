import { useState } from "react";
import { FaBook, FaBriefcase, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ setActivePage, activePage }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href='/';
  };

  return (
    <>
      <div className="fixed bottom-4 ml-2 mr-6 md:ml-0 md:mx-0   left-4 right-4 h-13 md:relative md:bottom-0 md:left-0 md:h-full md:w-20 bg-black md:rounded-2xl rounded-xl shadow-xl flex flex-row md:flex-col justify-between px-6 md:py-6 items-center z-100">
        
        {/* TOP (Desktop) / LEFT (Mobile): Logo */}
        <div className="text-white text-lg md:text-3xl font-extrabold shrink-0">S.</div>
        
        {/* CENTER: Menu Icons (Dono desktop aur mobile par center mein rahenge) */}
        <div className="flex flex-row md:flex-col gap-2 md:gap-4 text-gray-400 text-xl items-center justify-center flex-1">
          <div 
            className={`${activePage === "courses" ? "bg-white rounded-full p-3 text-black" : "p-3"} cursor-pointer text-sm md:text-2xl transition-all`} 
            onClick={() => setActivePage("courses")}
          >
            <FaBook />
          </div>
          <div 
            className={`${activePage === "jobs" ? "bg-white rounded-full p-3 text-black" : "p-3"} cursor-pointer text-sm md:text-2xl  transition-all`} 
            onClick={() => setActivePage("jobs")}
          >
            <FaBriefcase />
          </div>
        </div>

        {/* BOTTOM (Desktop) / RIGHT (Mobile): Logout Icon */}
        <div 
          onClick={() => setShowLogoutModal(true)} 
          className="text-gray-400 text-lg md:text-2xl hover:text-red-500 p-3 transition-colors shrink-0"
        >
          <FaSignOutAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-110">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center mx-4">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Are you sure you want to logout?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="px-6 py-1 bg-black text-white rounded hover:bg-black/80 transition cursor-pointer"
              >
                Yes
              </button>

              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-6 py-1 bg-gray-300 rounded hover:bg-gray-400 transition cursor-pointer text-black"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

