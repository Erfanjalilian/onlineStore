'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6">درباره ما</h2>
        <p className="text-lg text-gray-300">
          ما یک تیم حرفه‌ای هستیم که با استفاده از تکنولوژی‌های مدرن، بهترین راه‌حل‌های دیجیتال را ارائه می‌دهیم. تمرکز ما بر نوآوری، کیفیت و رضایت مشتریان است.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400">ماموریت ما</h3>
          <p className="text-gray-400 mt-2">ارائه خدمات دیجیتال با بالاترین کیفیت و نوآوری مستمر.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400">چشم‌انداز</h3>
          <p className="text-gray-400 mt-2">تبدیل شدن به یکی از برترین شرکت‌های فناوری اطلاعات در سطح بین‌المللی.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400">ارزش‌ها</h3>
          <p className="text-gray-400 mt-2">تعهد، نوآوری، شفافیت و رضایت مشتریان.</p>
        </div>
      </motion.div>
    </section>
  );
}
