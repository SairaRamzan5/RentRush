import React from "react";
import CarCard from "./CarCard";
import TestimonialCarousel from "./Testominial";
import TestContainer from "./TestContainer";

function Variety() {
  return (
    <div className="relative z-10" id="rent">
      <div className="flex flex-row justify-evenly relative z-10">
        <CarCard img={"car1.png"} title={"Toyota Corolla T-20"}/>
        <CarCard img={"car2.png"} title={"Toyota Camry"}/>
        <CarCard img={"car3.png"} title={"White BMW-M5"}/>
      </div>
      <div className="h-fit  relative -bottom-[120%] bg-[#2C2C2C] w-full">
        <h1 className="text-white text-3xl w-[40%] text-center mx-auto pt-[15%]">
          Trusted by Thousands of Happy Customer
        </h1>
        <p className="w-[45%] mx-auto py-3 text-white text-center">
          “Renrush is proud to be trusted by thousands of satisfied customers,
          ensuring quality and reliability in every rental.
        </p>
        <TestContainer />
      </div>
    </div>
  );
}

export default Variety;
