import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-image" style={{ 
            background: '#475569', 
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            borderRadius: '20px'
          }}>
            <i className="fas fa-user" style={{ fontSize: '3rem', marginRight: '1rem' }}></i>
            {t('nav.about')}
          </div>
        </div>
        <div className="about-text">
          <h3>{t('about.heading')}</h3>
          <p>{t('about.text1')}</p>
          <p>{t('about.text2')}</p>
          <p>{t('about.text3')}</p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            {t('about.workTogether')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;