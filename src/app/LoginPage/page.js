'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {useAuth} from "@/context/AuthContext"
import { useContext,useEffect } from "react";
import { MyLanguage } from "@/context/myLanguage";

export default function LoginPage() {
  const {setmyUser}=useAuth();
  const [identifier, setIdentifier] = useState(''); // می‌تواند ایمیل یا شماره تماس باشد
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { language } = useContext(MyLanguage);
 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // بررسی ورود با ایمیل یا شماره تماس
      const isEmail = identifier.includes('@'); // اگر شامل @ باشد، یعنی ایمیل است
      const queryParam = isEmail ? `email=${identifier}` : `phone=${identifier}`;

      const response = await fetch(`http://localhost:3000/user?${queryParam}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];

        localStorage.setItem('userId', user.id);
        localStorage.setItem('role', user.role);
        

        if (user.role === 'admin') {
          router.push('/dashbordAdmin9876');
          setmyUser(1)
        } else {
          router.push('/UserDashboard');
          setmyUser(1)
          
        }
      } else {
        setError('ایمیل / شماره تماس یا رمز عبور نادرست است.');
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
        {
          language==="en" ?
          <h2 className="text-2xl font-bold mb-6 text-center">Login to user account</h2>:
          <h2 className="text-2xl font-bold mb-6 text-center">وارد حساب کاربری شوید</h2>



        }
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <div>
             <div className='text-left'>
              {
                language==="en" ?
                <label className="block text-gray-700">Email or contact number</label>:
                <div className='text-right'>
                                  <label className="block text-gray-700">ایمیل یا شماره تماس</label>

                </div>


              }

             </div>
             {
              language==="en" ?     <input 
              type="text" 
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Email or contact number" 
            />:
            <input 
            type="text" 
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="text-right w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="ایمیل یا شماره تماس" 
          />
             }
        
          </div>
          <div>
            <div className='text-left'>
              {
                language==="en" ?
                <label className="block text-gray-700">password</label>:
                <div className='text-right'>
                  <label className="block text-gray-700">رمز عبور</label>
                </div>
                


              }
            </div>

            {
              language==="en" ?
              <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="******" 
            />:
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-right w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="******" 
          />
            }
           
          
          </div>
          {
            language==="en" ?
            <button 
            type="submit" 
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white py-2 rounded-lg hover:bg-blue-600 transition`}
          >
            {loading ? 'در حال ورود...' : ''}
            Login
          </button>:
            <button 
            type="submit" 
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white py-2 rounded-lg hover:bg-blue-600 transition`}
          >
            {loading ? 'در حال ورود...' : ''}
            ورود
          </button>
          }
        
        </form>
        <br />
        {
          language==="en" ?
          <div>
             <h2 className='text-center text-lg'>Don't have an account?</h2>
        <div className='text-center'>
          <a className='text-blue-500 underline' href="/SignupPage">Create an account</a>
        </div>
          </div>:
          <div>
             <h2 className='text-center text-lg'>حساب کاربری ندارید؟</h2>
        <div className='text-center'>
          <a className='text-blue-500 underline' href="/SignupPage">یک حساب کاربری ایجاد کنید</a>
        </div>
          </div>
        }
       
      </div>
    </div>
  );
}
