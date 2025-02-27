'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

        // ذخیره فقط `userId` در localStorage
        localStorage.setItem('userId', user.id);

        // هدایت به داشبورد
        router.push('/UserDashboard');
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
      </div>
    </div>
  );
}
