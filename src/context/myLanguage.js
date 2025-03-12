"use client";
import { createContext, useState, useEffect } from "react";

export const MyLanguage = createContext(null);

export function MyLanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let url = language === "en" ? "http://localhost:3000/store" : "http://localhost:3000/storpe";

      try {
        const result = await fetch(url);
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]); // اجرا شدن هنگام تغییر زبان
 

  return (
    <MyLanguage.Provider value={{ language, setLanguage, data }}>
      {children}
    </MyLanguage.Provider>
  );
}
