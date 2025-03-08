
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="hero-section">
        <h1 className="title">تماس با ما</h1>
        <p className="subtitle">
          خوشحال می‌شویم از شما بشنویم! هر سوالی دارید، از طریق فرم زیر با ما در ارتباط باشید.
        </p>
      </div>

      <div className="contact-info-section">
        <h2 className="section-title">اطلاعات تماس</h2>
        <div className="contact-info">
          <div className="info-item">
            <h3 className="info-title">ایمیل</h3>
            <p className="info-text">info@yourstore.com</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">تلفن</h3>
            <p className="info-text">+98 21 1234 5678</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">آدرس</h3>
            <p className="info-text">تهران، ایران</p>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <h2 className="section-title">فرم تماس</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">نام</label>
            <input type="text" id="name" className="form-input" placeholder="نام خود را وارد کنید" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">ایمیل</label>
            <input type="email" id="email" className="form-input" placeholder="ایمیل خود را وارد کنید" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">پیام</label>
            <textarea id="message" className="form-textarea" placeholder="پیام خود را بنویسید" required></textarea>
          </div>
          <button type="submit" className="submit-button">ارسال پیام</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
