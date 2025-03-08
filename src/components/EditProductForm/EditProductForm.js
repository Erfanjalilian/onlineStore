"use client";
import { useState, useEffect } from "react";

const EditProductForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    Price: "",
    description: "",
    image: "",
  });

  const [product, setProduct] = useState(props.product || null); // استفاده از props برای مقداردهی اولیه
  console.log(product);

  // اگر props تغییر کرد، product رو به روز کنیم
  useEffect(() => {
    setProduct(props.product);
    setFormData(props.product);
  }, [props.product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product?.id) {
      alert("خطا: شناسه محصول نامعتبر است!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/store/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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

  if (!product) {
    return <div className="text-center py-8">در حال بارگذاری اطلاعات محصول...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">ویرایش محصول</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* نام محصول */}
          <div>
            <label className="block text-gray-700">نام محصول</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* قیمت محصول */}
          <div>
            <label className="block text-gray-700">قیمت (تومان)</label>
            <input
              type="number"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* توضیحات محصول */}
          <div>
            <label className="block text-gray-700">توضیحات</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>

          {/* تصویر محصول */}
          <div>
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
