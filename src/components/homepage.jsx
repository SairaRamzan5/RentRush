import React from "react";
import Navbar from "./Navbar";
import Pick from "./Pick";
import Steps from "./Steps";
import Details from "./Detail";
import Reason from "./Reason";
import Variety from "./Variety";
import Footer from "./Footer";
function HomePage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col background bg-center w-full">
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
            <div className="buttons flex gap-3">
              <button className="bg-[#C17D3C] rounded py-2 px-4 text-white">
                Booking Now
              </button>
              <button className="text-white py-2 px-4 ">See all cars</button>
            </div>
          </div>
          <div className="pickups flex flex-row justify-evenly my-1">
            <Pick purpose={"Pick-up"} search={false} />
            <Pick purpose={"Drop-off"} search={true} />
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
