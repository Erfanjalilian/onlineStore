'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

async function fetchData() {
  const result = await fetch("http://localhost:3000/products");
  return await result.json();
}

async function deleteProduct(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

export default function ProductsSection() {
  const [products, setProducts] = useState([]);

  // استفاده از useEffect برای بارگذاری داده‌ها
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setProducts(data);
    };

    loadData();
  }, []);

  // تابع حذف محصول
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟");
    if (!confirmDelete) return;

    try {
      const success = await deleteProduct(id);
      if (success) {
        alert("محصول با موفقیت حذف شد!");
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      } else {
        alert("خطا در حذف محصول!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("خطایی در حذف محصول رخ داد!");
    }
  };

  return (
    <section id="products" className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-center">مدیریت محصولات</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <Link href={"dashbordAdmin9876/addProduct"}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          افزودن محصول
        </button>
        </Link>
       
        <table className="w-full mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">نام محصول</th>
              <th className="p-2">قیمت</th>
              <th className="p-2">موجودی</th>
              <th className="p-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr className="border-b text-center" key={item.id}>
                <td className="p-2">{item.name.fa}</td>
                <td className="p-2">{item.price.fa} تومان</td>
                <td className="p-2">۱۰ عدد</td>
                <td className="p-2">
                  <Link href={`/dashbordAdmin9876/${item.id}`}>
                    <button className="text-blue-500 hover:text-blue-700">ویرایش</button>
                  </Link>
                  <button
                    className="text-red-500 hover:text-red-700 ml-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
