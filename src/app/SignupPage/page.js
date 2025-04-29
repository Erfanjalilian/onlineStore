'use client';

import { useState } from 'react';

export default function SignupPage() {
  // وضعیت‌ها برای ورودی‌ها و خطاها
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // اضافه شدن فیلد شماره تماس
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ارسال اطلاعات به API
  const handleSignup = async (e) => {
    e.preventDefault();

    // بررسی همخوانی رمز عبور
    if (password !== confirmPassword) {
      setError('رمز عبور و تکرار آن یکسان نیستند.');
      return;
    }

    // شروع به لود کردن داده‌ها
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://6810ff2827f2fdac24139dec.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone, // ارسال شماره تماس به API
          password,
          role: "user", // مقدار ثابت برای نقش کاربر
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        window.location.href = '/LoginPage';
        alert('ثبت نام با موفقیت انجام شد لطفا در سایت لاگین کنید');
      } else {
        setError(data.error || 'مشکلی پیش آمده است.');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">ایجاد حساب کاربری</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="شماره تماس"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white p-2 rounded-md hover:bg-blue-600`}
          >
            {loading ? 'در حال ثبت‌نام...' : 'ثبت نام'}
          </button>
        </form>
      </div>
    </div>
  );
}
