import React from "react";
import Navbar from "./Navbar";
import Pick from "./Pick";
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
      <div>
        <div className="flex flex-col background bg-center sm:w-auto md:w-auto lg:w-auto h-screen">
          <div className="info px-16 py-20 w-[50%]">
            <p className="text-sm py-9">
              100% Trusted Car Rental platform in Pakistan
            </p>
            <h1 className="text-3xl py-4 font-bold">
              FAST AND EASY WAY TO RENT A CAR
            </h1>
            <p className="text-sm py-9 text-white">
              Our RentRush online booking system is designed to meet the
              specific needs of car rental business owners. This easy-to-use car
              rental software will let you manage.
            </p>
            <Link
              to="/signup"
              className=" bg-[#C17D3C] py-2 text-white font-semibold px-5 rounded-md"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="flex flow-row justify-evenly py-3">
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
