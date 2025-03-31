import { useState, useContext } from "react";
import { MyLanguage } from "../../context/myLanguage";

const Filters = ({ onFilterChange }) => {
  const { language } = useContext(MyLanguage);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { en: "pants", fa: "شلوار" },
    { en: "T-shirt", fa: "تی شرت" },
    { en: "Jacket", fa: "ژاکت" },
    { en: "Sweatshirt", fa: "دورس" },
  ];

  const handleCategoryChange = (categoryEn) => {
    setSelectedCategory(categoryEn);
    onFilterChange({ category: categoryEn }); // ارسال مقدار انگلیسی به فیلتر
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-full md:w-full">
      <h2 className="text-lg font-semibold mb-4">
        {language === "en" ? "Filters" : "فیلترها"}
      </h2>

      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">
          {language === "en" ? "Categories" : "دسته‌بندی‌ها"}
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.en}>
              <button
                onClick={() => handleCategoryChange(category.en)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === category.en
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {language === "en" ? category.en : category.fa}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
