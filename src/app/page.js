"use client";
import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../context/myLanguage";
import EndTheSection from "@/components/endTheSection/endTheSection"

function Home() {
  const { language } = useContext(MyLanguage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  // حالت بارگذاری برای مدیریت لودینگ

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/takhfif");
        const data = await result.json();
        setData(data);  // ذخیره داده‌ها
        setLoading(false);  // بارگذاری کامل شد
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);  // حتی در صورت بروز خطا بارگذاری کامل می‌شود
      }
    };

    fetchData();  // فراخوانی تابع بارگذاری داده‌ها
  }, []);  // تنها یک‌بار هنگام بارگذاری اولیه کامپوننت

  return (
  <div>
  
      <div className="w-11/12 mx-auto">
        <img className="w-full h-96 my-10 rounded" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/39ff428834786e972c9382051358865143c256dc_1686640730-1536x480.jpg" />
      </div>


   <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/%D8%B43%D8%B3%DB%8C23%D8%B4%D8%B33%DB%8C2%D8%B4%D8%B3%DB%8C-400x294.jpg" />
        </div>
        <div>
          <img className="rounded shadow"  src="https://poshakmeysammj.com/wp-content/uploads/2023/08/23%D8%B4%D8%B3%DB%8C2332%D8%B4%D8%B3%DB%8C.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/32%D8%B4%D8%B3%DB%8C2323%D8%B4%D8%B3%DB%8C.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/56%D8%B4%D8%B3%DB%8C6%D8%B465%D8%B3%DB%8C-400x294.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/32%D8%B4%D8%B3%DB%8C232%D8%B4%D8%B3%DB%8C%D8%B4%D8%B3%DB%8C%D8%B3%DB%8C-400x294.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/3%D8%B42%D8%B3%DB%8C32%D8%B4%D8%B32%DB%8C32%D8%B4%D8%B3%DB%8C-400x294.jpg" />
        </div>
      </div>
      


      </div>


     
        {/* تخفیف‌های ویژه */}
        {language === "en" ? (
          <h2 className="text-2xl font-bold text-center my-20">🔥 Special discounts 🔥</h2>
        ) : (
          <h2 className="text-2xl font-bold text-center mb-6">🔥 تخفیف‌های ویژه 🔥</h2>
        )}

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
                <img src={item.image} alt="کفش اسپرت" className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold text-right">{item.title}</h3>
                <p className="text-red-500 line-through text-right">{item.redprice} تومان</p>
                <p className="text-green-600 font-bold text-right">{item.greenprice} تومان</p>
                <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">خرید</button>
              </div>
            ))}
          </div>
        )}



    

      {/* پرفروش‌ترین محصولات */}
      {language === "en" ? (
        <h2 className="text-2xl font-bold text-center mt-12 my-20">🔥 The best sellers 🔥</h2>
      ) : (
        <h2 className="text-2xl font-bold text-center mt-12 mb-6">🔥 پرفروش‌ترین‌ها 🔥</h2>
      )}



      {/* نمایش پرفروش‌ترین محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* محصولات نمونه برای پرفروش‌ترین‌ها */}
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img
            src="https://poshakmeysammj.com/wp-content/uploads/2024/07/IMG_2024-07-23-133309.jpeg"
            alt="لپ‌تاپ گیمینگ"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-right">لپ‌تاپ گیمینگ</h3>
          <p className="text-gray-700 font-bold text-right">35,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img
            src="https://poshakmeysammj.com/wp-content/uploads/2024/07/IMG_2024-07-23-133309.jpeg"
            alt="لپ‌تاپ گیمینگ"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-right">لپ‌تاپ گیمینگ</h3>
          <p className="text-gray-700 font-bold text-right">35,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img
            src="https://poshakmeysammj.com/wp-content/uploads/2024/07/IMG_2024-07-23-133309.jpeg"
            alt="لپ‌تاپ گیمینگ"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-right">لپ‌تاپ گیمینگ</h3>
          <p className="text-gray-700 font-bold text-right">35,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img
            src="https://poshakmeysammj.com/wp-content/uploads/2024/07/IMG_2024-07-23-133309.jpeg"
            alt="لپ‌تاپ گیمینگ"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-right">لپ‌تاپ گیمینگ</h3>
          <p className="text-gray-700 font-bold text-right">35,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>
        {/* محصولات دیگر */}
      </div>
      <div>
               <img className="shadow-md rounded my-40 mx-auto" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/%D8%B432%D8%B3%DB%8C2332%D8%B4%D8%B32%DB%8C%D8%B3%D8%B4%DB%8C.jpg" />

      </div>

     
     
      <div className="mx-auto w-11/12">
                <EndTheSection /> 
      </div>
      <br />  <br />  <br />  <br />  <br />
   
     
     
      </div>
   
  
);
}

export default Home;
