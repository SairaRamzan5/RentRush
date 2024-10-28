import React, { useState } from "react";
import { CircleGauge, Fuel, GripHorizontal } from "lucide-react"

const UserCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 relative">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-40 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">{car.name}</h3>
        <div className="grid grid-cols-3 gap-4 text-sm text-black my-2">
          <div className="flex flex-col items-center">
            <CircleGauge />
            <span className="text-gray-500">{car.mileage}</span>
          </div>
          <div className="flex flex-col items-center">
            <Fuel />
            <span className="text-gray-500">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center">
            <GripHorizontal />
            <span className="text-gray-500">{car.transmission}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pb-4">
          <span className="text-xl font-bold">{car.price}rs</span>

          <button onClick={openModal} className="text-blue-600 hover:underline">
            View Details
          </button>
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative w-4/5 h-4/5 overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              &#10005;
            </button>

            
            <div className="flex flex-col items-center space-y-6 border">
              <h2 className="text-2xl font-bold">{car.name}</h2>

              
              <img
                src={car.image}
                alt={car.name}
                className="w-96 h-96 object-contain rounded mb-4 border shadow-lg bg-gray-100" 
              />

              
              <div className="flex justify-between gap-2 mb-4 ">
                
                {car.gallery?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Car ${index}`}
                    className="w-1/5 h-20 object-contain rounded mb-4 border shadow-lg bg-gray-100"
                  />
                )) || (
                  <>
                    <img
                      src={car.image}
                      alt="Car Image 1"
                      className="w-1/5 h-20 object-contain rounded mb-4 border shadow-lg bg-gray-100"
                    />
                    <img
                      src={car.image}
                      alt="Car Image 2"
                      className="w-1/5 h-20 object-contain rounded mb-4 border shadow-lg bg-gray-100"
                    />
                    <img
                      src={car.image}
                      alt="Car Image 3"
                      className="w-1/5 h-20 object-contain rounded mb-4 border shadow-lg bg-gray-100"
                    />
                    <img
                      src={car.image}
                      alt="Car Image 4"
                      className="w-1/5 h-20 object-contain rounded mb-4 border shadow-lg bg-gray-100"
                    />
                  </>
                )}
              </div>

              <h2 className="text-2xl font-bold">Car Details</h2>
              <p className="text-gray-700">
                <strong>Model:</strong> {car.name}
              </p>
              <p className="text-gray-700">
                <strong>Mileage:</strong> {car.mileage} miles
              </p>
              <p className="text-gray-700">
                <strong>Transmission:</strong> {car.transmission}
              </p>
              <p className="text-gray-700">
                <strong>Fuel Type:</strong> {car.fuelType || "N/A"}
              </p>
              <p className="text-lg font-semibold">
                <strong>Price:</strong> {car.price}rs
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
