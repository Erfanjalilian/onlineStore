"use client"

const { createContext, useState } = require("react")

export const myContext=createContext({})

export function myContextprovider({children}){
    const [user,setuser]=useState([])
    return(
       <myContext.Provider value={{ user, setuser }}>
            {
                {children}
            }
       </myContext.Provider>
           
       
    )
}