"use client";
import React from "react";

export default function Button({ quantity, setQuantity }) {
  return (
    <div className="p-5">
      <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={() => setQuantity(quantity + 1)}>+</button>
      <span className="p-3">{quantity}</span>
      <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
    </div>
  );
}
