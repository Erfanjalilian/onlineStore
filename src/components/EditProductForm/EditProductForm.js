"use client";
import { useState, useEffect } from "react";

const EditProductForm = ({ product: initialProduct }) => {
  const [formData, setFormData] = useState({
    name: { en: "", fa: "" },
    price: { en: "", fa: "" },
    description: { en: "", fa: "" },
    image: "",
  });

  // مقداردهی اولیه از props
  useEffect(() => {
    if (initialProduct) {
      setFormData(initialProduct);
    }
  }, [initialProduct]);

  // مدیریت تغییرات اینپوت‌ها
  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    const lang = dataset.lang; // مشخص کردن زبان

    setFormData((prevData) => ({
      ...prevData,
      [name]: lang ? { ...prevData[name], [lang]: value } : value,
    }));
  };

  // ارسال اطلاعات ویرایش‌شده به سرور
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!initialProduct?.id) {
      alert("خطا: شناسه محصول نامعتبر است!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/products/${initialProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("محصول با موفقیت ویرایش شد!");
      } else {
        alert("خطا در ویرایش محصول!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("خطایی در پردازش داده‌ها رخ داد!");
    }
  };

  if (!initialProduct) {
    return <div className="text-center py-8">در حال بارگذاری اطلاعات محصول...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-center text-2xl font-bold mb-6">ویرایش محصول</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* نام محصول */}
          <div className="text-right">
            <label className="block text-gray-700">نام محصول (فارسی)</label>
            <input
              type="text"
              name="name"
              data-lang="fa"
              value={formData.name.fa}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <br />

            <label className="block text-gray-700">نام محصول (انگلیسی)</label>
            <input
              type="text"
              name="name"
              data-lang="en"
              value={formData.name.en}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* قیمت محصول */}
          <div className="text-right">
            <label className="block text-gray-700">قیمت (تومان)</label>
            <input
              type="number"
              name="price"
              data-lang="fa"
              value={formData.price.fa}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <br />

            <label className="block text-gray-700">قیمت (دلار)</label>
            <input
              type="number"
              name="price"
              data-lang="en"
              value={formData.price.en}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* توضیحات محصول */}
          <div className="text-right">
            <label className="block text-gray-700">توضیحات (فارسی)</label>
            <textarea
              name="description"
              data-lang="fa"
              value={formData.description.fa}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
            <br />

            <label className="block text-gray-700">توضیحات (انگلیسی)</label>
            <textarea
              name="description"
              data-lang="en"
              value={formData.description.en}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>

          {/* تصویر محصول */}
          <div className="text-right">
            <label className="block text-gray-700">تصویر محصول</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* دکمه‌ها */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              ذخیره تغییرات
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "/dashbordAdmin9876")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              بازگشت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
