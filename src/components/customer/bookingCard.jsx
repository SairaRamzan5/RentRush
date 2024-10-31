import React, { useState } from "react";

const BookingCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-64 relative">
      {/* Main Card */}
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
      </div>

      <div className="p-4">
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
      </div>

      {/* Modal: Only render when showModal is true */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative w-96 max-h-screen overflow-auto">
            {/* Cancel button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              &#10005;
            </button>

            <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-2xl font-bold mb-4">Rental Information</h2>
            <p className="text-gray-700"><strong>Renter Name:</strong> {car.rentalInfo?.rentername || "N/A"}</p>
            <p className="text-gray-700"><strong>Email:</strong> {car.rentalInfo?.renteremail || "N/A"}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {car.rentalInfo?.renterphone || "N/A"}</p>
            <p className="text-gray-700"><strong>Address:</strong> {car.rentalInfo?.renteraddress || "N/A"}</p>
            <p className="text-gray-700"><strong>Rental Start Date:</strong> {car.rentalInfo?.rentalStartDate || "N/A"}</p>
            <p className="text-gray-700"><strong>Rental End Date:</strong> {car.rentalInfo?.rentalEndDate || "N/A"}</p>
            <p className="text-gray-700"><strong>Rental Days:</strong> {car.rentalInfo?.rentalDays || "N/A"}</p>
            <p className="text-md font-bold"><strong>Showroom Name:</strong> {car.rentalInfo?.rentalDays || "N/A"}</p>
            <p className="text-md font-bold"><strong>Showroom Location:</strong> {car.rentalInfo?.rentalDays || "N/A"}</p>
            <p className="text-lg font-semibold mt-4"><strong>Total Amount:</strong> {car.rentalInfo?.totalAmount || "N/A"}rs</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
