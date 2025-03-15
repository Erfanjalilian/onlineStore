"use client";

import { useState } from "react";
import CartItem from "../cartItem/cartItem";
import { useCart } from "@/context/CartContext ";
import Link from "next/link";
import { X } from "lucide-react";

export default function SlideInModal() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* دکمه‌ی باز کردن مدال */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg py-2 px-6 shadow-lg hover:shadow-xl transition-all"
      >
        🛒 Shopping Cart
      </button>

      {/* Overlay (پس‌زمینه‌ی تاریک) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* مدال کشویی با پس‌زمینه سفید */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 max-w-md bg-white shadow-xl transform transition-transform duration-300 z-50 rounded-l-2xl border-l-2 border-gray-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* هدر مدال */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold text-gray-900">🛍 Shopping Cart</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-red-600">
              <X size={24} />
            </button>
          </div>

          {/* لیست محصولات در سبد خرید */}
          <div className="flex-grow overflow-y-auto mt-4 space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex items-center bg-white rounded-lg shadow p-4">
                  <img src={item.image} className="w-16 h-16 rounded-lg object-cover" alt={item.title} />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-700">{item.Price} $</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="text-lg font-medium">{item.quantity}</span>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="ml-4 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-all"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 mt-6">Your cart is empty 🛒</p>
            )}
          </div>

          {/* قیمت کل و دکمه‌های خرید */}
          {cart.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-green-700">Total: {totalPrice} $</h3>
              <Link href={"/Checkout"}>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 shadow-lg hover:bg-blue-700 transition-all">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          {/* لینک مشاهده سبد خرید */}
          <div className="text-center mt-6">
            <Link className="text-blue-600 hover:underline" href="/cart">
              View Shopping Cart
            </Link>
          </div>

          {/* دکمه‌ی بستن مدال */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
