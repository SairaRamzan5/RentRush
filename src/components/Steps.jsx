import React from "react";

function Steps() {
  return (
    <>
      <div className="bg-[#0B132A] py-5 text-white h-screen flex flex-col justify-center items-center" id="steps" >
        <h1 className="text-center text-3xl font-bold">How it Works</h1>
        <p className="text-sm text-center w-1/3 mx-auto py-4">
          A high-performing web-based car rental system for any rent-a-car
          company and website
        </p>
        <div className=" flex flex-row justify-evenly items-start pt-10 *:w-[20%] relative">
          <div className=" flex flex-col justify-center">
            <div className="bg-[#C17D3C] w-fit p-6 rounded-2xl mx-auto">
              <img src="/src/assets/work/gps.png" className="" alt="" />
            </div>{" "}
            <h1 className="py-3 text-center">Chose Location</h1>
            <p className="text-center">
              Enable car rentals across various locations. Flexible Book and
              Return Locations.
            </p>
          </div>{" "}
          <img src="/src/assets/work/line2.png" className="-mx-20 my-5" alt="" />
          <div className=" flex flex-col justify-center">
            <div className="bg-[#C17D3C] mx-auto w-fit p-6 rounded-2xl">
              <img src="/src/assets/work/celender.png" alt="" />
            </div>
            <h1 className="py-3 text-center">Pick-up Date</h1>
            <p className="text-center">
              Anytime, Anywhere, Pick your Date and Enjoy your Trip. Select your
              pick-up date for your rental car.
            </p>
          </div>
          <img src="/src/assets/work/line2.png" className="-mx-20 my-5" alt="" />
          <div className=" flex flex-col justify-center">
            <div className="bg-[#C17D3C] mx-auto w-fit p-6 rounded-2xl">
              <img src="/src/assets/work/caricon.png" alt="" />
            </div>{" "}
            <h1 className="py-3 text-center">Book your car</h1>
            <p className="text-center">
              Offer updated car information and models. Allow users to choose
              and own their preferred car models.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
