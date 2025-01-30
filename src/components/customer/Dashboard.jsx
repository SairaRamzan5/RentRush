import React, { useEffect, useState } from "react";
import Navbar from "../customer/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import UserCard from "./userCard";
import Toast from "../Toast";
import ShowroomCard from "./showroomCard";
const Base_Url = import.meta.env.VITE_API_URL;
const images = [
  { src: "/src/assets/showroom.jpg", alt: "Image 1" },
  { src: "/src/assets/car.jpg", alt: "Image 2" },
  { src: "/src/assets/showroom.jpg", alt: "Image 3" },
  { src: "/src/assets/car.jpg", alt: "Image 4" },
  { src: "/src/assets/showroom.jpg", alt: "Image 5" },
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
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // new .........................................
  const colors = [
    { id: "white", label: "White" },
    { id: "beige", label: "Beige" },
    { id: "blue", label: "Blue" },
    { id: "brown", label: "Brown" },
    { id: "green", label: "Green" },
    { id: "purple", label: "Purple" },
  ];

  const categories = [
    { id: "new-arrivals", label: "All New Arrivals" },
    { id: "tees", label: "Tees" },
    { id: "crewnecks", label: "Crewnecks" },
    { id: "sweatshirts", label: "Sweatshirts" },
    { id: "pants-shorts", label: "Pants & Shorts" },
  ];

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleColorChange = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  const [cars, setCars] = useState([]);
  const [showrooms, setShowrooms] = useState([]);
  const [activeTab, setActiveTab] = useState("cars");
  const fetchVehicles = async () => {
    try {
      const response = await axios.get(`${Base_Url}/api/car/get-cars`, {
        withCredentials: true,
      });
      console.log(response);
      setCars(response.data);
    } catch (err) {
      console.log(err);
      Toast(err.data || err.message || "Something went wrong", "error");
    }
  };
  const fetchShowrooms = async () => {
    try {
      const response = await axios.get(`${Base_Url}/api/showrooms`, {
        withCredentials: true,
      });

      console.log("function called");
      // console.log(response.data.data);
      setShowrooms(response.data.data);
      console.log("function calling end");
      console.log(showrooms);
    } catch (err) {
      console.log(err);
      Toast(err.data || err.message || "Something went wrong", "error");
    }
  };
  useEffect(() => {
    if (activeTab === "cars") {
      fetchVehicles();
    } else if (activeTab === "showroom") {
      fetchShowrooms();
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex w-full mt-5 h-auto">
        {/* Sidebar */}
        <aside className="w-[20vw] p-4 bg-gray-50 border-r border-gray-200 fixed h-[calc(100vh-100px)] overflow-y-auto">
          {/* Color Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Color</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleColorChange(color.id)}
                  id="All"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`All`}
                  className="ml-2 text-sm text-gray-600 cursor-pointer"
                >
                  All
                </label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Color</h3>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`color-${color.id}`}
                    checked={selectedColors.includes(color.id)}
                    onChange={() => handleColorChange(color.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`color-${color.id}`}
                    className="ml-2 text-sm text-gray-600 cursor-pointer"
                  >
                    {color.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="ml-2 text-sm text-gray-600 cursor-pointer"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Banner */}
        <div className="ms-[22vw] w-[60vw] overflow-y-auto">
          <div className="mx-auto w-100">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="h-[50vh] mx-auto">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
            <div className=" flex justify-center items-center mt-8 bg-gray-50">
              <button
                className={`px-4 py-2 mr-4 font-semibold text-lg ${
                  activeTab === "cars" ? "bg-primary text-white" : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("cars")}
              >
                Cars
              </button>
              <button
                className={`px-4 py-2 font-semibold text-lg ${
                  activeTab === "showroom"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("showroom")}
              >
                Showrooms
              </button>
            </div>
            {activeTab === "cars" ? (
              <div className="mt-8">
                <div className="flex flex-wrap  justify-start gap-8">
                  {cars.map((car, index) => {
                    const cars_no = index;
                    return <UserCard key={index} car={car} cars_no={cars_no} />;
                  })}
                </div>
              </div>
            ) : (
              activeTab === "showroom" && (
                <div className="mt-8">
                  <div className="flex flex-wrap  justify-start gap-8">
                    {showrooms.map((showroom, index) => {
                      const cars_no = index;
                      console.log(showroom);
                      return (
                        <ShowroomCard
                          key={index}
                          showroom={showroom}
                          cars_no={cars_no}
                        />
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <Navbar />
    //   <div className="mt-6 max-w-screen-lg mx-auto mb-52">
    //     <div className="h-screen sm:w-auto p-5 lg:p-0">
    //       <Slider {...settings}>
    //         {images.map((image, index) => (
    //           <div key={index}>
    //             <img
    //               src={image.src}
    //               alt={image.alt}
    //               className="w-full h-96 object-cover"
    //             />
    //           </div>
    //         ))}
    //       </Slider>
    //     </div>
    //     <aside className="w-64 space-y-6 p-4 border-r border-gray-200 bg-gray-50">
    //       {/* Color Filter */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-medium">Color</h3>
    //         <div className="space-y-3">
    //           {colors.map((color) => (
    //             <div key={color.id} className="flex items-center space-x-2">
    //               <input
    //                 type="checkbox"
    //                 id={`color-${color.id}`}
    //                 checked={selectedColors.includes(color.id)}
    //                 onChange={() => handleColorChange(color.id)}
    //                 className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    //               />
    //               <label
    //                 htmlFor={`color-${color.id}`}
    //                 className="text-sm text-gray-600 cursor-pointer"
    //               >
    //                 {color.label}
    //               </label>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Category Filter */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-medium">Category</h3>
    //         <div className="space-y-3">
    //           {categories.map((category) => (
    //             <div key={category.id} className="flex items-center space-x-2">
    //               <input
    //                 type="checkbox"
    //                 id={`category-${category.id}`}
    //                 checked={selectedCategories.includes(category.id)}
    //                 onChange={() => handleCategoryChange(category.id)}
    //                 className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    //               />
    //               <label
    //                 htmlFor={`category-${category.id}`}
    //                 className="text-sm text-gray-600 cursor-pointer"
    //               >
    //                 {category.label}
    //               </label>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </aside>
    //   </div>
    // </>
  );
};

export default UserDashboard;
