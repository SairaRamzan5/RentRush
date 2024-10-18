import { Search, User, Calendar, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/src/assets/logo.svg"
              alt="Logo"
              className="-my-3 h-[100px] mr-2"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div
            onClick={toggleDropdown}
            className="flex items-center space-x-3 hover:cursor-pointer p-1 border border-black rounded-3xl"
          >
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold">A</span>
            </div>
            <span className="text-gray-700 font-medium">Abdullah Bin Altaf</span>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link
                to="/customer/profile"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <User className="mr-2" /> Profile
              </Link>
              <Link
                to="/bookings"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <Calendar className="mr-2" /> Your Bookings
              </Link>
              <Link
                to="/logout"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <LogOut className="mr-2" /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
