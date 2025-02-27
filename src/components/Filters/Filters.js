import { useState } from "react";

const Filters = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Price, setPrice] = useState([0, 1000]);

  const handleCategoryChange = (category) => {
    console.log(category)
    setSelectedCategory(category);
    onFilterChange({ category, Price });
  };

  const handlePriceChange = (event) => {
    
    const value = event.target.value;
    setPrice([0, value]);
   
    
    onFilterChange({ category: selectedCategory, Price: [0, value] });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-full md:w-full">
      <h2 className="text-lg font-semibold mb-4">فیلترها</h2>
      
      {/* دسته‌بندی‌ها */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">دسته‌بندی‌ها</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleCategoryChange("شلوار")}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === "شلوار" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
            >
              شلوار
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryChange("تی شرت")}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === "تی شرت" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
            >
              تی شرت
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryChange("کاپشن")}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === "کاپشن" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
            >
               کاپشن
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryChange("دورس")}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === "دورس" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
            >
              دورس
            </button>
          </li>
        </ul>
      </div>

      {/* فیلتر قیمت */}
      <div>
        <h3 className="text-md font-medium mb-2">محدوده قیمت</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={Price[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p className="text-sm text-gray-700 mt-2">تا {Price[1]} تومان</p>
      </div>
    </div>
  );
};

export default Filters;
