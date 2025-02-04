"use client" 
import Image from "next/image";
import { useContext } from "react";
import {MyLanguage} from "../context/myLanguage"

export default function Home() {
  const {language,setLanguage}=useContext(MyLanguage)
 
  return (
    
     <div>
      {
        language==="en" ? <p>welcome in my websit</p> :
        <p>به سایت من خوش آمدی</p>
      }
     </div>
  );
}
