"use client";
import { useContext } from "react";
import { MyLanguage } from "@/context/myLanguage";

function ProductItem({ image, name, description, price, discountPercentage }) {
  const { language } = useContext(MyLanguage);

  // محاسبه قیمت نهایی پس از اعمال تخفیف
  const calculateDiscountedPrice = (originalPrice) => {
    if (!discountPercentage || discountPercentage <= 0) return originalPrice;
    return (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2);
  };


  // انتخاب نام و قیمت بر اساس زبان
  const selectedName = name[language] || name.fa;  // اگر زبان فارسی باشد از name.fa استفاده می‌کند
  const selectedPrice = price[language] || price.fa;  // اگر زبان فارسی باشد از price.fa استفاده می‌کند
  const selectedDescription = description[language] || description.fa; // مشابه برای توضیحات


 

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img src={image} alt={selectedName} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{selectedName}</h3>

      {/* نمایش قیمت در یک خط */}
      <div className="flex items-center gap-2 mt-1">
        {discountPercentage > 0 && (
          <p className="text-gray-500 line-through text-sm">
            {selectedPrice} {language === "en" ? "$" : "تومان"}
          </p>
        )}
        <p className="text-red-500 font-bold text-lg">
          {calculateDiscountedPrice(selectedPrice)} {language === "en" ? "$" : "تومان"}
        </p>
        {discountPercentage > 0 && (
          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-md">
            {language === "en" ? `${discountPercentage}% Off` : `${discountPercentage}% تخفیف`}
          </span>
        )}
      </div>

      <p className="text-green-600 font-bold">{selectedDescription}</p>
      <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">
        {language === "en" ? "Buy" : "خرید"}
      </button>
    </div>
  );
}

export default ProductItem;
