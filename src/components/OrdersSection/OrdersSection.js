export default function OrdersSection() {
    return (
      <section id="orders" className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">مدیریت سفارشات</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">شماره سفارش</th>
                <th className="p-2">تاریخ</th>
                <th className="p-2">وضعیت</th>
                <th className="p-2">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center">
                <td className="p-2">#۱۰۰۱</td>
                <td className="p-2">۱۴۰۲/۰۷/۱۵</td>
                <td className="p-2">ارسال شده</td>
                <td className="p-2">
                  <button className="text-blue-500 hover:text-blue-700">مشاهده</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }