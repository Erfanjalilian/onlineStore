// pages/dstore.js

"use client";

import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../../context/myLanguage";
import { useCart } from "../../../context/CartContext "; // استفاده از کانتکست سبد خرید
import Mybtn from "../../../components/button/button";

function Dstore({ params }) {
    const { language } = useContext(MyLanguage); // زبان از کانتکست
    const { addToCart } = useCart(); // دسترسی به تابع افزودن محصول به سبد خرید
    const [data, setData] = useState(null); // ذخیره داده‌ها
    const [loading, setLoading] = useState(true); // وضعیت بارگذاری
    const [showToast, setShowToast] = useState(false); // نمایش یا عدم نمایش پاپ‌آپ

    useEffect(() => {
        const fetchData = async () => {
            let url = "";
            if (language === "en") {
                url = `http://localhost:3000/store/${params.slug}`;
            } else if (language === "pe") {
                url = `http://localhost:3000/storpe/${params.slug}`;
            }

            try {
                const result = await fetch(url);
                const data = await result.json();
                setData(data); // ذخیره داده‌ها در state
                setLoading(false); // بارگذاری تمام شده است
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // حتی در صورت بروز خطا بارگذاری تمام شده است
            }
        };

        fetchData(); // فراخوانی تابع برای دریافت داده‌ها
    }, [params.slug, language]); // وقتی که `slug` یا `language` تغییر کند دوباره داده‌ها لود می‌شود

    const handleAddToCart = () => {
       
        addToCart(data); // محصول به سبد خرید اضافه می‌شود
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000); // پاپ‌آپ بعد از ۳ ثانیه مخفی می‌شود
    };

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="mx-auto w-11/12 relative">
            <div className="grid grid-cols-12 mt-20 shadow border p-10 rounded-xl">
                <div className="col-span-3">
                    <img src={data.image} className="w-full h-full rounded-xl" alt="product" />
                </div>
                {language === "en" ? (
                    <div className="col-span-9">
                        <h3 className="text-2xl px-5">{data.title}</h3>
                        <p className="text-xl px-5">{data.description}</p>
                        <Mybtn />
                        <div className="text-center">
                            <button onClick={handleAddToCart} className="bg-blue-700 px-4 py-2 text-white rounded">Add to cart</button>
                        </div>
                    </div>
                ) : (
                    <div className="col-span-9">
                        <h3 className="text-2xl px-5 text-right">{data.title}</h3>
                        <p className="text-xl px-5 text-right">{data.description}</p>
                        <Mybtn />
                        <div className="text-center">
                            <button onClick={handleAddToCart} className="bg-blue-700 px-4 py-2 text-white rounded">افزودن به سبد خرید</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500">
                    {language === "en" ? "Product added to cart!" : "محصول به سبد خرید اضافه شد!"}
                </div>
            )}
        </div>
    );
}

export default Dstore;
