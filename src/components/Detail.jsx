import React from "react";
import DetailCard from "./DetailCard";
function Detail() {
  const items = [
    {
      title: "Car Passport (PVC)",
      requirements: "Optional",
      img: "img1",
    },
    {
      title: "Car Registration",
      requirements: "Required",
      img: "img2",
    },
    {
      title: "Car keys",
      requirements: "Optional",
      img: "img3",
    },
    {
      title: "Car Owner's Passport",
      requirements: "Required",
      img: "img4",
    },
    {
      title: "License",
      requirements: "Required",
      img: "img5",
    },
  ];

  return (
    <>
      <div className="flex flex-row h-screen justify-center items-center" id="requirements">
        <div className="w-[40%] bg h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold w-[80%] mx-auto py-6 pl-24">
            Necessary Documents for Renting
          </h1>
          <img
            src="/src/assets/aboutcar.png"
            className="mx-[100px] py-10"
            alt=""
          />{" "}
        </div>
        <div className="w-[60%] py-6 flex flex-col gap-2">
          {items.map((item) => {
            return (
              <DetailCard
                title={item.title}
                requirement={item.requirements}
                img={item.img}
                key={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Detail;
