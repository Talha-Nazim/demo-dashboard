import React from "react";
import { FaBell } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className=" flex items-center justify-end px-8 py-8">
      {/* Right section */}
      <div className="flex items-center gap-8">
        <button className="relative">
          <FaBell className="text-gray-600 text-lg " />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <FiLogOut />
          <button className="hidden sm:inline" onClick={handleLogout}>
            Logout
          </button>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
