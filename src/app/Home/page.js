"use client";
import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "@/context/myLanguage";
import EndTheSection from "@/components/endTheSection/endTheSection";
import Link from "next/link";

function Home() {
  const { language } = useContext(MyLanguage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("https://6810ff2827f2fdac24139dec.mockapi.io/products");
        const products = await result.json();
        setData(products);
      } catch (error) {
        console.error("خطا در دریافت داده‌ها:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // محصولات دارای تخفیف
  const discountedProducts = data.filter((product) => product.discountPercentage > 0);

  // پرفروش‌ترین محصولات (۴ تا بالاترین)
  const bestSellingProducts = [...data]
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 pb-10">
      {/* هدر جذاب */}
      <div className="relative flex flex-col items-center justify-center h-64 md:h-80 bg-gradient-to-r from-blue-100 via-white to-blue-200 rounded-b-3xl shadow-lg mb-10 overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg tracking-tight">
          {language === "en" ? "Online Store" : "فروشگاه آنلاین"}
        </h1>
        <p className="mt-2 text-blue-500 text-lg md:text-2xl font-medium">
          {language === "en" ? "Best discounts & best sellers!" : "بهترین تخفیف‌ها و پرفروش‌ترین‌ها!"}
        </p>
      </div>

      {/* بنر */}
      <div className="w-11/12 mx-auto">
        <img
          className="w-full h-72 md:h-96 my-10 rounded-2xl object-cover shadow-xl border-2 border-blue-100"
          src="https://poshakmeysammj.com/wp-content/uploads/2023/08/39ff428834786e972c9382051358865143c256dc_1686640730-1536x480.jpg"
          alt="banner"
        />
      </div>

      {/* گالری */}
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          <img className="rounded-xl shadow-lg object-cover h-32 w-full border border-blue-100" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/%D8%B43%D8%B3%DB%8C23%D8%B4%D8%B33%DB%8C2%D8%B4%D8%B3%DB%8C-400x294.jpg" />
          <img className="rounded-xl shadow-lg object-cover h-32 w-full border border-blue-100" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/23%D8%B4%D8%B3%DB%8C2332%D8%B4%D8%B3%DB%8C.jpg" />
          <img className="rounded-xl shadow-lg object-cover h-32 w-full border border-blue-100" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/32%D8%B4%D8%B3%DB%8C2323%D8%B4%D8%B3%DB%8C.jpg" />
          <img className="rounded-xl shadow-lg object-cover h-32 w-full border border-blue-100" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/56%D8%B4%D8%B3%DB%8C6%D8%B465%D8%B3%DB%8C-400x294.jpg" />
          <img className="rounded-xl shadow-lg object-cover h-32 w-full border border-blue-100" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/32%D8%B4%D8%B3%DB%8C232%D8%B4%D8%B3%DB%8C%D8%B4%D8%B3%DB%8C%D8%B3%DB%8C-400x294.jpg" />
          <img className="rounded-xl shadow-lg object-cover h-32 w-full border border-blue-100" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/3%D8%B42%D8%B3%DB%8C32%D8%B4%D8%B32%DB%8C32%D8%B4%D8%B3%DB%8C-400x294.jpg" />
        </div>
      </div>

      {/* محصولات دارای تخفیف */}
      {language === "en" ? (
        <h2 className="text-2xl md:text-3xl font-bold text-center my-16 text-blue-700">🔥 Special discounts 🔥</h2>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold text-center my-16 text-blue-700">🔥 تخفیف‌های ویژه 🔥</h2>
      )}

      {loading ? (
        <p className="text-center text-blue-400">{language === "en" ? "Loading..." : "در حال بارگذاری..."}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
          {discountedProducts.map((item) => (
            <div key={item.id} className="bg-white border border-blue-100 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <img src={item.image} alt={item.name.fa} className="w-full h-40 object-cover rounded-xl border border-blue-100" />
              {language === "en" ? (
                <h3 className="mt-4 text-lg font-bold text-left text-blue-900">{item.name.en}</h3>
              ) : (
                <h3 className="mt-4 text-lg font-bold text-right text-blue-900">{item.name.fa}</h3>
              )}
              {language === "en" ? (
                <div>
                  <div className="flex justify-between mt-2">
                    <div className="text-gray-400 line-through">{item.price.en} $</div>
                    <div className="text-green-600 font-bold">{item.price.en - (item.price.en * item.discountPercentage) / 100} $</div>
                  </div>
                  <p className="mt-2 text-base font-medium text-left text-gray-600">{item.description.en}</p>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between mt-2">
                    <div className="text-gray-400 line-through">{item.price.fa} تومان</div>
                    <div className="text-green-600 font-bold">{item.price.fa - (item.price.fa * item.discountPercentage) / 100} تومان</div>
                  </div>
                  <p className="mt-2 text-base font-medium text-right text-gray-600">{item.description.fa}</p>
                </div>
              )}
              {language === "en" ? (
                <Link href={`/store/${item.id}`}>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-bold transition">Buy</button>
                </Link>
              ) : (
                <Link href={`/store/${item.id}`}>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-bold transition">خرید</button>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}

      {/* پرفروش‌ترین محصولات */}
      {language === "en" ? (
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-20 mb-10 text-blue-700">🔥 The best sellers 🔥</h2>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-20 mb-10 text-blue-700">🔥 پرفروش‌ترین‌ها 🔥</h2>
      )}

      {loading ? (
        <p className="text-center text-blue-400">{language === "en" ? "Loading..." : "در حال بارگذاری..."}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="bg-white border border-blue-100 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <img src={product.image} alt={product.name.fa} className="w-full h-40 object-cover rounded-xl border border-blue-100" />
              {language === "en" ? (
                <div>
                  <h3 className="mt-4 text-lg font-bold text-left text-blue-900">{product.name.en}</h3>
                  <p className="text-green-600 font-bold text-left">{product.price.en} $</p>
                  <p className="mt-2 text-base font-medium text-left text-gray-600">{product.description.en}</p>
                  <Link href={`/store/${product.id}`}>
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-bold transition">Buy</button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h3 className="mt-4 text-lg font-bold text-right text-blue-900">{product.name.fa}</h3>
                  <p className="text-green-600 font-bold text-right">{product.price.fa} تومان</p>
                  <p className="mt-2 text-base font-medium text-right text-gray-600">{product.description.fa}</p>
                  <Link href={`/store/${product.id}`}>
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-bold transition">خرید</button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mx-auto w-11/12 mt-16">
        <EndTheSection />
      </div>
    </div>
  );
}

export default Home;