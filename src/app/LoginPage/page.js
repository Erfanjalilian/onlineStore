'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/user?email=${email}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0]; // دریافت اولین کاربر (چون ایمیل منحصربه‌فرد است)

        // ذخیره فقط `userId` و `role` در localStorage
        localStorage.setItem('userId', user.id);
        localStorage.setItem('role', user.role);  // نقش کاربر را ذخیره می‌کنیم

        // هدایت به صفحه‌ی مناسب بر اساس نقش
        if (user.role === 'admin') {
          router.push('/dashbordAdmin9876'); // اگر مدیر است، به داشبورد مدیریت هدایت می‌شود
        } else {
          router.push('/UserDashboard'); // اگر کاربر عادی است، به داشبورد کاربری هدایت می‌شود
        }
      } else {
        setError('ایمیل یا رمز عبور نادرست است.');
      }
    } catch (err) {
      setError('مشکلی پیش آمده است. دوباره امتحان کنید.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">ورود به حساب کاربری</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <div>
            <label className="block text-gray-700">ایمیل</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="example@email.com" 
            />
          </div>
          <div>
            <label className="block text-gray-700">رمز عبور</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="******" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white py-2 rounded-lg hover:bg-blue-600 transition`}
          >
            {loading ? 'در حال ورود...' : 'ورود'}
          </button>
        </form>
        <br />
         <h2 className='text-center text-lg'>حساب کابری نداری ؟</h2>
         <div className='text-center'>
           <a className='text-blue-500 underline' href="/SignupPage">ایجاد حساب کاربری</a>
         </div>
      </div>
     
    </div>
  );
}
