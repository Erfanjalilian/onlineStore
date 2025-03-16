"use client"
import { useContext } from "react";
import { MyLanguage } from "@/context/myLanguage";
function productitem({image,name,description,price}){
  const{language}=useContext(MyLanguage)
    return(
        <div>

          {
            language==="en" ?
            <div className="border p-4 rounded-lg shadow-md bg-white">
            <img src={image} alt="کفش اسپرت" className="w-full h-40 object-cover rounded-md" />
             <h3 className="mt-2 text-lg font-semibold">{name.en}</h3>
             <p className="text-red-500">{price.en}$</p>
             <p className="text-green-600 font-bold">{description.en}</p>
             <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">Buy</button>
           </div>:
             <div className="text-right border p-4 rounded-lg shadow-md bg-white">
             <img src={image} alt="کفش اسپرت" className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-2 text-lg font-semibold">{name.fa}</h3>
              <p className="text-red-500">{price.fa} تومان</p>
              <p className="text-green-600 font-bold">{description.fa}</p>
              <button className="mt-2 w-full bg-red-500 text-white py-1 rounded-md hover:bg-red-600">خرید</button>
            </div>
          }



   






























        </div>
    )
}
export default productitem;