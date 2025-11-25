import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact-content">
        <div className="contact-message">
          <h3>{t('contact.getInTouch')}</h3>
          <p>{t('contact.messageText')}</p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>{t('contact.email')}</h3>
                <p>yassine.rafiq25@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>{t('contact.phone')}</h3>
                <p>+212 684 06 40 94</p>
              </div>
            </div>
            
            <div className="contact-item">
  <div className="contact-icon">
    <i className="fab fa-linkedin"></i>
  </div>
  <div>
    <h3>{t('contact.linkedin')}</h3>
    <a 
      href="https://www.linkedin.com/in/yassine-rafiq" 
      target="_blank" 
      rel="noopener noreferrer"
      className="contact-link"
    >
      linkedin.com/in/yassine-rafiq
    </a>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;