import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">پنل مدیریتی</h1>
      <nav>
        <ul>
          <li className="mb-3">
            <Link href="#products" className="block py-2 px-4 hover:bg-blue-700 rounded">
              مدیریت محصولات
            </Link>
          </li>
          <li className="mb-3">
            <Link href="dashbordAdmin9876/order" className="block py-2 px-4 hover:bg-blue-700 rounded">
              مدیریت سفارشات
            </Link>
          </li>
          <li className="mb-3">
            <Link href="#users" className="block py-2 px-4 hover:bg-blue-700 rounded">
              مدیریت کاربران
            </Link>
          </li>
          <li className="mb-3">
            <Link href="#settings" className="block py-2 px-4 hover:bg-blue-700 rounded">
              تنظیمات
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}