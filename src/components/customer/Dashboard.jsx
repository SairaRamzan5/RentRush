import React from "react";
import Navbar from "../customer/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/src/assets/slider-image-1.png", alt: "Image 1" },
  { src: "/src/assets/slider-image-2.png", alt: "Image 2" },
  { src: "/src/assets/slider-image-3.png", alt: "Image 3" },
  { src: "/src/assets/slider-image-4.png", alt: "Image 4" },
  { src: "/src/assets/slider-image-5.png", alt: "Image 5" },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const UserDashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Navbar />
      <div className="mt-6 max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default UserDashboard;
