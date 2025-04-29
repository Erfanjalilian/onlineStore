"use client";

import { useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { MyLanguage } from "../../../context/myLanguage";
import { useCart } from "@/context/CartContext ";
import Mybtn from "../../../components/button/button";

function Dstore() {
  const { language } = useContext(MyLanguage);
  const { addToCart } = useCart();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      try {
        const result = await fetch(`https://6810ff2827f2fdac24139dec.mockapi.io/products/${slug}`);
        if (!result.ok) {
          throw new Error(`خطا در دریافت محصول - وضعیت: ${result.status}`);
        }
        const data = await result.json();
        setProduct(data.product || data);
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
    if (!product || !selectedSize) {
      alert(language === "en" ? "Please select a size" : "لطفاً یک سایز انتخاب کنید");
      return;
    }
    addToCart({ ...product, quantity, size: selectedSize });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (!product) return <p className="text-center text-red-500">محصول یافت نشد!</p>;

  const discount = product.discountPercentage || 0;
  const originalPrice = language === "en" ? product.price?.en || 0 : product.price?.fa || 0;
  const currency = language === "en" ? product.currency?.en || "USD" : product.currency?.fa || "تومان";
  const finalPrice = originalPrice - (originalPrice * discount) / 100;

  return (
    <div className="mx-auto w-11/12 relative">
      <div className="md:grid md:grid-cols-12 mt-20 shadow border p-10 rounded-xl sm:block">
        <div className="md:col-span-3 sm:block">
          <img src={product.image} className="w-full h-full rounded-xl" alt="product" />
        </div>
        <div className="md:col-span-9 sm:block">
          {
            language==="en" ?
            <div className="text-left">
               <h3 className="text-2xl px-5">{language === "en" ? product.name?.en : product.name?.fa || "بدون نام"}</h3>
               <p className="text-xl px-5">{language === "en" ? product.description?.en : product.description?.fa || "بدون توضیحات"}</p>
            </div>:
            <div className="text-right">
               <h3 className="text-2xl px-5 text-right">{language === "en" ? product.name?.en : product.name?.fa || "بدون نام"}</h3>
               <p className="text-xl px-5 text-right">{language === "en" ? product.description?.en : product.description?.fa || "بدون توضیحات"}</p>
            </div>
          }
         
          <p className={`px-5 text-lg ${language === "en" ? "text-left" : "text-right"}`}>
            <span className="text-red-500 font-bold">{finalPrice.toLocaleString()} {currency}</span>
            {discount > 0 && (
              <span className="text-gray-500 line-through ml-2">{originalPrice.toLocaleString()} {currency}</span>
            )}
          </p>



          {
            language==="en"?
            <div>
                <div className="mt-5">
            <label htmlFor="size" className="text-xl px-5">{language === "en" ? "Size:" : "سایز:"}</label>
            <select
              id="size"
              className="p-2 border rounded-lg"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">{language === "en" ? "Select size" : "لطفا سایز را انتخاب کنید"}</option>
              {product.sizes?.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="mt-5 flex items-center">
            <span className="text-xl px-5">{language === "en" ? "Quantity:" : "تعداد:"}</span>
            <Mybtn quantity={quantity} setQuantity={setQuantity} />
          </div>
            </div>:


            <div className="text-right">
                <div className="mt-5">
            <label htmlFor="size" className="text-xl px-5">{language === "en" ? "Size:" : "سایز:"}</label>
            <select
              id="size"
              className="p-2 border rounded-lg"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">{language === "en" ? "Select size" : "لطفا سایز را انتخاب کنید"}</option>
              {product.sizes?.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        
          <div className="mt-5 flex items-center">
            <span className="text-xl px-5 ms-auto">{language === "en" ? "Quantity:" : "تعداد:"}</span>
            <Mybtn quantity={quantity} setQuantity={setQuantity} />
          </div>
            </div>
          }





        
          <div className="text-center mt-5">
            <button onClick={handleAddToCart} className="bg-blue-700 px-4 py-2 text-white rounded">
              {language === "en" ? "Add to cart" : "اضافه کردن به سبد خرید"}
            </button>
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