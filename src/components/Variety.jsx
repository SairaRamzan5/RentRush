import React from "react";
import TestContainer from "./TestContainer";

function Variety() {
  return (
    <div className="relative z-10" id="rent">
      <div className="h-[455px] relative bg-[#2C2C2C] w-full py-16">
        <h1 className="text-white text-3xl w-[40%] text-center mx-auto pt-8">
          Trusted by Thousands of Happy Customers
        </h1>
        <p className="w-[45%] mx-auto py-3 text-white text-center">
          “RentRush is proud to be trusted by thousands of satisfied customers,
          ensuring quality and reliability in every rental.”
        </p>
        <TestContainer />
      </div>
    </div>
  );
}

export default Variety;
