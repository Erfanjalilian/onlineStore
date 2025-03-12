"use client";

import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../../context/myLanguage";
import { useCart } from "@/context/CartContext "; // استفاده از کانتکست سبد خرید
import Mybtn from "../../../components/button/button";

function Dstore({ params }) {
  const { language } = useContext(MyLanguage);
  const { addToCart } = useCart();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1); // مقدار پیش‌فرض

  useEffect(() => {
    const fetchData = async () => {
      let url = language === "en"
        ? `http://localhost:3000/store/${params.slug}`
        : `http://localhost:3000/storpe/${params.slug}`;

      try {
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug, language]);

  const handleAddToCart = () => {
    addToCart({ ...data, quantity }); // مقدار `quantity` را ارسال کنیم
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="mx-auto w-11/12 relative">
      <div className="grid grid-cols-12 mt-20 shadow border p-10 rounded-xl">
        <div className="col-span-3">
          <img src={data.image} className="w-full h-full rounded-xl" alt="product" />
        </div>
        <div className="col-span-9">
          <h3 className="text-2xl px-5">{data.title}</h3>
          <p className="text-xl px-5">{data.description}</p>
          
          {/* اینجا مقدار quantity را کنترل می‌کنیم */}
          <Mybtn quantity={quantity} setQuantity={setQuantity} />
          
          <div className="text-center">
            <button onClick={handleAddToCart} className="bg-blue-700 px-4 py-2 text-white rounded">Add to cart</button>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500">
          {language === "en" ? "Product added to cart!" : "محصول به سبد خرید اضافه شد!"}
        </div>
      )}
    </div>
  );
}

export default Dstore;
