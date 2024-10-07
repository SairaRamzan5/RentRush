import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function scrollToSteps() {
    const element = document.getElementById('steps');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToDetails() {
    const element = document.getElementById('detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }function scrollToTest() {
    const element = document.getElementById('Test');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollTorent() {
    const element = document.getElementById('rent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4  flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/src/assets/logo.svg"
            alt="Logo"
            className="-my-3 h-[100px] mr-2"
          />
        </div>
        <div className="flex flex-row gap-3">
          <div className="hidden md:flex space-x-4 border-r border-black px-2">
            <Link to="/" className="text-gray-700 hover:text-[#C17D3C]">
              Home
            </Link>
            <li onClick={scrollToSteps} className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]">How it work</li>
            <li className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]" onClick={scrollTorent}>Rental Deals</li>
            <li onClick={scrollToDetails} className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]">why choose us</li>
            <li className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]" onClick={scrollToTest}>Testimonials</li>
          </div>
          <div className="flex space-x-4">
            <Link to="/signup" className=" text-black px-4  rounded ">
              Register
            </Link>
            <Link
              to="/login"
              className="bg-[#C17D3C] py-1 text-white px-5  rounded "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
