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

const Home = () => {
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
        <h1 className="white-heading">SUBSCRIBE AND FOLLOW</h1>
        <div className="links-container">
          <div className="link-item">
            <a href="https://www.youtube.com/channel/UCzPVAPTcSTX0McJOEaEPjVw" target="_blank" rel="noopener noreferrer" className="button">
              <img src={youtubeIcon} alt="YouTube" className="icon" /> <span>Tap to subscribe to our channel</span>
            </a>
          </div>
          <div className="link-item">
            <a href="https://www.instagram.com/trio_guru" target="_blank" rel="noopener noreferrer" className="button">
              <img src={instagramIcon} alt="Instagram" className="icon" /> <span>Tap to follow our account</span>
            </a>
          </div>
          <div className="link-item">
            <a href="https://t.me/trioguru" target="_blank" rel="noopener noreferrer" className="button">
              <img src={telegramIcon} alt="Telegram" className="icon" /> <span>Tap to join our channel</span>
            </a>
          </div>
          <div className="link-item">
            <a href="https://www.whatsapp.com/channel/0029VaFNSvM4CrfjGGMPb030" target="_blank" rel="noopener noreferrer" className="button">
              <img src={whatsappIcon} alt="WhatsApp" className="icon" /> <span>Tap to join our channel</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section gold bottom-gold-section">
  <div className="bottom-section-item">
    <h2 className="underline-heading">Contact Us</h2>
    <div className="contact-info">
      <img src={emailIcon} alt="Email" className="small-icon" />
      <p>trioguru@gmail.com</p>
    </div>
    <div className="contact-info">
      <img src={phoneIcon} alt="Phone" className="small-icon" />
      <p>+91 984XXXXX70</p>
    </div>
  </div>

  <div className="bottom-section-item">
    <h2 className="underline-heading">Follow Us</h2>
    <div className="icon-container">
      <div className="icon-row">
        <img src={youtubeIcon} alt="Youtube" className="icon" />
        <img src={instagramIcon} alt="Instagram" className="icon" />
      </div>
      <div className="icon-row">
        <img src={telegramIcon} alt="Telegram" className="icon" />
        <img src={whatsappIcon} alt="WhatsApp" className="icon" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
