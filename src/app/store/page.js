"use client";
import React, { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";
import Productitem from "../../components/productitem/productitem";
import Filters from "../../components/Filters/Filters";
import EndTheSection from "@/components/endTheSection/endTheSection";
import Link from "next/link";

function Store() {
    const { language } = useContext(MyLanguage);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ category: "", Price: [0, 1000] });

    useEffect(() => {
        async function fetchProducts() {
            try {
                const result = await fetch("http://localhost:3000/products");
                const data = await result.json();
                setProducts(data);
            } catch (error) {
                console.error("خطا در دریافت محصولات:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="text-center text-lg font-semibold">در حال بارگذاری...</p>;
    }

    // تابع تغییر فیلتر
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="w-11/12 mx-auto">
            {
                language==="en"?            <div className="bg-purple-500 text-white text-center h-80 pt-32 text-7xl">store</div>:
                <div className="bg-purple-500 text-white text-center h-80 pt-32 text-7xl">فروشگاه</div>


            }
            <br /><br />
            <div className="">
                <div className="flex">
                    {/* لیست محصولات */}
                    <div className="w-9/12">
                        <div className="grid grid-cols-3 gap-4">
                            {products.map((item) => (
                                <div key={item.id}>
                                    <Link href={`/store/${item.id}`}>
                                        <Productitem {...item} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* فیلتر محصولات */}
                    <div className="md:w-3/12 ml-5">
                        <Filters onFilterChange={handleFilterChange} />
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <EndTheSection />
            <br /><br />
        </div>
    );
}

export default Store;
