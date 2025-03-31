"use client";

import React, { useState, useEffect } from "react";

const OrderManagement = () => {
  const [filter, setFilter] = useState("today");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const result = await fetch("http://localhost:3000/order");
        if (!result.ok) {
          throw new Error("Error fetching data");
        }
        const data = await result.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterOrders = () => {
    const now = new Date();
    return orders.filter((order) => {
      const orderDate = new Date(order.date);
      const diffTime = now - orderDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      if (filter === "today") return diffDays < 1;
      if (filter === "3days") return diffDays < 3;
      if (filter === "7days") return diffDays < 7;
      return true;
    });
  };

  const filteredOrders = filterOrders().filter((order) =>
    order.order_code.includes(search)
  );

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;

  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          مدیریت سفارش‌ها
        </h1>

        {/* فیلتر و جستجو */}
        <div className="flex justify-between items-center mb-6">
          {/* فیلتر سفارش */}
          <div className="flex items-center">
            <label htmlFor="order-filter" className="mr-2 text-lg">
              فیلتر سفارش‌ها:
            </label>
            <select
              id="order-filter"
              value={filter}
              onChange={handleFilterChange}
              className="p-2 border rounded-lg"
            >
              <option value="today">سفارش‌های امروز</option>
              <option value="3days">سفارش‌های ۳ روز گذشته</option>
              <option value="7days">سفارش‌های یک هفته گذشته</option>
            </select>
          </div>

          {/* جستجوی کد سفارش */}
          <div className="flex items-center">
            <label htmlFor="order-search" className="mr-2 text-lg">
              جستجو بر اساس کد سفارش:
            </label>
            <input
              id="order-search"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="کد سفارش را وارد کنید"
              className="p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* جدول نمایش سفارش‌ها */}
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">کد سفارش</th>
              <th className="border px-4 py-2">نام مشتری</th>
              <th className="border px-4 py-2">وضعیت</th>
              <th className="border px-4 py-2">تاریخ سفارش</th>
              <th className="border px-4 py-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.order_code}</td>
                <td className="border px-4 py-2">{item.customer_name}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg"
                    onClick={() => setSelectedOrder(item)}
                  >
                    مشاهده جزئیات
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* مودال جزئیات سفارش */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-center">جزئیات سفارش</h2>
            <p className="text-right">
              <strong>کد سفارش:</strong> {selectedOrder.order_code}
            </p>
            <p className="text-right">
              <strong>نام مشتری:</strong> {selectedOrder.customer_name}
            </p>
            <p className="text-right">
              <strong>وضعیت:</strong> {selectedOrder.status}
            </p>
            <p className="text-right">
              <strong>تاریخ سفارش:</strong> {selectedOrder.date}
            </p>
            <p className="text-right">
              <strong>مبلغ سفارش:</strong> {selectedOrder.total_price} تومان
            </p>

            {/* لیست محصولات سفارش */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-right">محصولات سفارش:</h3>
              {Array.isArray(selectedOrder.order_items) && selectedOrder.order_items.length > 0 ? (
                <ul className="list-disc pl-5">
                  {selectedOrder.order_items.map((product, index) => (
                    <li className="text-right list-none" key={index}>
                      {product.name} - {product.price} تومان
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-right">محصولی برای نمایش وجود ندارد.</p>
              )}
            </div>

            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setSelectedOrder(null)}
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
