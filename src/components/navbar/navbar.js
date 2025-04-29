"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "../modal/modal";
import LanguageSwitcher from "../Languagebutton/Languagebutton";
import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";
import { Menu, X } from "lucide-react";

function Navbar() {
    const pathName = usePathname();
    const { language } = useContext(MyLanguage);
    const [menuOpen, setMenuOpen] = useState(false);
    const [direction, setDirection] = useState("ltr");

    useEffect(() => {
        setDirection(language === "fa" ? "rtl" : "ltr");
    }, [language]);

    const headerLinks = {
        en: [
            { href: "/", title: "Home" },
            { href: "/store", title: "Store" },
            { href: "/AboutUs", title: "About Us" },
            { href: "/CallUs", title: "Call Us" }
        ],
        fa: [
            { href: "/", title: "صفحه ی اصلی" },
            { href: "/store", title: "فروشگاه" },
            { href: "/AboutUs", title: "درباره ی ما" },
            { href: "/CallUs", title: "تماس با ما" }
        ].reverse() // معکوس کردن ترتیب لیست در فارسی
    };

    const menuItems = language === "en" ? headerLinks.en : headerLinks.fa;

    return (
        <>
            {/* هدر ثابت و راست‌چین در حالت فارسی */}
            <div className={`shadow-md bg-white/80 backdrop-blur-lg w-full m-auto z-50 h-20 flex items-center transition-all duration-300 ${direction === "rtl" ? "rtl flex-row-reverse text-right" : "ltr"}`}>
                <div className="flex items-center justify-between w-11/12 mx-auto">
                    {/* لوگو */}
                    <img className="w-36 h-36" src="logo.png" alt="Logo" />

                    {/* دکمه‌ی منو در موبایل */}
                    <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* منوی اصلی در دسکتاپ */}
                    <div className={`hidden md:flex space-x-6 rtl:space-x-reverse`}>
                        {menuItems.map((item) => (
                            <Link
                                className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${pathName === item.href ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-800 hover:text-blue-500"}`}
                                key={item.href}
                                href={item.href}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* دکمه‌ها */}
                    <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
                        <Link href="/LoginPage">
                            <p className="text-blue-600 font-semibold text-base hover:underline transition">Login</p>
                        </Link>
                        <LanguageSwitcher />
                        <Link href={"/cart"}>
                        {
                            language==="en" ?<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Shopping Cart
                          </button>:
                            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                                    سبد خرید
                             </button>
                        }
  
                        </Link>
   
                       
                    </div>
                </div>
            </div>

            {/* برای جلوگیری از افتادن سکشن زیر هدر */}
            <main className="mt-20">
                {/* محتویات صفحه اینجا قرار می‌گیرد */}
            </main>

            {/* منوی موبایل */}
            <div className={`fixed top-20 left-0 w-full bg-white shadow-md flex flex-col items-start py-4 transition-all duration-300 px-6 z-[9999] ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                {menuItems.map((item) => (
                    <Link
                        className="py-3 text-lg text-gray-800 w-full text-left transition hover:text-blue-500"
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                ))}
                <Link href="/LoginPage" className="py-3 text-blue-600 font-semibold w-full text-left transition hover:underline" onClick={() => setMenuOpen(false)}>
                    Login
                </Link>
                <div className="w-full flex items-center gap-4 mt-4">
                    <LanguageSwitcher />
                    <Link href={"/cart"}>
                        {
                            language==="en" ?<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Shopping Cart
                          </button>:
                            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                                    سبد خرید
                             </button>
                        }
  
                        </Link>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;
