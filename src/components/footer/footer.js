const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* بخش اول */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-right">درباره ما</h2>
          <p className="text-gray-400 text-sm text-right">
            ما بهترین محصولات را با قیمت مناسب ارائه می‌دهیم. هدف ما رضایت شماست.
          </p>
        </div>
        
        {/* بخش دوم */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-right">لینک‌های مفید</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="text-right"><a href="#" className="hover:text-white">صفحه اصلی</a></li>
            <li className="text-right"><a href="#" className="hover:text-white">محصولات</a></li>
            <li className="text-right"><a href="#" className="hover:text-white">تماس با ما</a></li>
            <li className="text-right"><a href="#" className="hover:text-white">سوالات متداول</a></li>
          </ul>
        </div>

        {/* بخش سوم */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-right">تماس با ما</h2>
          <p className="text-gray-400 text-sm text-right">ایمیل: support@example.com</p>
          <p className="text-gray-400 text-sm text-right">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 ml-auto hover:text-white">🔵 فیسبوک</a>
            <a href="#" className="text-gray-400 hover:text-white">📷 اینستاگرام</a>
            <a href="#" className="text-gray-400 hover:text-white">🐦 توییتر</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4 text-center">
        © {new Date().getFullYear()} تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
