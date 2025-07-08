'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";

function Card({ title, children }) {
  return (
    <div className="shadow-xl border border-blue-100 rounded-2xl p-8 bg-white flex flex-col gap-4 hover:shadow-blue-200 transition-shadow duration-300 h-full">
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-2 text-blue-700 flex items-center gap-2">
        {title}
      </h2>
      <div className="flex flex-col gap-2 flex-1 h-full">{children}</div>
    </div>
  );
}

export default function UserDashboard() {
  const { logout, setmyUser } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      router.push('/login');
      return;
    }
    async function fetchUserData() {
      try {
        const response = await fetch(`https://6810ff2827f2fdac24139dec.mockapi.io/user/${userId}`);
        const userData = await response.json();
        setUser(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          phone: userData.phone || '',
          password: '',
        });
      } catch (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, [router]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    router.push('/LoginPage');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...user, ...formData };
      if (!formData.password) {
        delete updatedData.password;
      }
      const response = await fetch(`https://6810ff2827f2fdac24139dec.mockapi.io/user/${user.id}`, {
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
    return <p className="text-center mt-10 text-blue-600 text-xl animate-pulse">در حال بارگذاری...</p>;
  }
  if (!user) {
    return <p className="text-center mt-10 text-red-500 text-xl">کاربر یافت نشد.</p>;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pb-10">
      {/* هدر */}
      <div className="relative flex flex-col items-center justify-center h-56 md:h-64 bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 rounded-b-3xl shadow-lg mb-10 overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight mt-8">پنل کاربری</h1>
        <p className="mt-2 text-white/80 text-lg md:text-xl font-medium">اطلاعات حساب، سفارش‌ها و مدیریت حساب کاربری شما</p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-11/12 mx-auto">
        <Card title="اطلاعات حساب">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-full">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="نام" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="ایمیل" />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="شماره تماس" />
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="border border-blue-200 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="رمز عبور جدید (اختیاری)" />
              <div className="flex gap-2 mt-auto">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 font-bold">ذخیره تغییرات</button>
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-blue-700 p-2 rounded-lg hover:bg-gray-300 font-bold">انصراف</button>
              </div>
            </form>
          ) : (
            <div className="text-lg space-y-1 flex flex-col h-full">
              <p><span className="font-bold text-blue-700">نام:</span> {user.name}</p>
              <p><span className="font-bold text-blue-700">ایمیل:</span> {user.email}</p>
              <p><span className="font-bold text-blue-700">شماره تماس:</span> {user.phone || 'ثبت نشده'}</p>
              <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white p-2 rounded-lg mt-auto hover:bg-green-600 font-bold w-full">ویرایش اطلاعات</button>
            </div>
          )}
        </Card>
        <Card title="آدرس‌های من">
          <div className="flex flex-col h-full flex-1">
            {user.addresses?.length ? user.addresses.map((address, index) => <p key={index} className="text-gray-700">{address}</p>) : <p className="text-gray-400">آدرسی یافت نشد.</p>}
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 font-bold mt-auto w-full">مدیریت آدرس‌ها</button>
          </div>
        </Card>
        <Card title="پرداخت‌ها">
          <div className="flex flex-col h-full flex-1">
            {user.payments?.length ? user.payments.map((payment, index) => <p key={index} className="text-gray-700">پرداخت: {payment.amount} تومان</p>) : <p className="text-gray-400">پرداختی یافت نشد.</p>}
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 font-bold mt-auto w-full">مشاهده جزئیات</button>
          </div>
        </Card>
        <Card title="سفارش‌های من">
          <div className="flex flex-col h-full flex-1 justify-between">
            <p className="text-2xl font-bold text-blue-700">{user.orders?.length || 0}</p>
            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 font-bold mt-auto w-full">مشاهده سفارش‌ها</button>
          </div>
        </Card>
      </div>
      <div className='text-center mt-10'>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white rounded-xl hover:bg-red-600 py-3 px-10 font-bold text-lg shadow-lg transition"
        >
          خروج از حساب
        </button>
      </div>
    </div>
  );
}
