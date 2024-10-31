import React from "react";
import Navbar from "./Navbar";
import BookingCard from "./bookingCard";

const Bookings = () => {
  const car = [
    {
      name: "Toyota Camry New",
      image: "/src/assets/aboutcar.png",
      price: "40,000",
      mileage: "20 Miles",
      fuelType: "Petrol",
      transmission: "Automatic",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen flex flex-col items-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg w-full justify-items-center">
          {car.map((car, index) => (
            <BookingCard key={index} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookings;
