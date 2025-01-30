import React, { useState } from "react";

const FilterSidebar = () => {
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

  return (
    <aside className="w-64 space-y-6 p-4 border-r border-gray-200 bg-gray-50">
      {/* Color Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Color</h3>
        <div className="space-y-3">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`color-${color.id}`}
                checked={selectedColors.includes(color.id)}
                onChange={() => handleColorChange(color.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`color-${color.id}`}
                className="text-sm text-gray-600 cursor-pointer"
              >
                {color.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm text-gray-600 cursor-pointer"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
