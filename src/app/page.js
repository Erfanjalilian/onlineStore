"use client" 
import Image from "next/image";
import { useContext } from "react";
import {MyLanguage} from "../context/myLanguage"




async function Home() {
  const {language,setLanguage}=useContext(MyLanguage)
  const result=await fetch("http://localhost:3000/takhfif");
  const data=await result.json();
 
  return (
    
     <div>
    
   
      <div className="w-11/12 mx-auto">
          <img className="w-full h-96" src="https://netcopy.ir/wp-content/uploads/edd/2022/01/web-banner-sale.jpg" />
      </div>
       <section className="my-8 px-4">
      {/* تخفیف‌های ویژه */}
      {
        language==="en"?  
        <h2 className="text-2xl font-bold text-center mb-6">🔥 Special discounts 🔥</h2> :
        <h2 className="text-2xl font-bold text-center mb-6">🔥 تخفیف‌های ویژه 🔥</h2>

       

      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        





        {

          data.map((item)=>(

            <div className="border p-4 rounded-lg shadow-md bg-white">
         <img src={item.image} alt="کفش اسپرت" className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold text-right">{item.title}</h3>
          <p className="text-red-500 line-through  text-right">{item.redprice} تومان</p>
          <p className="text-green-600 font-bold  text-right">{item.greenprice} تومان</p>
          <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">خرید</button>
        </div>


          ))

        }
</div>



       

       

     

      {/* پرفروش‌ترین محصولات */}

      {
        language==="en"?<h2 className="text-2xl font-bold text-center mt-12 mb-6">🔥 The best sellers 🔥</h2>:
        <h2 className="text-2xl font-bold text-center mt-12 mb-6">🔥 پرفروش‌ترین‌ها 🔥</h2>


      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img src="https://poshakmeysammj.com/wp-content/uploads/2024/07/IMG_2024-07-23-133309.jpeg" alt="لپ‌تاپ گیمینگ" className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold text-right">لپ‌تاپ گیمینگ</h3>
          <p className="text-gray-700 font-bold text-right">35,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img src="https://poshakmeysammj.com/wp-content/uploads/2024/12/photo_2024-11-14_06-53-43.jpg" alt="دوربین عکاسی" className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold text-right">دورس 3نخ چنل 1107</h3>
          <p className="text-gray-700 font-bold text-right">18,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img src="https://poshakmeysammj.com/wp-content/uploads/2024/07/IMG_2024-07-02-182032.jpeg" alt="کنسول بازی" className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold text-right">دورس نیم زیپ بالنسیاگا</h3>
          <p className="text-gray-700 font-bold text-right">25,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img src="https://poshakmeysammj.com/wp-content/uploads/2024/06/IMG_2024-06-12-215552.jpeg" alt="موبایل پرچمدار" className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold text-right">هودی چاپ استیکر1108</h3>
          <p className="text-gray-700 font-bold text-right">45,000,000 تومان</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">خرید</button>
        </div>
      </div>
    </section>
   

     </div>
  );
}
export default Home;