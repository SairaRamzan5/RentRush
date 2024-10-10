import React from 'react';


const CarCard = ({ car }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-64">
      {/* Image section */}
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
        <div className="absolute top-2 left-2 bg-green-200 text-green-800 px-2 py-1 rounded-full">
          {car.label}
        </div>
      </div>

      {/* Car details */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{car.name}</h3>
        <p className="text-gray-600 text-sm">{car.description}</p>

        {/* Info section */}
        <div className="flex justify-between text-sm text-gray-500 my-2">
          <div className="flex flex-col items-center">
            <span>{car.miles} Miles</span>
            <span>{car.fuel}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Price and details */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{car.price}rs</span>
          <a href={car.link} className="text-blue-600 hover:underline">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
