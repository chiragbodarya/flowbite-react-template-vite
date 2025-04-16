import React from "react";
import { FaHome, FaCog, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <div className="flex h-full flex-col items-center p-2">
        <ul className="w-full space-y-4">
          <li className="flex items-center justify-center">
            <Link
              to="/"
              className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-gray-700"
            >
              <FaHome size={25} />
              {isOpen && <span>Home</span>}
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              to="dropdown/"
              className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-gray-700"
            >
              <FaCog size={25} />
              {isOpen && <span>Dropdown</span>}
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              to="/input-box"
              className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-gray-700"
            >
              <FaInfoCircle size={25} />
              {isOpen && <span>Input Box</span>}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
