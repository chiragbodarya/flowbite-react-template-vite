import React from "react";
import { FaHome, FaCog, FaInfoCircle } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-15 left-0 h-screen bg-gray-800 text-white transition-all ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex h-full flex-col items-center">
        <ul className="mt-4 w-full space-y-4">
          <li className="flex items-center justify-center">
            <a
              href="#"
              className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-gray-700"
            >
              <FaHome size={25} />
              {isOpen && <span>Home</span>}
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a
              href="#"
              className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-gray-700"
            >
              <FaCog size={25} />
              {isOpen && <span>Settings</span>}
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a
              href="#"
              className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-gray-700"
            >
              <FaInfoCircle size={25} />
              {isOpen && <span>About</span>}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
