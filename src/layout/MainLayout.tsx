import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-1 transition-all`}>
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className={`transition-all ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
