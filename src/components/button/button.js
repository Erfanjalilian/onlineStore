"use client"

import { useContext, useState } from "react";



export default function button(){


    const[quantity,setquantity]=useState(1)

    function handleIncrease(){
        setquantity(quantity+1)
    }
    function handleDecrease(){
        if(quantity>1){
            setquantity(quantity-1)
        }
    }

    return(
        <div className="p-5">
          
            <button className="px-4 py-2 bg-blue-700 text-white rounded" onClick={handleIncrease}>+</button>
            <span className="p-3">{quantity}</span>
            <button className="px-4 py-2 bg-red-700 text-white rounded" onClick={handleDecrease}>-</button>
           
        </div>
    );
}