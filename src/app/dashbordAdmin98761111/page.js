"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // برای هدایت به صفحه‌ی خطای 403

export default function dashbordAdmin9876() {
  const [products, setProducts] = useState([]); // لیست محصولات
  const [title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null); // برای ذخیره ID محصول در حال ویرایش
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter(); // برای هدایت به صفحه‌ی 403

  // 📌 بررسی نقش کاربر
  useEffect(() => {
    const role = localStorage.getItem("role"); // نقش کاربر را از localStorage می‌خوانیم

    if (role !== "admin") {
      // اگر نقش کاربر "admin" نیست، هدایت به صفحه‌ی 403
      router.push("/403");
    } else {
      // اگر نقش "admin" است، اطلاعات محصولات را بارگذاری می‌کنیم
      fetch("http://localhost:3000/store") // آدرس API را تنظیم کن
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("خطا در دریافت محصولات:", err));
    }
  }, [router]); // توجه: وقتی که صفحه رندر می‌شود، چک می‌کند که نقش "admin" هست یا خیر

  // 📌 تابع ارسال محصول (افزودن / ویرایش)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const productData = { title, Price, image, description };

    try {
      const response = await fetch(
        editId ? `http://localhost:3000/store/${editId}` : "http://localhost:3000/store",
        {
          method: editId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        }
      );

      if (!response.ok) throw new Error("مشکلی پیش آمد، لطفاً دوباره تلاش کنید.");

      const updatedProduct = await response.json();

      if (editId) {
        // 📌 ویرایش محصول در لیست
        setProducts(products.map((p) => (p.id === editId ? updatedProduct : p)));
        setMessage("محصول ویرایش شد!");
      } else {
        // 📌 افزودن محصول جدید به لیست
        setProducts([...products, updatedProduct]);
        setMessage("محصول جدید اضافه شد!");
      }

      resetForm();
    } catch (err) {
      setMessage("خطا: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 📌 تابع حذف محصول
  const handleDelete = async (id) => {
    if (!window.confirm("آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟")) return;

    try {
      await fetch(`http://localhost:3000/store/${id}`, { method: "DELETE" });
      setProducts(products.filter((product) => product.id !== id));
      setMessage("محصول با موفقیت حذف شد!");
    } catch (err) {
      setMessage("خطا در حذف محصول");
    }
  };

  // 📌 مقداردهی فرم برای ویرایش محصول
  const handleEdit = (product) => {
    setEditId(product.id);
    setTitle(product.title);
    setPrice(product.Price);
    setImage(product.image);
    setDescription(product.description);
  };

  // 📌 ریست کردن فرم
  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setPrice("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        {editId ? "ویرایش محصول" : "افزودن محصول جدید"}
      </h2>
      {message && <p className="text-center text-blue-500 mb-4">{message}</p>}

      {/* 📌 فرم افزودن / ویرایش محصول */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="نام محصول"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="قیمت محصول"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="لینک تصویر محصول"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="توضیحات محصول"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "در حال ارسال..." : editId ? "ویرایش محصول" : "افزودن محصول"}
        </button>
        {editId && (
          <button type="button" onClick={resetForm} className="w-full py-2 mt-2 bg-gray-500 text-white rounded-md">
            لغو ویرایش
          </button>
        )}
      </form>

      {/* 📌 لیست محصولات */}
      <h3 className="text-xl font-semibold mt-6 mb-2 text-right">لیست محصولات</h3>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center p-4 border rounded-md shadow-sm">
            <div className="flex items-center space-x-4">
              <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="font-bold">{product.title}</p>
                <p className="text-sm text-gray-500">{product.Price} تومان</p>
              </div>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(product)} className="px-3 py-1 bg-yellow-500 text-white rounded-md">
                ویرایش
              </button>
              <button onClick={() => handleDelete(product.id)} className="px-3 py-1 bg-red-500 text-white rounded-md">
                حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
