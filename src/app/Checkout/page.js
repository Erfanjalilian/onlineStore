"use client"
import React from 'react';
import { useCart } from "@/context/CartContext ";
import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";
import {useAuth} from "@/context/AuthContext"
import LoginPage from '../LoginPage/page';

const CheckoutPage = () => {
   const { language } = useContext(MyLanguage);
      const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
      const {myUser}=useAuth();
    
      const totalPrice = cart.reduce((total, item) => total + item.price.en * item.quantity, 0);
  return (
  
    <div className="min-h-screen bg-gray-100 py-8">
        {
      myUser===null ? 
      <div>
        {
          language==="en"?
          <h1 className='text-3xl font-bold text-center mb-8'>To access this page, first log in to the site.</h1>:
          <h1 className='text-3xl font-bold text-center mb-8'>برای دسترسی به این صفحه ابتدا وارد سایت شوید.</h1>


        }
         <LoginPage />
      </div>:
      
    
      <div className="container mx-auto px-4">
        {
          language==="en" ?         <h1 className="text-3xl font-bold text-center mb-8">Account settlement</h1>:
          <h1 className="text-3xl font-bold text-center mb-8">تسویه حساب</h1>


        }

        {/* بخش نمایش محصولات */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg border mt-7">
            <img src={item.image} className="w-20 h-20 rounded-md" />
            <div className="flex-1 ml-4">
              {
                language==="en" ?
                <div>
                    <h3 className="text-xl">{item.name.en}</h3>
                    <p>{item.price.en} $</p>
                </div>:
                <div>
                    <h3 className="text-xl">{item.name.fa}</h3>
                    <p>{item.price.fa} تومان</p>
                </div>
              }
            
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
          {
            language==="en" ?          <h2 className="text-xl font-semibold mb-4">User information</h2>:
            <h2 className="text-xl font-semibold mb-4 text-right">اطلاعات کاربر</h2>


          }
          <form className="space-y-4">
            <div>
              {
                language==="en" ?     
                <div className='text-left'>
                   <label className="block text-sm font-medium text-gray-700">Name and surname</label>
                   <input
                type="text"
                className="text-left mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name and surname"
              />
                </div>
                        :
                        <div className='text-right'>
                                          <label className="block text-sm font-medium text-gray-700">نام و نام خانوادگی</label>
                                          <input
                type="text"
                className="text-right mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="نام و نام خانوادگی"
              />

                        </div>


              }
             
            </div>
            <div>
              {
                language==="en" ?     
                <div className='text-left'>
                                           <label className="block text-sm font-medium text-gray-700">Email address</label>
                                           <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />

                </div>:
                <div className='text-right'>
                                  <label className="block text-sm font-medium text-gray-700">آدرس ایمیل</label>

                   <input
                type="email"
                className="text-right mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="آدرس ایمیل"
              />
                </div>
                


              }
             
            </div>
            <div>
              {
                language==="en" ?    
                <div className='text-left'>
                                             <label className="block text-sm font-medium text-gray-700">Contact number</label>
                                             <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contact number"
              />

                </div>:
                <div className='text-right'>
                                  <label className="block text-sm font-medium text-gray-700">شماره تماس</label>
                                  <input
                type="tel"
                className="text-right mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="شماره تماس"
              />

                </div>


              }
              
             
            </div>
            <div>
              {

                language==="en" ?      
                <div className='text-left'>
                                          <label className="block text-sm font-medium text-gray-700">Delivery address</label>
                                          <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Delivery address"
              ></textarea>

                </div>:
                <div className='text-right'>
                                  <label className="block text-sm font-medium text-gray-700">آدرس تحویل</label>
                                  <textarea
                className="text-right mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="آدرس تحویل"
              ></textarea>

                </div>



              }
             
            </div>
          </form>
        </div>

        {/* بخش روش پرداخت */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          {
            language==="en" ?     <h2 className="text-xl font-semibold mb-4">Payment method</h2>:
            <h2 className="text-right text-xl font-semibold mb-4">روش پرداخت</h2>


          }
          <div className="space-y-4">
            <div className="">
              {
                language==="en" ? 
                <div className='text-left'>
                   <input
                type="radio"
                id="online"
                name="payment"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
           
               <label htmlFor="online" className="ml-2 text-sm font-medium text-gray-700">
                Online payment
                </label>
                </div>:
                <div className='text-right'>
                    <input
                type="radio"
                id="online"
                name="payment"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
           
               <label htmlFor="online" className="ml-2 text-sm font-medium text-gray-700">
               پرداخت آنلاین
                </label>
                </div>
              }
             
             
                
                
          
              
            </div>
            <div className="">
              {
                language==="en" ?
                <div>
                   <input
                type="radio"
                id="cash"
                name="payment"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
         
                 <label htmlFor="cash" className="ml-2 text-sm font-medium text-gray-700">
                Payment on the spot
                 </label>
                </div>:
                <div className='text-right'>
                   <input
                type="radio"
                id="cash"
                name="payment"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
         
                 <label htmlFor="cash" className="ml-2 text-sm font-medium text-gray-700">
                 پرداخت در محل
                 </label>
                </div>
              }
             
                 
                 
            
             
            </div>
          </div>
        </div>

        {/* دکمه تأیید نهایی */}
        <div className="text-center">
          {
            language==="en" ?  <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
             
Confirmation and payment
          </button>:
            <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
             
             تایید و پرداخت
          </button>
          }
        
        </div>
      </div>
      }
    </div>
  );
};

export default CheckoutPage;