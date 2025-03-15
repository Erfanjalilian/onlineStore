"use client"

import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";


const Footer = () => {
  const { language } = useContext(MyLanguage);
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* بخش اول */}
        {
          language==="en" ?
          <div className="text-left">
          <h2 className="text-xl font-semibold mb-4 text-left">About us</h2>
          <p className="text-gray-400 text-sm text-left">
          We offer the best products at reasonable prices. Our goal is your satisfaction.
          </p>
        </div>:
        <div>
        <h2 className="text-xl font-semibold mb-4 text-right">درباره ما</h2>
        <p className="text-gray-400 text-sm text-right">
          ما بهترین محصولات را با قیمت مناسب ارائه می‌دهیم. هدف ما رضایت شماست.
        </p>
      </div>
        }
        
        
        {/* بخش دوم */}
        <div>
          {
            language==="en" ?
            <div className="text-left">
                <h2 className="text-xl font-semibold mb-4 text-left">Useful links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="text-left"><a href="#" className="hover:text-white">Home</a></li>
            <li className="text-left"><a href="#" className="hover:text-white">Store</a></li>
            <li className="text-left"><a href="#" className="hover:text-white">call us</a></li>
            <li className="text-left"><a href="#" className="hover:text-white">Frequently asked questions</a></li>
          </ul>
            </div>:
             <div>
             <h2 className="text-xl font-semibold mb-4 text-right">لینک‌های مفید</h2>
       <ul className="text-gray-400 text-sm space-y-2">
         <li className="text-right"><a href="#" className="hover:text-white">صفحه اصلی</a></li>
         <li className="text-right"><a href="#" className="hover:text-white">محصولات</a></li>
         <li className="text-right"><a href="#" className="hover:text-white">تماس با ما</a></li>
         <li className="text-right"><a href="#" className="hover:text-white">سوالات متداول</a></li>
       </ul>
         </div>

          }
        
        </div>

        {/* بخش سوم */}
        <div>
          {
            language==="en" ?
            <div className="text-left">
              <h2 className="text-xl font-semibold mb-4 text-left">call us</h2>
          <p className="text-gray-400 text-sm text-left">Email :support@example.com</p>
          <p className="text-gray-400 text-sm text-left">Phone :021-15734556</p>
          <div className="mt-4 text-left">
            <a href="#" className="text-gray-400 ml-auto hover:text-white">🔵 Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">📷 Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">🐦 Twitter</a>
          </div>
            </div>:
            <div>
              <h2 className="text-xl font-semibold mb-4 text-right">تماس با ما</h2>
          <p className="text-gray-400 text-sm text-right">ایمیل: support@example.com</p>
          <p className="text-gray-400 text-sm text-right">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 ml-auto hover:text-white">🔵 فیسبوک</a>
            <a href="#" className="text-gray-400 hover:text-white">📷 اینستاگرام</a>
            <a href="#" className="text-gray-400 hover:text-white">🐦 توییتر</a>
          </div>
            </div>
          }
          
        </div>
      </div>
      {
        language==="en" ?
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4 text-center">
        © {new Date().getFullYear()} All rights reserved
      </div>:
       <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4 text-center">
       © {new Date().getFullYear()} تمامی حقوق محفوظ است.
     </div>
      }
     
    </footer>
  );
};

export default Footer;
