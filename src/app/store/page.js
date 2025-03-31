"use client";
import React, { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";
import Productitem from "../../components/productitem/productitem";
import Filters from "../../components/Filters/Filters";
import EndTheSection from "@/components/endTheSection/endTheSection";
import Link from "next/link";

function Store() {
  const { language } = useContext(MyLanguage);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: "" });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await fetch("http://localhost:3000/products");
        const data = await result.json();
        setProducts(data);
      } catch (error) {
       
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // تابع تغییر فیلتر
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // فیلتر محصولات
  const filteredProducts = products.filter((product) => {
    if (!filters.category) return true; // اگر فیلتر انتخاب نشده، همه محصولات نمایش داده شوند
    return product.category.en === filters.category; // مقایسه مقدار `en`
  });

  if (loading) {
    return <p className="text-center text-lg font-semibold">
      {language === "en" ? "Loading..." : "در حال بارگذاری..."}
    </p>;
  }

  return (
    <div className="w-11/12 mx-auto">
      {/* عنوان بر اساس زبان */}
      <div className="bg-purple-500 text-white text-center h-80 pt-32 text-4xl md:text-7xl">
        {language === "en" ? "Store" : "فروشگاه"}
      </div>

      <br /><br />
      <div className="flex flex-col md:flex-row">
        {/* فیلتر در موبایل بالا قرار می‌گیرد */}
        <div className="w-full md:w-3/12 md:mr-5 mb-4 md:mb-0">
          <Filters onFilterChange={handleFilterChange} />
        </div>

        {/* لیست محصولات */}
        <div className="w-full md:w-9/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div key={item.id}>
                  <Link href={`/store/${item.id}`}>
                    <Productitem {...item} />
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                {language === "en" ? "No products found." : "محصولی یافت نشد."}
              </p>
            )}
          </div>
        </div>
      </div>

      <br /><br /><br /><br />
      <EndTheSection />
      <br /><br />
    </div>
  );
}

export default Store;
