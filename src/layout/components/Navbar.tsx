import React from "react";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="flex h-15 items-center justify-between bg-gray-800 p-4 text-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-white hover:bg-gray-700"
        >
          <FaBars />
        </button>
        <h1 className="text-lg font-bold">LOGO</h1>
      </div>
      <h1 className="text-lg font-bold">App Navbar</h1>
    </nav>
  );
};

export default Navbar;
