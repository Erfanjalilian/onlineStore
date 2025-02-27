'use client';

import { useEffect, useState } from 'react';

function Card({ title, children }) {
  return (
    <div className="shadow-lg border rounded-lg p-6 bg-white">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      window.location.href = '/login'; // اگر لاگین نیست، به صفحه لاگین هدایت شود
      return;
    }

    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">در حال بارگذاری...</p>;
  }

  if (!user) {
    return <p className="text-center mt-10 text-red-500">کاربر یافت نشد.</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      <Card title="اطلاعات حساب">
        <div className="text-lg">
          <p>نام: {user.name}</p>
          <p>ایمیل: {user.email}</p>
        </div>
      </Card>

      <Card title="آدرس‌های من">
        {user.addresses ? (
          user.addresses.map((address, index) => <p key={index}>{address}</p>)
        ) : (
          <p>آدرسی یافت نشد.</p>
        )}
      </Card>

      <Card title="پرداخت‌ها">
        {user.payments ? (
          user.payments.map((payment, index) => <p key={index}>پرداخت: {payment.amount} تومان</p>)
        ) : (
          <p>پرداختی یافت نشد.</p>
        )}
      </Card>

      <Card title="سفارش‌های من">
        <p className="text-2xl font-bold">{user.orders?.length || 0}</p>
      </Card>
    </div>
  );
}
