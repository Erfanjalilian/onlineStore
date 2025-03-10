"use client";
import { useEffect, useState } from "react";

const UsersSection = () => {
  const [users, setUsers] = useState([]); // ذخیره لیست کاربران
  const [loading, setLoading] = useState(true);

  // دریافت لیست کاربران از API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/user");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("خطا در دریافت کاربران:", error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // تابع برای مسدود کردن (حذف) کاربر
  const handleBlockUser = async (id) => {
    if (!confirm("آیا مطمئن هستید که می‌خواهید این کاربر را مسدود کنید؟")) return;

    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== id)); // حذف از UI
      } else {
        alert("خطایی در حذف کاربر رخ داده است.");
      }
    } catch (error) {
      alert("خطا در ارتباط با سرور.");
    }
  };

  if (loading) return <p className="text-center">در حال بارگذاری کاربران...</p>;

  return (
    <section id="users" className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-center">مدیریت کاربران</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">نام کاربر</th>
              <th className="p-2">ایمیل</th>
              <th className="p-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b text-center">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleBlockUser(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      مسدود کردن
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">
                  هیچ کاربری یافت نشد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersSection;
