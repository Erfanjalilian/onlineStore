"use client";
import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "@/context/myLanguage";
import EndTheSection from "@/components/endTheSection/endTheSection";

function Home() {
  const { language } = useContext(MyLanguage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/products");
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
    <div>
      <div className="w-11/12 mx-auto">
        <img
          className="w-full h-96 my-10 rounded"
          src="https://poshakmeysammj.com/wp-content/uploads/2023/08/39ff428834786e972c9382051358865143c256dc_1686640730-1536x480.jpg"
        />



      </div>


      <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/%D8%B43%D8%B3%DB%8C23%D8%B4%D8%B33%DB%8C2%D8%B4%D8%B3%DB%8C-400x294.jpg" />
        </div>
        <div>
          <img className="rounded shadow"  src="https://poshakmeysammj.com/wp-content/uploads/2023/08/23%D8%B4%D8%B3%DB%8C2332%D8%B4%D8%B3%DB%8C.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/32%D8%B4%D8%B3%DB%8C2323%D8%B4%D8%B3%DB%8C.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/56%D8%B4%D8%B3%DB%8C6%D8%B465%D8%B3%DB%8C-400x294.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/32%D8%B4%D8%B3%DB%8C232%D8%B4%D8%B3%DB%8C%D8%B4%D8%B3%DB%8C%D8%B3%DB%8C-400x294.jpg" />
        </div>
        <div>
          <img className="rounded shadow" src="https://poshakmeysammj.com/wp-content/uploads/2023/08/3%D8%B42%D8%B3%DB%8C32%D8%B4%D8%B32%DB%8C32%D8%B4%D8%B3%DB%8C-400x294.jpg" />
        </div>
      </div>
      


      </div>

      {/* محصولات دارای تخفیف */}
      {language === "en" ? (
        <h2 className="text-2xl font-bold text-center my-20">🔥 Special discounts 🔥</h2>
      ) : (
        <h2 className="text-2xl font-bold text-center mb-6">🔥 تخفیف‌های ویژه 🔥</h2>
      )}

      {loading ? (
        <p className="text-center">در حال بارگذاری...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {discountedProducts.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
              <img src={item.image} alt={item.name.fa} className="w-full h-40 object-cover rounded-md" />
          {
            language==="en"?
            <h3 className="mt-2 text-lg font-semibold text-left">{item.name.en}</h3>:
            <h3 className="mt-2 text-lg font-semibold text-right">{item.name.fa}</h3>
          }


          {
            language==="en" ?
            <div>
            <div className="flex justify-between">
               
            <div className="text-gray-500 line-through">{item.price.en} $</div>
            <div className="text-red-500">{item.price.en - (item.price.en * item.discountPercentage) / 100} $</div>
           
            
            </div>
            <p className="mt-2 text-lg font-semibold text-left text-green-700">{item.description.en}</p>
          </div>:
          <div>
           <div className="flex justify-between">
               
           <div className="text-gray-500 line-through">{item.price.fa} تومان</div>
           <div className="text-red-500">{item.price.fa - (item.price.fa * item.discountPercentage) / 100} تومان</div>
           
         </div>
         <p className="mt-2 text-lg font-semibold text-right text-green-700">{item.description.fa}</p>
         </div>
          }
        

          {
            
            language==="en" ? 
            <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">
            Buy
          </button>:
           <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">
           خرید
         </button>
          }
         
             
             
             
            </div>
          ))}
        </div>
      )}

      {/* پرفروش‌ترین محصولات */}
      {language === "en" ? (
        <h2 className="text-2xl font-bold text-center mt-12 my-20">🔥 The best sellers 🔥</h2>
      ) : (
        <h2 className="text-2xl font-bold text-center mt-12 mb-6">🔥 پرفروش‌ترین‌ها 🔥</h2>
      )}

      {loading ? (
        <p className="text-center">در حال بارگذاری...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white">
              <img src={product.image} alt={product.name.fa} className="w-full h-40 object-cover rounded-md" />
              {
                language==="en" ?
                <div>
                   <h3 className="mt-2 text-lg font-semibold text-left">{product.name.en}</h3>
                   <p className="text-red-700 font-bold text-left">{product.price.en} $</p>
                   <p className="mt-2 text-lg font-semibold text-left text-green-700">{product.description.en}</p>
                  
                    <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">
                     buy
                    </button>
                </div>:
                <div>
                   <h3 className="mt-2 text-lg font-semibold text-right">{product.name.fa}</h3>
                   <p className="text-red-700 font-bold text-right">{product.price.fa} تومان</p>
                   <p className="mt-2 text-lg font-semibold text-right text-green-700">{product.description.fa}</p>

             
              <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">
                خرید
              </button>
                </div>
              }
             
            </div>
          ))}
        </div>
      )}

      <div className="mx-auto w-11/12">
        <EndTheSection />
      </div>

      <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Home;
