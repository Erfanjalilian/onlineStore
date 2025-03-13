"use client"
import React from 'react';
import { useCart } from "@/context/CartContext ";

const CheckoutPage = () => {
      const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    
      const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Account settlement</h1>

        {/* بخش نمایش محصولات */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg">
            <img src={item.image} className="w-20 h-20 rounded-md" />
            <div className="flex-1 ml-4">
              <h3 className="text-xl">{item.title}</h3>
              <p>{item.Price} $</p>
              <div className="mt-9">
            <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => decreaseQuantity(item.id)}>-</button>
            <span className="p-3">{item.quantity}</span>
            <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            </div>
           

            <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        ))}

          {/* جمع کل */}
          <div className="flex justify-between items-center mt-6">
          <h3 className="text-green-900 mt-10 text-xl">Total Price: {totalPrice} $</h3>
            
          </div>
        </div>

        {/* بخش اطلاعات کاربر */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">User information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name and surname</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name and surname"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact number</label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contact number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Delivery address</label>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Delivery address"
              ></textarea>
            </div>
          </form>
        </div>

        {/* بخش روش پرداخت */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment method</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="online"
                name="payment"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="online" className="ml-2 text-sm font-medium text-gray-700">
              Online payment
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cash"
                name="payment"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="cash" className="ml-2 text-sm font-medium text-gray-700">
              Payment on the spot
               </label>
            </div>
          </div>
        </div>

        {/* دکمه تأیید نهایی */}
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
             
Confirmation and payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;