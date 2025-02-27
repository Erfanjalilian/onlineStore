"use client"
import { useContext } from "react";
import { MyLanguage } from "@/context/myLanguage";
function productitem({image,title,description,Price}){
  const{language}=useContext(MyLanguage)
    return(
        <div>



     <div className="border p-4 rounded-lg shadow-md bg-white">
         <img src={image} alt="کفش اسپرت" className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 text-lg font-semibold">{title}</h3>
          <p className="text-red-500">{Price}$</p>
          <p className="text-green-600 font-bold">{description}</p>
          <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">خرید</button>
        </div>






























        </div>
    )
}
export default productitem;