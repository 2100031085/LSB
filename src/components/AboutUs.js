import React from 'react';
import '../App.css';
import NavigationButtons from './NavigationButtons';
import youtubeIcon from '../images/youtube-icon1.jpg';
import instagramIcon from '../images/instagram-icon.png';
import telegramIcon from '../images/telegram-icon.jpg';
import whatsappIcon from '../images/whatsapp-icon.png';
import logoImage from '../images/channel-logo.png'; // Import your logo image
import emailIcon from '../images/email-icon.png';
import phoneIcon from '../images/phone-icon.png'; 
import qrCodeImage from '../images/qr-code.png'; // Import QR code image

const AboutUs = () => {
  return (
    <div>
      <section className="section gold">
        <h1 className="gold-heading">TRIOGURU</h1>
      </section>

      <section className="section black">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <NavigationButtons />
        </div>
      </section>

      <section className="section white">
        <h1 className="white-heading">ABOUT US</h1>
        <div className="black-box">
          <h4>Welcome to TRIO GURU!</h4>
          <p>We understand the challenges that students face during their academic journey. We've experienced the ups and downs of education and have personally grappled with the struggle to find the right resources and guidance to succeed.</p>
          <p>Our mission is to assist students from all walks of life. We believe that quality education and support should be accessible to everyone. At Trio Guru, we are dedicated to providing a helping hand to students.</p>
          <p>We're committed to delivering precise concepts and content that align with what's tested in exams. Our educational materials, tutorials, and guidance are designed to help you excel academically.</p>
          <p>Our goal is to provide you with the knowledge you need to succeed in your exams. Join us on this journey to enhance your learning, overcome challenges, and excel in your studies with a focus on the exact concepts you'll encounter in exams.</p>
          <p>With the right guidance and resources, we believe that every student can thrive academically. Thank you for being a part of our community. Feel free to like, subscribe, and share our channel, and together, we can make a positive impact on the educational journey of students.</p>
        </div>
      </section>

      <section className="section gold bottom-gold-section">
        <div className="bottom-section-content">
          <div className="bottom-section-item">
            <h2 className="underline-heading">Contact Us</h2>
            <p><img src={emailIcon} alt="Email" className="small-icon" /> trioguru@gmail.com</p>
            <p><img src={phoneIcon} alt="Phone" className="small-icon" /> +91 984XXXXX70</p>
          </div>
          <div className="bottom-section-item">
            <h2 className="underline-heading">Follow Us</h2>
            <div className="icon-container">
              <img src={youtubeIcon} alt="Youtube" className="icon" />
              <img src={whatsappIcon} alt="WhatsApp" className="icon" />
              <img src={instagramIcon} alt="Instagram" className="icon" />
              <img src={telegramIcon} alt="Telegram" className="icon" />
            </div>
          </div>
          <div className="bottom-section-item">
            <h2 className="underline-heading">Support Us</h2>
            <p><img src={qrCodeImage} alt="QR Code" className="qr-code" /></p>
          </div>
        </div>
      </section>
    </div>
  );
};
  
export default AboutUs;
