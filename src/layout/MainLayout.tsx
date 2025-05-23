import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex flex-1 flex-col transition-all`}>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div
          className={`p-4transition-all flex-1 overflow-y-auto bg-gray-100 ${isSidebarOpen ? "ml-64" : "ml-16"}`}
        >
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
