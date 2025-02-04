"use client"
import { createContext, useState } from "react";



export const MyLanguage=createContext(null)

export function MyLanguageProvider({children}){
  

  const [language,setLanguage]=useState("en")
 
    return(
        <MyLanguage.Provider value={{language,setLanguage}}>
            
            {children}
           
        </MyLanguage.Provider>
        
    )
}