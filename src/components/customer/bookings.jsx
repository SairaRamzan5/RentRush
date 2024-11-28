import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import EditBookingModal from "./EditBooking";

const Base_Url = import.meta.env.VITE_API_URL;

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  //   const fetchBookings = async () => {
  //     setLoading(true); // Set loading to true when starting the fetch
  //     try {
  //       const response = await axios.get(`${Base_Url}/api/bookcar/my-bookings`, {
  //         withCredentials: true,
  //       });

  //       // Handle successful response
  //       if (response.status === 200) {
  //         if (response.data.length === 0) {
  //           setError("You have no active bookings, book a car first.");
  //           setBookings([]); // Ensure bookings state is empty
  //         } else {
  //           setBookings(response.data);
  //           setError(""); // Clear any previous error
  //         }
  //       } else if (response.status === 204) {
  //         // No content but successful request
  //         setError("You have no active bookings, book a car first.");
  //         setBookings([]); // No bookings
  //       }
  //     } catch (err) {
  //       // General error handling
  //       if (err.response) {
  //         // Server responded with a status code out of the 2xx range
  //         if (err.response.status === 404) {
  //           setError("You have no active bookings, book a car first."); // Specific message for 404
  //         } else {
  //           setError("Server error. Please try again later."); // Handle other server errors
  //         }
  //       } else if (err.request) {
  //         // No response received
  //         setError("API is not working, failed to fetch bookings.");
  //       } else {
  //         // Other unexpected errors
  //         setError("Failed to fetch bookings.");
  //       }
  //     } finally {
  //       setLoading(false); // Set loading to false after the fetch is complete
  //     }
  //   };

  //   useEffect(() => {
  //     fetchBookings();
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

  //   return (
  //     <div>
  //       <Navbar />
  //       <div className="px-10">
  //         <h2 className="flex justify-center items-center text-2xl font-bold my-4">
  //           Your Bookings
  //         </h2>
  //         {bookings.length === 0 ? (
  //           <p>No active bookings found.</p>
  //         ) : (
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-60">
  //             {bookings.map((booking) => (
  //               <div
  //                 key={booking._id}
  //                 className="bg-white shadow-md rounded-lg p-4"
  //               >
  //                 <img
  //                   src={`/uploads/${booking.carDetails.images}`}
  //                   alt={`${booking.carDetails.carBrand} ${booking.carDetails.carModel}`}
  //                   className="w-full h-60 rounded"
  //                 />
  //                 <p>
  //                   <strong>Car Brand:</strong> {booking.carDetails.carBrand}{" "}
  //                   {/* Adjusted to match your schema */}
  //                 </p>
  //                 <p>
  //                   <strong>Car Model:</strong> {booking.carDetails.carModel}{" "}
  //                   {/* Adjusted to match your schema */}
  //                 </p>
  //                 <p>
  //                   <strong>Daily Rent:</strong> {booking.carDetails.rentRate}{" "}
  //                   Rs/- {/* Adjusted to match your schema */}
  //                 </p>
  //                 <p>
  //                   <strong>Rental Start:</strong>{" "}
  //                   {new Date(booking.rentalStartDate).toLocaleString()}
  //                 </p>
  //                 <p>
  //                   <strong>Rental Start Time:</strong> {booking.rentalStartTime}
  //                 </p>
  //                 <p>
  //                   <strong>Rental End:</strong>{" "}
  //                   {new Date(booking.rentalEndDate).toLocaleString()}
  //                 </p>
  //                 <p>
  //                   <strong>Rental End Time:</strong> {booking.rentalEndTime}
  //                 </p>
  //                 <p>
  //                   <strong>Total Price:</strong> {booking.totalPrice} Rs/-
  //                 </p>
  //                 <div className="bottom-4 right-4 space-x-4 my-5">
  //               <button className="bg-green-600 text-white py-2 px-4 rounded">
  //                 Edit Details
  //               </button>
  //               <button className="bg-red-600 text-white py-2 px-4 rounded">
  //                 Cancel Booking
  //               </button>
  //             </div>
  //               </div>

  //             ))}

  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // export default UserBookings;

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Base_Url}/api/bookcar/my-bookings`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        if (response.data.length === 0) {
          setError("You have no active bookings, book a car first.");
          setBookings([]);
        } else {
          setBookings(response.data);
          setError("");
        }
      } else if (response.status === 204) {
        setError("You have no active bookings, book a car first.");
        setBookings([]);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError("You have no active bookings, book a car first.");
        } else {
          setError("Server error. Please try again later.");
        }
      } else if (err.request) {
        setError("API is not working, failed to fetch bookings.");
      } else {
        setError("Failed to fetch bookings.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handleUpdateBooking = async (bookingId, updatedBooking) => {
    try {
      const response = await axios.put(
        `${Base_Url}/api/bookcar/update/${bookingId}`,
        updatedBooking,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        // Update the bookings state with the updated booking
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, ...updatedBooking }
              : booking
          )
        );
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      setError("Failed to update booking.");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="px-10">
        <h2 className="flex justify-center items-center text-2xl font-bold my-4">
          Your Bookings
        </h2>
        {bookings.length === 0 ? (
          <p>No active bookings found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-60">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={`/uploads/${booking.carDetails.images}`}
                  alt={`${booking.carDetails.carBrand} ${booking.carDetails.carModel}`}
                  className="w-full h-60 rounded"
                />
                <p>
                  <strong>Car Brand:</strong> {booking.carDetails.carBrand}
                </p>
                <p>
                  <strong>Car Model:</strong> {booking.carDetails.carModel}
                </p>
                <p>
                  <strong>Daily Rent:</strong> {booking.carDetails.rentRate}{" "}
                  Rs/-
                </p>
                <p>
                  <strong>Rental Start Date:</strong>{" "}
                  {new Date(booking.rentalStartDate).toLocaleString()}
                </p>
                <p>
                  <strong>Rental Start Time:</strong> {booking.rentalStartTime}
                </p>
                <p>
                  <strong>Rental End Date:</strong>{" "}
                  {new Date(booking.rentalEndDate).toLocaleString()}
                </p>
                <p>
                  <strong>Rental End Time:</strong> {booking.rentalEndTime}
                </p>
                <p>
                  <strong>Total Price:</strong> {booking.totalPrice} Rs/-
                </p>
                <p>
                  <strong>ShowroomName:</strong> {booking.showroomDetails.showroomName}
                </p>
                <p>
                  <strong>ShowroomAddress</strong> {booking.showroomDetails.address}
                </p>
                <div className="bottom-4 right-4 space-x-4 my-5">
                  <button
                    className="bg-green-600 text-white py-2 px-4 rounded"
                    onClick={() => handleEditClick(booking)}
                  >
                    Edit Details
                  </button>
                  <button className="bg-red-600 text-white py-2 px-4 rounded">
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && (
        <EditBookingModal
          booking={selectedBooking}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdateBooking}
        />
      )}
    </div>
  );
};

export default UserBookings;

// try {
//   const response = await axios.get(`${Base_Url}/api/bookcar/my-bookings`, {
//     withCredentials: true,
//   });
//   setBookings(response.data);
//   console.log(response.data);
// } catch (err) {
//   setError("Failed to fetch bookings");
//   console.error(err);
// } finally {
//   setLoading(false);
// }

// export default UserBookings;
// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { CircleGauge, Fuel, GripHorizontal } from "lucide-react";

// const Bookings = () => {
//   const car = {
//     name: "Toyota Camry New",
//     image: "/src/assets/aboutcar.png",
//     price: 40000,
//     mileage: "20 Miles",
//     fuelType: "Petrol",
//     transmission: "Automatic",
//     rentalInfo: {
//       rentalStartDate: "2024-11-07",
//       rentalEndDate: "2024-11-09",
//       rentalStartTime: "10:00 pm",
//       rentalEndTime: "10:00 pm",
//       showroomName: "Premium Showroom",
//       showroomLocation: "Downtown, City",
//     },
//   };

//   const [progress, setProgress] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [rentalStarted, setRentalStarted] = useState(false);
//   const [rentalEnded, setRentalEnded] = useState(false);
//   const [rentalDays, setRentalDays] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const calculateProgressAndTimeLeft = () => {
//     const startTime = new Date(
//       `${car.rentalInfo.rentalStartDate} ${car.rentalInfo.rentalStartTime}`
//     );
//     const endTime = new Date(
//       `${car.rentalInfo.rentalEndDate} ${car.rentalInfo.rentalEndTime}`
//     );
//     const currentTime = new Date();

//     const totalDuration = endTime - startTime;
//     const elapsedTime = currentTime - startTime;

//     const progressPercentage = Math.min(
//       100,
//       (elapsedTime / totalDuration) * 100
//     );

//     if (currentTime >= startTime) {
//       setRentalStarted(true);

//       if (currentTime >= endTime) {
//         setRentalEnded(true);
//         setTimeLeft("Rental period has ended");
//       } else {
//         const timeRemaining = endTime - currentTime;

//         const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
//         const minutes = Math.floor(
//           (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
//         );
//         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//         setTimeLeft(`${hours}h ${minutes}m ${seconds}s left`);

//         setProgress(progressPercentage >= 0 ? progressPercentage : 0);
//       }
//     } else {
//       setRentalStarted(false);
//       setTimeLeft(null);
//     }
//   };

//   const calculateRentalDays = () => {
//     const startTime = new Date(
//       `${car.rentalInfo.rentalStartDate} ${car.rentalInfo.rentalStartTime}`
//     );
//     const endTime = new Date(
//       `${car.rentalInfo.rentalEndDate} ${car.rentalInfo.rentalEndTime}`
//     );

//     const totalDurationInHours = (endTime - startTime) / (1000 * 60 * 60);
//     const days = Math.ceil(totalDurationInHours / 24);
//     setRentalDays(days);
//     setTotalPrice(days * car.price);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       calculateProgressAndTimeLeft();
//     }, 1000);

//     calculateRentalDays();

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className="bg-white flex flex-col lg:flex-row items-start lg:h-screen h-auto w-full p-6 pb-5 relative">
//         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//           <img
//             src={car.image}
//             alt={car.name}
//             className="w-full h-auto lg:h-full object-cover rounded-lg"
//           />
//         </div>

//         <div className="lg:w-1/2 w-full lg:pl-10 space-y-4">
//           {rentalStarted && !rentalEnded && (
//             <div className="top-4 right-4">
//               <div className="w-64 bg-gray-300 rounded-full h-4 mt-2">
//                 <div
//                   className="bg-primary h-4 rounded-full"
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div>
//               <p className="text-sm text-gray-500 mt-2">{timeLeft}</p>
//             </div>
//           )}

//           <h2 className="text-3xl font-bold">{car.name}</h2>
//           <p className="text-xl font-semibold">{car.price} RS / day</p>
//           <div className="grid grid-cols-3 gap-4 text-sm text-black my-2">
//             <div className="flex flex-col items-center">
//               <CircleGauge />
//               <span className="text-gray-500">{car.mileage}</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <Fuel />
//               <span className="text-gray-500">{car.fuelType}</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <GripHorizontal />
//               <span className="text-gray-500">{car.transmission}</span>
//             </div>
//           </div>

//           <table className="min-w-full table-fixed border-collapse border border-gray-400 text-left text-sm">
//             <thead>
//               <tr>
//                 <th
//                   className="border border-gray-400 bg-black text-white p-2 text-center"
//                   colSpan={2}
//                 >
//                   Rental Information
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="w-1/2 border border-gray-400 p-2 font-semibold">
//                   Rental Start Date
//                 </td>
//                 <td className="w-1/2 border border-gray-400 p-2">
//                   {car.rentalInfo.rentalStartDate}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-400 p-2 font-semibold">
//                   Rental End Date
//                 </td>
//                 <td className="border border-gray-400 p-2">
//                   {car.rentalInfo.rentalEndDate}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-400 p-2 font-semibold">
//                   Rental Start Time
//                 </td>
//                 <td className="border border-gray-400 p-2">
//                   {car.rentalInfo.rentalStartTime}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-400 p-2 font-semibold">
//                   Rental End Time
//                 </td>
//                 <td className="border border-gray-400 p-2">
//                   {car.rentalInfo.rentalEndTime}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-400 p-2 font-semibold">
//                   Rental Days
//                 </td>
//                 <td className="border border-gray-400 p-2">{rentalDays}</td>
//               </tr>
//             </tbody>
//           </table>

//           <table className="min-w-full table-fixed border-collapse border border-gray-400 text-left text-sm">
//             <thead>
//               <tr>
//                 <th
//                   className="border border-gray-400 bg-black text-white p-2 text-center"
//                   colSpan={2}
//                 >
//                   Showroom Information
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="w-1/2 border border-gray-400 p-2 font-semibold">
//                   Showroom Name
//                 </td>
//                 <td className="w-1/2 border border-gray-400 p-2">
//                   {car.rentalInfo.showroomName}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-400 p-2 font-semibold">
//                   Showroom Location
//                 </td>
//                 <td className="border border-gray-400 p-2">
//                   {car.rentalInfo.showroomLocation}
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <p className="text-xl font-semibold mt-4 pb-5">
//             <strong>Total Amount</strong> {totalPrice} RS
//           </p>

//           {rentalEnded && (
//             <div className="mt-4 pb-5">
//               <button className="bg-primary text-white py-2 px-4 rounded">
//                 Return Car
//               </button>
//             </div>
//           )}

//           {!rentalStarted && (
//             <div className="bottom-4 right-4 space-x-4 pb-5">
//               <button className="bg-green-600 text-white py-2 px-4 rounded">
//                 Edit Details
//               </button>
//               <button className="bg-red-600 text-white py-2 px-4 rounded">
//                 Cancel Booking
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bookings;
