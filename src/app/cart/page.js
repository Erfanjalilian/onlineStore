"use client";
import React from "react";
import { useCart } from "@/context/CartContext ";
import Link from "next/link";
import { MyLanguage } from "@/context/myLanguage";
import { useContext, useState, useEffect } from "react";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { language } = useContext(MyLanguage);

  // تعریف متغیر totalPrice خارج از if
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // محاسبه totalPrice بسته به زبان انتخاب شده
    if (language === "en") {
      const price = cart.reduce((total, item) => total + item.price.en * item.quantity, 0);
      setTotalPrice(price);
    } else {
      const price = cart.reduce((total, item) => total + item.price.fa * item.quantity, 0);
      setTotalPrice(price);
    }
  }, [cart, language]); // فقط زمانی که cart یا language تغییر کند، totalPrice محاسبه می‌شود

  if (cart.length === 0) {
    return <p>سبد خرید شما خالی است.</p>;
  }

  return (
    <div className="mx-auto w-11/12">
      <br /><br />
      {language === "en" ? (
        <h2 className="text-2xl font-semibold my-6">Shopping Cart</h2>
      ) : (
        <h2 className="text-2xl font-semibold my-6 text-right">سبد خرید</h2>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <img src={item.image} className="w-20 h-20 rounded-md" />
            <div className="flex-1 ml-4">
              {language === "en" ? (
                <div>
                  <h3 className="text-xl">{item.name.en}</h3>
                  <p>{item.price.en} $</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl">{item.name.fa}</h3>
                  <p>{item.price.fa} تومان</p>
                </div>
              )}

              <div className="mt-9">
                <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
                <span className="p-3">{item.quantity}</span>
                <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>
            </div>

            {language === "en" ? (
              <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => removeFromCart(item.id)}>
                Delete
              </button>
            ) : (
              <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => removeFromCart(item.id)}>
                حذف
              </button>
            )}
          </div>
        ))}
      </div>

      {
        language==="en" ? 
        <h3 className="text-green-900 mt-10 text-xl">Total Price: {totalPrice} {language === "en" ? "$" : "تومان"}</h3>:
        <h3 className="text-green-900 mt-10 text-xl text-right">قیمت کل: {totalPrice} {language === "en" ? "$" : "تومان"}</h3>


      }


      <Link href={"/Checkout"}>
        {language === "en" ? (
          <button className="w-full bg-blue-600 text-white py-3 rounded mb-10 mt-10">Continue shopping</button>
        ) : (
          <button className="w-full bg-blue-600 text-white py-3 rounded mb-10 mt-10">ادامه ی خرید</button>
        )}
      </Link>
    </div>
  );
}

export default Cart;
