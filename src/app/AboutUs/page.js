// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1 className="title">درباره فروشگاه ما</h1>
        <p className="subtitle">
          ما در <span className="font-bold">[نام فروشگاه]</span> بهترین و جدیدترین مدل‌های لباس را برای شما انتخاب کرده‌ایم تا تجربه‌ای منحصر به فرد از خرید آنلاین داشته باشید.
        </p>
      </div>

      <div className="story-section">
        <h2 className="section-title">داستان ما</h2>
        <p className="story-text">
          فروشگاه ما با هدف ارائه لباس‌های با کیفیت و مدرن با قیمت مناسب در سال [سال تاسیس] راه‌اندازی شد. ما به دنبال ایجاد تجربه‌ای راحت و شیک برای مشتریان خود هستیم و همیشه تلاش می‌کنیم که جدیدترین ترندهای مد را به شما ارائه دهیم.
        </p>
      </div>

      <div className="team-section">
        <h2 className="section-title">تیم ما</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://rcrdc.iums.ac.ir/uploads/203/2023/Jan/23/anvari.jpg" alt="Member 1" className="team-image" />
            <h3 className="team-name">علی احمدی</h3>
            <p className="team-role">مدیرعامل</p>
          </div>
          <div className="team-member">
            <img src="https://rcrdc.iums.ac.ir/uploads/203/2023/Jan/23/goodarzi.jpg" alt="Member 2" className="team-image" />
            <h3 className="team-name">مریم رضا</h3>
            <p className="team-role">طراح لباس</p>
          </div>
          <div className="team-member">
            <img src="https://rcrdc.iums.ac.ir/uploads/203/2023/Jan/23/fallahpoor.jpg" alt="Member 3" className="team-image" />
            <h3 className="team-name">سینا کریمی</h3>
            <p className="team-role">توسعه‌دهنده وب</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
