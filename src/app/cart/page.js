"use client";
import React from "react";
import { useCart } from "@/context/CartContext ";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

  if (cart.length === 0) {
    return <p>سبد خرید شما خالی است.</p>;
  }

  return (
    <div className="mx-auto w-11/12">
      <h2 className="text-2xl font-semibold my-6">Shopping Cart</h2>

      <div className="space-y-4">
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
      </div>

      <h3 className="text-green-900 mt-10 text-xl">Total Price: {totalPrice} $</h3>

      <button className="w-full bg-blue-600 text-white py-3 rounded mb-10 mt-10">Continue shopping</button>
    </div>
  );
}

export default Cart;
