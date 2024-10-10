import React from "react";

function ShowroomDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        {/* Menu Button */}
        <button className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
          <img src="../../assets/menu.svg" alt="Menu" className="w-6 h-6" />
        </button>
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 mx-auto">Dashboard</h1>
        {/* Placeholder for alignment */}
        <div className="w-6 h-6 lg:hidden"></div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        
      </div>
    </div>
  );
}

export default ShowroomDashboard;
