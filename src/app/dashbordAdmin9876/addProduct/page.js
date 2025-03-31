"use client";
import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: { en: "", fa: "" },
    price: { en: "", fa: "" },
    description: { en: "", fa: "" },
    image: "",
    category: { en: "", fa: "" },
    discountPercentage: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;

    // اگر فیلد زبان داشته باشد
    if (dataset.lang) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: {
          ...prevProduct[name],
          [dataset.lang]: value,
        },
      }));
    } else {
      // اگر فیلد discountPercentage باشد، آن را به عدد تبدیل می‌کنیم
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: name === "discountPercentage" ? Number(value) : value, // 👈 تبدیل مقدار به عدد برای discountPercentage
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setMessage("محصول با موفقیت اضافه شد!");
        setProduct({
          name: { en: "", fa: "" },
          price: { en: "", fa: "" },
          description: { en: "", fa: "" },
          image: "",
          category: { en: "", fa: "" },
          discountPercentage: "", // بازنشانی مقدار تخفیف به حالت اولیه
        });
      } else {
        setMessage("مشکلی پیش آمده است.");
      }
    } catch (error) {
      setMessage("خطا در برقراری ارتباط با سرور.");
    }

    setLoading(false);
  };

  return (
    <div className="text-right max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">افزودن محصول جدید</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          data-lang="fa"
          value={product.name.fa}
          onChange={handleChange}
          placeholder="نام محصول (فارسی)"
          className="w-full p-2 border rounded-lg text-right"
          required
        />
        <input
          type="text"
          name="name"
          data-lang="en"
          value={product.name.en}
          onChange={handleChange}
          placeholder="نام محصول (انگلیسی)"
          className="w-full p-2 border rounded-lg text-right"
          required
        />
        <input
          type="number"
          name="price"
          data-lang="fa"
          value={product.price.fa}
          onChange={handleChange}
          placeholder="قیمت محصول (تومان)"
          className="w-full p-2 border rounded-lg text-right"
          required
        />
        <input
          type="number"
          name="price"
          data-lang="en"
          value={product.price.en}
          onChange={handleChange}
          placeholder="قیمت محصول (دلار)"
          className="w-full p-2 border rounded-lg text-right"
          required
        />
        <input
          type="number"
          name="discountPercentage"
          value={product.discountPercentage}
          onChange={handleChange}
          placeholder="میزان تخفیف (به درصد)"
          className="w-full p-2 border rounded-lg text-right"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="لینک تصویر محصول"
          className="w-full p-2 border rounded-lg text-right"
        />
        <input
          type="text"
          name="category"
          data-lang="fa"
          value={product.category.fa}
          onChange={handleChange}
          placeholder="دسته‌بندی"
          className="w-full p-2 border rounded-lg text-right"
          required
        />
        <br />
        <input
          type="text"
          name="category"
          data-lang="en"
          value={product.category.en}
          onChange={handleChange}
          placeholder="دسته‌بندی (انگلیسی)"
          className="w-full p-2 border rounded-lg text-right"
          required
        />
        <textarea
          name="description"
          data-lang="fa"
          value={product.description.fa}
          onChange={handleChange}
          placeholder="توضیحات محصول (فارسی)"
          className="w-full p-2 border rounded-lg text-right"
          rows="4"
        ></textarea>
        <textarea
          name="description"
          data-lang="en"
          value={product.description.en}
          onChange={handleChange}
          placeholder="توضیحات محصول (انگلیسی)"
          className="w-full p-2 border rounded-lg text-right"
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
