import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <header className=" flex items-center justify-between px-8 py-8">
      {/* Right section */}
      <div className="flex items-center gap-8">
        <button className="relative">
          <FaBell className="text-gray-600 text-lg " />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <FiLogOut />
          <span className="hidden sm:inline">Logout</span>
        </button>
      
      </div>
    </header>
  );
};

export default Navbar;
