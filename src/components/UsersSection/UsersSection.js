export default function UsersSection() {
    return (
      <section id="users" className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">مدیریت کاربران</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">نام کاربر</th>
                <th className="p-2">ایمیل</th>
                <th className="p-2">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center">
                <td className="p-2">کاربر ۱</td>
                <td className="p-2">user1@example.com</td>
                <td className="p-2">
                  <button className="text-red-500 hover:text-red-700">مسدود کردن</button>
                </td>
              </tr>
              <tr className="border-b text-center">
                <td className="p-2">کاربر ۲</td>
                <td className="p-2">user2@example.com</td>
                <td className="p-2">
                  <button className="text-red-500 hover:text-red-700">مسدود کردن</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }