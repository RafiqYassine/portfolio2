import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/rafiqyassine" className="social-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/yourprofile" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>&copy; 2024 Yassine Rafiq. {t('footer.rights')}</p>
      <p>{t('footer.builtWith')}</p>
    </footer>
  );
};

export default Footer;