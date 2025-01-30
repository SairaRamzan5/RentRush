// import React from "react";
import Propstypes from 'prop-types'
// import Showroom from '../admin/Showroom';
const ShowroomCard = ({ showroom, car_no }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-64 relative">
      <div className="relative">
        <img
          src={`/uploads/${showroom.images}`}
          alt="showroom pic"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-center text-lg">
          Showroom:{showroom.showroomName}
        </h3>
        <div className="pb-4 text-center">
          <span className="text-md font-bold">Address:{showroom.address}</span>
        </div>
      </div>
    </div>
  );
};
ShowroomCard.Propstypes={
  showroom:Propstypes.array.isRequired
}
export default ShowroomCard;
