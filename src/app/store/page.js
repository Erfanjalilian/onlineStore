"use client";
import React, { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";
import Productitem from "../../components/productitem/productitem";
import Filters from "../../components/Filters/Filters";
import EndTheSection from "@/components/endTheSection/endTheSection";
import Link from "next/link";
import { SparklesIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

function Store() {
  const { language } = useContext(MyLanguage);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: "" });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await fetch("https://6810ff2827f2fdac24139dec.mockapi.io/products");
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
    if (!filters.category) return true;
    return product.category.en === filters.category;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pb-10">
      {/* هدر جذاب */}
      <div className="relative flex flex-col items-center justify-center h-64 md:h-80 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 rounded-b-3xl shadow-lg mb-10 overflow-hidden">
        <ShoppingBagIcon className="w-16 h-16 text-white mb-4 animate-bounce" />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
          {language === "en" ? "Store" : "فروشگاه"}
        </h1>
        <p className="mt-2 text-white/80 text-lg md:text-2xl font-medium">
          {language === "en" ? "Discover the best products!" : "بهترین محصولات را کشف کنید!"}
        </p>
        <SparklesIcon className="absolute right-8 top-8 w-10 h-10 text-yellow-300 opacity-70 animate-pulse" />
        <SparklesIcon className="absolute left-8 bottom-8 w-8 h-8 text-pink-300 opacity-60 animate-pulse" />
      </div>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-8">
        {/* فیلترها */}
        <aside className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
            <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-yellow-400" />
              {language === "en" ? "Filters" : "فیلترها"}
            </h2>
            <Filters onFilterChange={handleFilterChange} />
          </div>
        </aside>

        {/* لیست محصولات */}
        <main className="w-full md:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-700 text-lg font-semibold">
              {language === "en"
                ? `${filteredProducts.length} products found`
                : `${filteredProducts.length} محصول یافت شد`}
            </span>
            {loading && (
              <span className="text-blue-500 animate-pulse font-bold">
                {language === "en" ? "Loading..." : "در حال بارگذاری..."}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Link key={item.id} href={`/store/${item.id}`} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col h-full border border-transparent group-hover:border-blue-400">
                    <Productitem {...item} />
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <span className="text-4xl text-gray-400 mb-4">😕</span>
                <p className="text-center text-lg font-semibold text-gray-500">
                  {language === "en" ? "No products found." : "محصولی یافت نشد."}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      <div className="w-11/12 mx-auto mt-16">
        <EndTheSection />
      </div>
    </div>
  );
}

export default Store;
