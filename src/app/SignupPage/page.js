'use client';

import { useState } from 'react';

export default function SignupPage() {
  // 1. تعریف وضعیت‌ها برای ورودی‌ها و خطاها
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 2. ارسال اطلاعات به API
  const handleSignup = async (e) => {
    e.preventDefault();

    // 3. بررسی همخوانی رمز عبور
    if (password !== confirmPassword) {
      setError('رمز عبور و تکرار آن یکسان نیستند.');
      return;
    }

    // 4. شروع به لود کردن داده‌ها
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.status === 201) {
        // موفقیت در ثبت‌نام
        alert('ثبت‌نام با موفقیت انجام شد!');
      } else {
        // ارور از سمت سرور
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
            value={fullName}
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
