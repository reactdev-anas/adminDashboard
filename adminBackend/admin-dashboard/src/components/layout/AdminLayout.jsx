import Sidebar from "./SideBar";
import MainArea from "../MainArea";
import { useState } from "react";

const AdminLayout = () => {
    const [activePage, setActivePage]= useState('courses')
  return (
    // Mobile par p-2 aur flex-col, desktop par p-6 aur flex-row (gap-6)
    <div className="h-screen bg-gray-100 p-2 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 overflow-hidden">
      <Sidebar setActivePage={setActivePage} activePage={activePage}/>
      <MainArea activePage={activePage} />
    </div>
  );
};

export default AdminLayout;