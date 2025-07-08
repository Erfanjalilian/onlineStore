"use client";
import React, { useContext, useState, useEffect } from "react";
import { useCart } from "@/context/CartContext ";
import Link from "next/link";
import { MyLanguage } from "@/context/myLanguage";
import EmptyCart from "@/components/EmptyCart/EmptyCart";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { language } = useContext(MyLanguage);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cart.reduce((total, item) => {
      const itemPrice = item.price && item.price[language] !== undefined ? item.price[language] : 0;
      return total + itemPrice * item.quantity;
    }, 0);
    setTotalPrice(price);
  }, [cart, language]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pb-10">
      {/* هدر */}
      <div className="relative flex flex-col items-center justify-center h-64 md:h-80 bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-400 rounded-b-3xl shadow-lg mb-10 overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
          {language === "en" ? "Shopping Cart" : "سبد خرید"}
        </h1>
        <p className="mt-2 text-white/80 text-lg md:text-2xl font-medium">
          {language === "en" ? "Review your selected products" : "محصولات انتخابی خود را بررسی کنید"}
        </p>
      </div>

      <div className="w-11/12 mx-auto max-w-4xl mt-8 space-y-6">
        {cart.map((item) => (
          <div
            key={item.id + item.size}
            className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-blue-200 transition-shadow duration-300 border border-blue-100 gap-4"
          >
            <img src={item.image} className="w-24 h-24 rounded-xl border border-blue-100 object-cover" alt={item.name[language]} />
            <div className="flex-1 sm:ml-6 w-full">
              <h3 className="text-xl font-bold text-blue-900 mb-1">{item.name[language]}</h3>
              <p className="text-gray-600 mb-1">
                {item.price[language]} {language === "en" ? "$" : "تومان"}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {language === "en" ? "Size: " : "سایز: "}
                {item.size}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="w-9 h-9 flex items-center justify-center bg-red-100 text-red-700 rounded-full text-xl font-bold hover:bg-red-200 transition"
                  onClick={() => decreaseQuantity(item.id, item.size)}
                >
                  -
                </button>
                <span className="px-3 text-lg font-semibold text-blue-700">{item.quantity}</span>
                <button
                  className="w-9 h-9 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full text-xl font-bold hover:bg-blue-200 transition"
                  onClick={() => increaseQuantity(item.id, item.size)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="px-5 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition shadow"
              onClick={() => removeFromCart(item.id, item.size)}
            >
              {language === "en" ? "Delete" : "حذف"}
            </button>
          </div>
        ))}
      </div>

      <div className="w-11/12 mx-auto max-w-4xl mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className={`text-2xl font-bold text-green-700 ${language === "fa" ? "text-right" : "text-left"}`}>
          {language === "en" ? `Total Price: ${totalPrice} $` : `قیمت کل: ${totalPrice} تومان`}
        </h3>
        <Link href={"/Checkout"} className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-blue-600 text-white py-3 px-10 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition">
            {language === "en" ? "Continue shopping" : "ادامه‌ی خرید"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
