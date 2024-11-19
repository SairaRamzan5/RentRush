// import React from "react";
import Propstypes from 'prop-types'
// import Showroom from '../admin/Showroom';
const ShowroomCard = ({ showroom }) => {
const Fullimageurl=``
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-64 relative">
      <div className="relative">
        <img
          src={showroom.images}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{showroom.showroomName}</h3>
        <div className="flex justify-between items-center pb-4">
          <span className="text-md">{showroom.address}</span>
        </div>
      </div>
    </div>
  );
};
ShowroomCard.Propstypes={
  showroom:Propstypes.array.isRequired
}
export default ShowroomCard;
