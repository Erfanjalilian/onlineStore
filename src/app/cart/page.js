"use client"
import React from "react";
import { useCart } from "../../context/CartContext "; // استفاده از کانتکست

function Cart() {
  const { cart, removeFromCart } = useCart(); // دریافت داده‌ها و تابع حذف از کانتکست

  // محاسبه مجموع قیمت‌ها
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.Price), 0);

  if (cart.length === 0) {
    return <p>سبد خرید شما خالی است.</p>;
  }

  return (
    <div className="mx-auto w-11/12">
      <h2 className="text-2xl font-semibold my-6">shopping cart</h2>
      
      {/* نمایش محصولات */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="cart-item flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
            
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">{item.Price} $</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)} // حذف محصول از سبد خرید
              className="text-white bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* نمایش مجموع قیمت‌ها */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800"> Total prices: <span className="text-2xl text-green-500">{totalPrice.toLocaleString()} $</span></h3>
      </div>

      {/* دکمه ادامه خرید */}
      <div className="mt-8">
        <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg w-full pt-4 pb-4 transition-colors duration-300">
          ادامه خرید
        </button>
      </div>
    </div>
  );
}

export default Cart;
