"use client";

import { useContext, useState } from "react";
import { motion } from "framer-motion";
import {MyLanguage} from "../../context/myLanguage"

function LanguageSwitcher(){
  
  const [isEnglish, setIsEnglish] = useState(true);
  const[check,setcheck]=useState(1)

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    if(check%2==1){
      setLanguage("fa")
      setcheck(2)
    }
    if(check%2==0){
      setLanguage("en")
      setcheck(1)
    }
    
    
    
  };
  const{language,setLanguage}=useContext(MyLanguage)

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-28 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center px-1 cursor-pointer shadow-lg"
        onClick={toggleLanguage}
      >
        {/* دایره متحرک */}
        <motion.div
          className="absolute w-8 h-8 bg-white dark:bg-gray-500 rounded-full shadow-md"
          initial={{ x: isEnglish ? 2 : 64 }}
          animate={{ x: isEnglish ? 2 : 64 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        {/* متن انگلیسی */}
        <span className="absolute left-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          English
        </span>
        {/* متن فارسی */}
        <span className="absolute right-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          فارسی
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
