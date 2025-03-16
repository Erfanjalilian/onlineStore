"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import EditProductForm from "../../../components/EditProductForm/EditProductForm";

function EditProductPage() {
  const { id } = useParams(); // گرفتن مقدار id از مسیر
  console.log({ id });

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error("خطایی در دریافت داده‌ها رخ داد");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-8">در حال بارگذاری...</div>;
  if (error) return <div className="text-center py-8">{error}</div>;
  if (!product) return <div className="text-center py-8">محصول یافت نشد!</div>;

  console.log(product)

  return <EditProductForm product={product} />;
}

export default EditProductPage;
