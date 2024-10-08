import Card from "./Card";
import React from "react";

function Reason() {
  const arr = [
    {
      title: "Customer Support",
      desc: "At RentRush, our dedicated customer support team is here to assist you with your car rental management.",
      img: "icon1",
    },
    {
      title: "Best Price Guaranteed",
      desc: "At RentRush, we offer the Best Price Guarantee. If you find a lower price elsewhere for your car rental, ensuring you receive the most competitive rates for your reservations.",
      img: "icon2",
    },
    {
      title: "Many Locations",
      desc: "Accessible rentals across various locations. Flexible Book and Return Locations.",
      img: "icon3",
    },
  ];

  return (
    <div className="bg-[#0B132A] text-white h-screen flex flex-col justify-center items-center relative" id="detail">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-3xl text-center py-2 font-bold">Why Choose us</h1>
      <p className="text-sm w-[40%] mx-auto text-center">
        "Choose RentRush for our unbeatable prices, extensive location options,
        and a commitment to exceptional customer service"
      </p>
      <div className="flex flow-row justify-between">
        <div>
          <img
            src="/src/assets/choose/bg.png"
            className="w-[350px] rotate-[60] relative -left-[60px]"
            alt=""
          />
          <img
            src="/src/assets/choose/redcar.png"
            className="absolute bottom-[220px] -left-12 w-[45%]"
            alt=""
          />
        </div>
        <div className="w-[50%] relative pt-[90px] ">
          {arr.map((item,index)=>{
            return <Card key={index} title={item.title} desc={item.desc} img={item.img}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Reason;
