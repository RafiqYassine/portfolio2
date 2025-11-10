import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#home" className="logo" onClick={handleNavClick}>Yassine Rafiq</a>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} onClick={handleNavClick}>
          <li><a href="#home" onClick={handleNavClick}>{t('nav.home')}</a></li>
          <li><a href="#about" onClick={handleNavClick}>{t('nav.about')}</a></li>
          <li><a href="#skills" onClick={handleNavClick}>{t('nav.skills')}</a></li>
          <li><a href="#projects" onClick={handleNavClick}>{t('nav.projects')}</a></li>
          <li><a href="#cv" onClick={handleNavClick}>{t('nav.cv')}</a></li>
          <li><a href="#contact" onClick={handleNavClick}>{t('nav.contact')}</a></li>
          <li>
            <button 
              onClick={toggleLanguage} 
              className="language-btn"
              aria-label={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;