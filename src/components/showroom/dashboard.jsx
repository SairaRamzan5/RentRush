import React, { useState } from "react";
import ShowroomNavbar from "./showroomNavbar";
import Drawer from "./drawer";
import CarCard from './carCard';

const cars = [
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/aboutcar.png",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  },
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/aboutcar.png",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  },
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  },
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  },
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  },
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  }, 
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  }, 
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  }, 
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  }, 
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  }, 
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  }, 
  {
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AWD",
    image: "/src/assets/cars/toyota-camry.jpg",
    miles: "20",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "40,000",
    link: "/car/toyota-camry",
    label: "Great Price",
  },
  
];

const ShowroomDashboard = () => {

  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

  // const closeDrawer = () => {
  //   setIsDrawerOpen(false);
  // };

  return (
    <div className="bg-[#2C2C2C] min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
  {cars.map((car, index) => (
    <CarCard key={index} car={car} />
  ))}
</div>

     
  );
};

export default ShowroomDashboard;
