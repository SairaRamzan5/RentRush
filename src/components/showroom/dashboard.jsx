import React, { useState } from "react";
import ShowroomNavbar from "./showroomNavbar"; // Import ShowroomNavbar component
import Drawer from "./drawer"; // Import Drawer component

function ShowroomDashboard() {
  // State to control drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-[#2C2C2C] min-h-screen">
      {/* Use the ShowroomNavbar component */}
      <ShowroomNavbar onMenuClick={toggleDrawer} />

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <div className="text-white">
          <p className="text-lg mb-6">
            This is the main content area of the dashboard. You can place your items or features here.
          </p>
        </div>
      </div>

      {/* Use the Drawer component */}
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
}

export default ShowroomDashboard;
