"use client";

import { useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ دریافت مقدار `params` به روش جدید
import { MyLanguage } from "../../../context/myLanguage";
import { useCart } from "@/context/CartContext ";
import Mybtn from "../../../components/button/button";

function Dstore() {
  const { language } = useContext(MyLanguage);
  const { addToCart } = useCart();

  const { slug } = useParams(); // ✅ دریافت `slug` بدون نیاز به props
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1); // مقدار پیش‌فرض

  useEffect(() => {
    if (!slug) return; // 🔹 اگر `slug` مقدار ندارد، از `fetch` جلوگیری کن

    async function fetchProduct() {
      try {
        const result = await fetch(`http://localhost:3000/products/${slug}`);

        // بررسی اینکه پاسخ HTTP موفقیت‌آمیز بوده
        if (!result.ok) {
          throw new Error(`خطا در دریافت محصول - وضعیت: ${result.status}`);
        }

        const data = await result.json(); // ✅ حتماً `await` رو قرار بده
        console.log("Fetched data:", data); // 🔍 مقدار دریافتی رو بررسی کن

        if (!data || Object.keys(data).length === 0) {
          console.error("محصول یافت نشد!");
          setProduct(null);
        } else {
          setProduct(data.product || data); // 🔹 اگر داده داخل `product` بود، اون رو بگیر
        }
      } catch (error) {
        console.error("خطا در دریافت محصول:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({ ...product, quantity });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500">محصول یافت نشد!</p>;
  }

  return (
    <div className="mx-auto w-11/12 relative">
      <div className="grid grid-cols-12 mt-20 shadow border p-10 rounded-xl">
        <div className="col-span-3">
          <img src={product.image} className="w-full h-full rounded-xl" alt="product" />
        </div>
        <div className="col-span-9">
          {
            language==="en" ?
            <div>
               <h3 className="text-2xl px-5">{product.name?.en || "بدون نام"}</h3>
               <p className="text-xl px-5">{product.description?.en || "بدون توضیحات"}</p>
            </div>:
            <div>
               <h3 className="text-2xl px-5 text-right">{product.name?.fa || "بدون نام"}</h3>
               <p className="text-xl px-5 text-right">{product.description?.fa || "بدون توضیحات"}</p>
            </div>
          }

          {
            language==="en" ?
            <p className="px-5">{product.price?.en || "بدون قیمت"} $</p>:
            <p className="px-5 text-right">تومان {product.price?.fa || "بدون قیمت"} </p>
          }

         

            {
              language==="en" ?
              <Mybtn quantity={quantity} setQuantity={setQuantity} />:
              <div className="text-right">
                <Mybtn quantity={quantity} setQuantity={setQuantity} />
              </div>
            }
         

          

          <div className="text-center">
            {
              language==="en" ?  <button onClick={handleAddToCart} className="bg-blue-700 px-4 py-2 text-white rounded">
              Add to cart
            </button>:
             <button onClick={handleAddToCart} className="bg-blue-700 px-4 py-2 text-white rounded">
             اضافه کردن به سبد خرید
           </button>
            }
           
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500">
          {language === "en" ? "Product added to cart!" : "محصول به سبد خرید اضافه شد!"}
        </div>
      )}
    </div>
  );
}

export default Dstore;
