
"use client"


import { useContext, useState, useEffect } from "react";
import { MyLanguage } from "../../context/myLanguage";

import React from 'react';

const Contact = () => {
  const { language } = useContext(MyLanguage);
  return (
    <div className="contact-container">
      <div className="hero-section">
        {
          language==="en" ?  <h1 className="title">
contact us</h1>:
          <h1 className="title">تماس با ما</h1>
        }
        {
          language==="en" ? <p className="subtitle">
          We would love to hear from you! If you have any questions, please contact us using the form below.
        </p>:
        <p className="subtitle">
        خوشحال می‌شویم از شما بشنویم! هر سوالی دارید، از طریق فرم زیر با ما در ارتباط باشید.
      </p>
        }
       
        
      </div>

      <div className="contact-info-section">
        {
          language==="en" ?  <h2 className="section-title">
Contact information</h2>:
          <h2 className="section-title">اطلاعات تماس</h2>
        }
       
        <div className="contact-info">
          <div className="info-item">
            {
              language==="en" ?   <h3 className="info-title">Email</h3>:
              <h3 className="info-title">ایمیل</h3>
            }
          
            <p className="info-text">info@yourstore.com</p>
          </div>
          <div className="info-item">
            {
              language==="en" ?<h3 className="info-title">phone</h3>:
              <h3 className="info-title">تلفن</h3>
            }
            
            <p className="info-text">+98 21 1234 5678</p>
          </div>
          <div className="info-item">
            {
              language==="en" ?  <h3 className="info-title">address</h3>:
              <h3 className="info-title">آدرس</h3>
            }
           
            <p className="info-text">تهران، ایران</p>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        {
          language==="en" ? <h2 className="section-title">contact form</h2>:
          <h2 className="section-title">فرم تماس</h2>
        }
        
        <form className="contact-form">
          <div className="form-group">
            {
              language==="en" ? <div className="text-left w-full">
              <label htmlFor="name" className="form-label">name</label>
              <input type="text" id="name" className="form-input" placeholder="Enter your name." required />


         </div>:
         <div className="text-right w-full">
         <label htmlFor="name" className="form-label">نام</label>
         <input type="text" id="name" className="form-input text-right" placeholder="نام خود را وارد کنید" required />


    </div>
            }
            
          </div>
          <div className="form-group">
            {
              language==="en" ?  <div className="text-left w-full">
              <label htmlFor="email" className="form-label">email</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email." required />

  
              </div>:
               <div className="text-right w-full">
               <label htmlFor="email" className="form-label">ایمیل</label>
               <input type="email" id="email" className="form-input text-right" placeholder="ایمیل خود را وارد کنید" required />

   
               </div>
            }
           
          </div>
          <div className="form-group">
            {
              language==="en" ? <div className="text-left w-full">
              <label htmlFor="message" className="form-label">message</label>
              <textarea id="message" className="form-textarea" placeholder="Enter your message." required></textarea>

  
              </div>:
              <div className="text-right w-full">
              <label htmlFor="message" className="form-label">پیام</label>
              <textarea id="message" className="form-textarea text-right" placeholder="پیام خود را بنویسید" required></textarea>

  
              </div>
            }
            
          </div>
          {
            language==="en" ?          <button type="submit" className="submit-button">send message</button>:
            <button type="submit" className="submit-button">ارسال پیام</button>


          }
        </form>
      </div>
    </div>
  );
};

export default Contact;
