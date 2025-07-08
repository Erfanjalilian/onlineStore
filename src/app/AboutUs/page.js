'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen py-16 px-4 md:px-20">
      {/* هدر */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">درباره ما</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          ما یک تیم حرفه‌ای و خلاق هستیم که با استفاده از تکنولوژی‌های روز دنیا، بهترین راه‌حل‌های دیجیتال را برای رشد کسب‌وکارها ارائه می‌دهیم. تمرکز ما بر نوآوری، کیفیت و رضایت مشتریان است.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-2">
          از سال ۱۳۹۵ فعالیت خود را آغاز کردیم و تا امروز با بیش از ۱۰۰ پروژه موفق در حوزه‌های طراحی سایت، فروشگاه اینترنتی، اپلیکیشن موبایل و دیجیتال مارکتینگ، همراه مشتریان‌مان بوده‌ایم.
        </p>
      </motion.div>

      {/* خدمات */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-400 hover:shadow-blue-200 transition-shadow duration-300">
          <h3 className="text-xl font-bold text-blue-600 mb-2">طراحی سایت و فروشگاه</h3>
          <p className="text-gray-600">طراحی انواع وب‌سایت شرکتی، فروشگاهی و شخصی با جدیدترین متدهای UI/UX و پیاده‌سازی ریسپانسیو.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-400 hover:shadow-blue-200 transition-shadow duration-300">
          <h3 className="text-xl font-bold text-blue-600 mb-2">اپلیکیشن موبایل</h3>
          <p className="text-gray-600">توسعه اپلیکیشن‌های اندروید و iOS با تکنولوژی‌های مدرن و تجربه کاربری عالی.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-400 hover:shadow-blue-200 transition-shadow duration-300">
          <h3 className="text-xl font-bold text-blue-600 mb-2">دیجیتال مارکتینگ</h3>
          <p className="text-gray-600">ارائه خدمات سئو، تبلیغات آنلاین، تولید محتوا و مدیریت شبکه‌های اجتماعی برای رشد کسب‌وکار شما.</p>
        </div>
      </motion.div>

      {/* تجربه و مزیت */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md border-l-4 border-blue-400">
          <h3 className="text-lg font-bold text-blue-700 mb-2">تجربه و تخصص</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
            <li>بیش از ۸ سال سابقه در حوزه فناوری اطلاعات</li>
            <li>تیم متخصص و متعهد در زمینه‌های مختلف</li>
            <li>پشتیبانی و مشاوره رایگان برای مشتریان</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md border-l-4 border-blue-400">
          <h3 className="text-lg font-bold text-blue-700 mb-2">مزیت رقابتی ما</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
            <li>تعهد به کیفیت و تحویل به‌موقع پروژه‌ها</li>
            <li>نوآوری و استفاده از تکنولوژی‌های روز</li>
            <li>رضایت و اعتماد مشتریان اولویت ماست</li>
          </ul>
        </div>
      </motion.div>

      {/* مشتریان */}
      <motion.div
        className="max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-400">
          <h3 className="text-xl font-bold text-blue-600 mb-4">برخی از مشتریان ما</h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">شرکت الف</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">فروشگاه ب</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">استارتاپ ج</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">مجموعه د</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">و ...</span>
          </div>
        </div>
      </motion.div>

      {/* تماس با ما */}
      <motion.div
        className="max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-50 p-8 rounded-2xl shadow-md border-l-4 border-blue-400 text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">تماس با ما</h3>
          <p className="text-gray-700 mb-2">برای مشاوره رایگان و دریافت خدمات با ما در ارتباط باشید:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <span className="text-blue-700 font-semibold">ایمیل: info@yourcompany.com</span>
            <span className="text-blue-700 font-semibold">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
