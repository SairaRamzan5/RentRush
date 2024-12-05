import React, { useEffect, useState } from "react";
import UserCard from "./userCard";
import Navbar from "./Navbar";
import { Search } from "lucide-react";
import axios from "axios";
import Toast from "../Toast";
const Base_Url = import.meta.env.VITE_API_URL;

const Cars = () => {
const [cars, setCars]=useState([]);

const fetchVehicles = async () => {
  try {
    const response = await axios.get(
      `${Base_Url}/api/car/get-cars`,
      { withCredentials: true }
    );
    console.log(response);
    setCars(response.data);
  } catch (err) {
    console.log(err);
    Toast(err.data || err.message || "Something went wrong", "error");
  }
};
useEffect(() => {
  fetchVehicles();
}, []);
console.log(cars)
let cars_no = 0;
return (
  <>
    <Navbar />
    <div className="bg-[#FFFFFF]  py-2 mt-5">
      <div className="mt-4 flex px-12 flex-col">
        <div>
          <span>home/shop</span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[40px]">Shop</h1>
          <div>
            sort by
            <select name="car-typ" id="">
              <option>Default</option>
              <option value="honda">honda</option>
              <option value="toyota">toyota</option>
              <option value="hundayi">hundayi</option>
            </select>
          </div>
        </div>
        <span>{`Showing 1 – 12 of ${cars.length} results`}</span>

        {/* <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search />
            </div>
          </div> */}
      </div>
      <div className="px-[3rem] bg-[#fff]">
        <div className="flex flex-wrap  justify-between gap-y-8">
          {cars.map((car, index) => {
            const cars_no = index; // Assign cars_no to index before returning the JSX.
            return <UserCard key={index} car={car} cars_no={cars_no} />;
          })}
        </div>
      </div>
    </div>
  </>
);
};

export default Cars;
