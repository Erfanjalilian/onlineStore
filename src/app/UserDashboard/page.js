'use client';

import { useEffect, useState } from 'react';

function Card({ title, children }) {
  return (
    <div className="shadow-lg border rounded-lg p-6 bg-white flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      window.location.href = '/login';
      return;
    }

    async function fetchUserData() {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();
        setUser(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          phone: userData.phone || '',
          password: '', // مقدار پیش‌فرض برای رمز عبور
        });
      } catch (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = { ...user, ...formData };

      // اگر رمز عبور وارد نشده بود، آن را از داده‌های ارسال‌شده حذف کن
      if (!formData.password) {
        delete updatedData.password;
      }

      const response = await fetch(`http://localhost:3000/user/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        setIsEditing(false);
      } else {
        console.error('خطا در به‌روزرسانی اطلاعات');
      }
    } catch (error) {
      console.error('خطای شبکه:', error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">در حال بارگذاری...</p>;
  }

  if (!user) {
    return <p className="text-center mt-10 text-red-500">کاربر یافت نشد.</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 min-h-screen">
      <Card title="اطلاعات حساب">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded" placeholder="نام" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded" placeholder="ایمیل" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border p-2 rounded" placeholder="شماره تماس" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 rounded" placeholder="رمز عبور جدید (اختیاری)" />
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">ذخیره تغییرات</button>
              <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400">انصراف</button>
            </div>
          </form>
        ) : (
          <div className="text-lg">
            <p>نام: {user.name}</p>
            <p>ایمیل: {user.email}</p>
            <p>شماره تماس: {user.phone || 'ثبت نشده'}</p>
            <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white p-2 rounded mt-2 hover:bg-green-600">ویرایش اطلاعات</button>
          </div>
        )}
      </Card>

      <Card title="آدرس‌های من">
        {user.addresses?.length ? user.addresses.map((address, index) => <p key={index}>{address}</p>) : <p>آدرسی یافت نشد.</p>}
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">مدیریت آدرس‌ها</button>
      </Card>

      <Card title="پرداخت‌ها">
        {user.payments?.length ? user.payments.map((payment, index) => <p key={index}>پرداخت: {payment.amount} تومان</p>) : <p>پرداختی یافت نشد.</p>}
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">مشاهده جزئیات</button>
      </Card>

      <Card title="سفارش‌های من">
        <p className="text-2xl font-bold">{user.orders?.length || 0}</p>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">مشاهده سفارش‌ها</button>
      </Card>
    </div>
  );
}
