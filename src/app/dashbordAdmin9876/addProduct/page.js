"use client"
import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    Price: "",
    description: "",
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setMessage("محصول با موفقیت اضافه شد!");
        setProduct({ title: "", Price: "", description: "", image: "", category: "" });
      } else {
        setMessage("مشکلی پیش آمده است.");
      }
    } catch (error) {
      setMessage("خطا در برقراری ارتباط با سرور.");
    }

    setLoading(false);
  };

  return (
  
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">افزودن محصول جدید</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="نام محصول"
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="Price"
          value={product.Price}
          onChange={handleChange}
          placeholder="قیمت محصول"
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="لینک تصویر محصول"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="دسته‌بندی"
          className="w-full p-2 border rounded-lg"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="توضیحات محصول"
          className="w-full p-2 border rounded-lg"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "در حال افزودن..." : "افزودن محصول"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
