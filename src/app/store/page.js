"use client";
import React, { useContext, useState } from "react";
import { MyLanguage } from "../../context/myLanguage";
import Productitem from "../../components/productitem/productitem";
import Filters from "../../components/Filters/Filters";
import Link from "next/link";

function Store() {
    const { data, language } = useContext(MyLanguage); // دریافت مقدار data از کانتکست
    const [filters, setFilters] = useState({ category: "", Price: [0, 1000] });
    console.log(filters)

    // بررسی اینکه آیا data مقدار دارد یا نه
    if (!data) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }

    // تابع تغییر فیلتر
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        console.log(newFilters.category); 
    };
    console.log(data)

    // اگر data مقدار داشته باشد، فیلتر را اعمال کن
    const filteredData = data?.filter((item) => {
        console.log(item.Price)
        const matchesCategory = filters.category ? item.category === filters.category : true;
        const matchesPrice = item.Price >= filters.Price[0] && item.Price <= filters.Price[1];
        return matchesCategory && matchesPrice;
        
    }) || [];

    
    console.log(filters.Price)


  

    return (
        <div className="w-11/12 mx-auto">
            <div className="">
                {language === "en" ? (
                    <h2 className="my-14">Store</h2>
                ) : (
                    <h2 className="my-14 text-right">فروشگاه</h2>
                )}
                <div className="flex">
                    {/* لیست محصولات */}
                    <div className="w-9/12">
                        <div className="grid grid-cols-3 gap-4">
                            {filteredData.map((item) => (
                                <div key={item.id}>
                                    <Link href={`/store/${item.id}`}>
                                        <Productitem {...item} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* فیلتر محصولات */}
                   <div className="w-3/12 ml-5">
                       <Filters onFilterChange={handleFilterChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;
