import React from "react";
import Navbar from "./Navbar";
import Steps from "./Steps";
import Details from "./Detail";
import Reason from "./Reason";
import Variety from "./Variety";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Navbar />
      <div id="Home" className="">
        <div className="flex flex-col background bg-center w-full">
          <div className="info px-16 py-20 w-[60%]">
            <h1 className=" py-4 font-bold text-5xl text-white">
              FAST AND EASY WAY TO <span className="text-primary"> RENT</span>{" "}A CAR
            </h1>
            <p className="text-md font-poppins py-9 text-white pr-40">
              Our RentRush online booking system is designed to meet the
              specific needs of car rental business owners. This easy-to-use car
              rental software will let you manage.
            </p>
            <div className="buttons flex justify-start">
              <Link
              to="/signup"
              className="bg-[#C17D3C] rounded py-2 px-4 text-white"
            >
              Register
            </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flow-row justify-evenly py-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index}>
              <img
                src={`/src/assets/cars/car${index + 1}.png`}
                className="cursor-pointer"
                alt=""
              />
            </div>
          ))}
        </div>
        <Steps />
        <Details />
        <Reason />
        <Variety />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
