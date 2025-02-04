"use client"
import { useContext } from "react";
import Mybtn from "../../../components/button/button"
import {MyLanguage} from "../../../context/myLanguage"
async function Dstore({params}){
   
  

  

        const result =await fetch(`http://localhost:3000/store/${params.slug}`)
       const data=await result.json()



   
   
    return(
        <div>
            <div className="mx-auto w-11/12">
            <div className="grid grid-cols-12 mt-20 shadow border p-10 rounded-xl">

                    <div className="col-span-3">
                        <img src={data.image} className="w-full h-36 rounded-xl" />
                    </div>

                    <div className="col-span-9">
                        <h3 className="text-2xl px-5">{data.title}</h3>
                        <p className="text-xl px-5">{data.description}</p>
                        <Mybtn />
                    </div>

                    </div>
            </div>
         
        </div>
    );
}
export default Dstore;