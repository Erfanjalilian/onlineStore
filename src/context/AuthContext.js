
"use client"
import React, { createContext, useState, useContext } from 'react';

// ایجاد کانتکس
const AuthContext = createContext();

// کامپوننت Provider برای کانتکس
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // برای ذخیره اطلاعات کاربر
  const [token, setToken] = useState(null); // برای ذخیره توکن

  // ثبت‌نام کاربر
  const signup = async (username, password) => {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 201) {
      setUser(data);
    } else {
      alert(data.error);
    }
  };

  // ورود کاربر
  const login = async (username, password) => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setToken(data.token);
      setUser({ username });
    } else {
      alert(data.error);
    }
  };

  // خروج از حساب کاربری
  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook برای استفاده از کانتکس در کامپوننت‌ها
export const useAuth = () => {
  return useContext(AuthContext);
};
