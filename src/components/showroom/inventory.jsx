import React, { useState } from "react";
import ShowroomNavbar from "./showroomNavbar";
import Drawer from "./drawer";
import Dialog from "./dialog";
import { Plus } from "lucide-react";

function ShowroomInventory() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inventory, setInventory] = useState([]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSave = (formData) => {
    console.log("New Vehicle Added:", formData);
  };

  return (
    <div className="bg-[#2C2C2C] min-h-screen relative">
      <ShowroomNavbar onMenuClick={toggleDrawer} />

      <div className="container mx-auto p-6">
        <div className="text-white">
          <p className="text-lg mb-6">This is the inventory page.</p>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <button
        onClick={openDialog}
        className="fixed bottom-6 right-6 bg-[#C17D3C] text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-[#A86428] transition-all duration-300 ease-in-out"
      >
        <Plus className="w-6 h-6" />
      </button>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} onSave={handleSave} />
    </div>
  );
}

export default ShowroomInventory;
