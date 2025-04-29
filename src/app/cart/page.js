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
      // بررسی مقدار قیمت بر اساس زبان
      const itemPrice = item.price && item.price[language] !== undefined ? item.price[language] : 0;
      return total + itemPrice * item.quantity;
    }, 0);

    setTotalPrice(price);
  }, [cart, language]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto w-11/12">
      <div className="bg-purple-500 text-white text-center h-80 pt-32 text-4xl md:text-7xl">
        {language === "en" ? "shopping cart" : "سبد خرید"}
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id + item.size} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <img src={item.image} className="w-20 h-20 rounded-md" alt={item.name[language]} />
            <div className="flex-1 ml-4">
              <h3 className="text-xl">{item.name[language]}</h3>
              <p>{item.price[language]} {language === "en" ? "$" : "تومان"}</p>

              <p className="text-sm">{language === "en" ? "Size: " : "سایز: "} {item.size}</p> {/* نمایش سایز */}

              <div className="mt-9">
                <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => decreaseQuantity(item.id, item.size)}>
                  -
                </button>
                <span className="p-3">{item.quantity}</span>
                <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={() => increaseQuantity(item.id, item.size)}>
                  +
                </button>
              </div>
            </div>

            <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => removeFromCart(item.id, item.size)}>
              {language === "en" ? "Delete" : "حذف"}
            </button>
          </div>
        ))}
      </div>

      <h3 className={`text-green-900 mt-10 text-xl ${language === "fa" ? "text-right" : ""}`}>
        {language === "en" ? `Total Price: ${totalPrice} $` : `قیمت کل: ${totalPrice} تومان`}
      </h3>

      <Link href={"/Checkout"}>
        <button className="w-full bg-blue-600 text-white py-3 rounded mb-10 mt-10">
          {language === "en" ? "Continue shopping" : "ادامه‌ی خرید"}
        </button>
      </Link>
    </div>
  );
}

export default Cart;
