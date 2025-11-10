import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <div className="hero-subtitle">{t('hero.subtitle')}</div>
        <p className="hero-description">
          {t('hero.description')}
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-code"></i>
            {t('hero.viewWork')}
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-paper-plane"></i>
            {t('hero.getInTouch')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;