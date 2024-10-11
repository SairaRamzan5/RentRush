// import React from "react";

// const CarCard = ({ car }) => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-64">
//       <div className="relative">
//         <img
//           src={car.image}
//           alt={car.name}
//           className="w-full h-40 object-cover"
//         />
//       </div>

//       <div className="p-4 ">
//         <h3 className="font-bold text-lg">{car.name}</h3>
//         <p className="text-gray-600 text-sm">{car.description}</p>

//         <div className="flex justify-between text-sm text-gray-500 my-2">
//           <div className="flex flex-col items-center">
//             <span>{car.miles} Miles</span>
//             <span>{car.fuel}</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span>{car.transmission}</span>
//           </div>
//         </div>

//         <div className="flex justify-between items-center pb-4">
//           <span className="text-xl font-bold">{car.price}rs</span>
//           <a href={car.link} className="text-blue-600 hover:underline">
//             View Details
//           </a>
//         </div>
//         <span
//           className={`px-3 py-2 rounded-full text-sm font-semibold
//       ${
//         car.availability === "Available"
//           ? "bg-green-200 text-green-800"
//           : "bg-red-200 text-red-800"
//       }`}
//         >
//           {car.availability}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default CarCard;

import React, { useState } from "react";

const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 relative">
      {/* Main Card */}
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
      </div>

      <div className="p-4 ">
        <h3 className="font-bold text-lg">{car.name}</h3>
        <div className="flex justify-between text-sm text-gray-500 my-2">
          <span>{car.mileage} Miles</span>
          <span>{car.transmission}</span>
        </div>

        <div className="flex justify-between items-center pb-4">
          <span className="text-xl font-bold">{car.price}rs</span>
          <button
            onClick={openModal}
            className="text-blue-600 hover:underline"
          >
            View Details
          </button>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold mt-4 
          ${
            car.availability === "Available"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {car.availability}
        </span>
      </div>

      {/* Modal for View Details */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative w-96">
            {/* Cancel button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              &#10005;
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded" />
            <p className="text-gray-700">Mileage: {car.mileage} Miles</p>
            <p className="text-gray-700">Fuel Type: {car.fuelType}</p>
            <p className="text-gray-700">Transmission: {car.transmission}</p>
            <p className="text-lg font-semibold mt-4">{car.price}rs</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;

