"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "../modal/modal";
import LanguageSwitcher from "../Languagebutton/Languagebutton";
import { useContext, useState } from "react";
import { MyLanguage } from "../../context/myLanguage";
import { Menu, X } from "lucide-react";

function Navbar() {
    const pathName = usePathname();
    const { language } = useContext(MyLanguage);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const headerHandel = [
        { href: "/", title: "Home" },
        { href: "/store", title: "Store" },
        { href: "/AboutUs", title: "About Us" },
        { href: "/CallUs", title: "Call Us" }
    ];

    const headerHande2 = [
        { href: "/", title: "صفحه ی اصلی" },
        { href: "/store", title: "فروشگاه" }
    ];

    const menuItems = language === "en" ? headerHandel : headerHande2;

    return (
        <div className="shadow bg-white">
            <div className=" flex items-center justify-between w-11/12 mx-auto">
                <img className="w-40 h-40" src="logo.png" alt="Logo" />
                
                {/* دکمه‌ی منو در موبایل */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                
                {/* منوی اصلی در دسکتاپ */}
                <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
                    {menuItems.map((item) => (
                        <Link className={`p-4 ${pathName === item.href ? "text-blue-700" : "text-black"}`} key={item.href} href={item.href}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                
                {/* آیکون‌ها و دکمه‌ها */}
                <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
                    <Link href="/LoginPage">
                        <p className="text-blue-700 text-base underline">Login</p>
                    </Link>
                    <LanguageSwitcher />
                    <Modal />
                </div>
            </div>
            
            {/* منوی موبایل */}
            <div className={`fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-start py-4 transition-all duration-300 px-6 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                {menuItems.map((item) => (
                    <Link className="py-2 text-lg text-black w-full text-left" key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.title}
                    </Link>
                ))}
                <Link href="/LoginPage" className="py-2 text-blue-700 underline w-full text-left" onClick={() => setMenuOpen(false)}>
                    Login
                </Link>
                <div className="w-full flex items-center gap-4 mt-4">
                    <LanguageSwitcher />
                    <Modal />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
