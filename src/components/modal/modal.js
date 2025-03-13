"use client"

import { useState } from 'react';
import CartItem from "../cartItem/cartItem"
import React from "react";
import { useCart } from "@/context/CartContext ";
import Link from "next/link";

export default function SlideInModal() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-gray-100">
      





     


  <button onClick={() => setIsOpen(true)} className='text-white bg-blue-700 rounded py-2 px-4'>shopping cart</button>












      {/* مدال کشویی از سمت راست */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 w-2/6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
          <div className='w-full'>
          {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
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
           <h3 className="text-green-900 mt-10 text-xl">Total Price: {totalPrice} $</h3>
           <Link href={"/Checkout"}>
      <button className="w-full bg-blue-600 text-white py-3 rounded mb-10 mt-10">Continue shopping</button>
      </Link>
          <CartItem />
          </div>
        

          <div className='text-center'>
                 <a className='text-blue-600' href='/cart'>View shopping cart</a>
           </div>


         



          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
