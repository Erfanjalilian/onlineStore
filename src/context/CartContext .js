"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // بازیابی داده‌ها از localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // ذخیره‌سازی داده‌ها در localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // افزودن محصول به سبد خرید (با مقدار `quantity` صحیح)
  const addToCart = (product) => {
    console.log("🛍 Adding product:", product); // بررسی مقدار محصول قبل از افزودن
    
    const discountedPriceEn = product.price?.en
      ? product.price.en - (product.price.en * (product.discountPercentage || 0)) / 100
      : 0;
  
    const discountedPriceFa = product.price?.fa
      ? product.price.fa - (product.price.fa * (product.discountPercentage || 0)) / 100
      : 0;
  
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        // ✅ اگر محصول قبلاً در سبد خرید بوده، مقدار `quantity` را افزایش بده
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity } // ⬅ اینجا مقدار جدید رو اضافه کردیم
            : item
        );
      } else {
        // ✅ اگر محصول جدید هست، مقدار `quantity` را از پارامتر بگیر
        return [
          ...prevCart,
          {
            ...product,
            price: { en: discountedPriceEn, fa: discountedPriceFa }, // ذخیره قیمت درست
            quantity: product.quantity, // ⬅ مقدار انتخاب‌شده کاربر ذخیره می‌شه
          },
        ];
      }
    });
  };
  

  
  

  // حذف محصول از سبد خرید
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // افزایش تعداد محصول
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // کاهش تعداد محصول
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
