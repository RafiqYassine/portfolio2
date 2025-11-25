import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CV = () => {
  const { t, language } = useLanguage();

  const cvLinks = {
    en: '/cv/Yassine_Rafiq_en.pdf',
    fr: '/cv/Yassine_Rafiq_fr.pdf',
  };

  const handleDownload = () => {
    window.open(cvLinks[language], '_blank');
  };

  const handleView = () => {
    window.open(cvLinks[language], '_blank');
  };

  return (
    <section id="cv" className="section">
      <h2 className="section-title">{t('cv.title')}</h2>
      <div className="cv-content">
        <div className="cv-actions">
          <div className="cv-buttons-container">
            <button onClick={handleDownload} className="btn btn-primary download-btn">
              <i className="fas fa-download"></i>
              {t('cv.download')} ({language.toUpperCase()})
            </button>
            <button onClick={handleView} className="btn btn-primary view-btn">
              <i className="fas fa-eye"></i>
              {language === 'en' ? 'View CV' : 'Voir CV'}
            </button>
          </div>
        </div>

        <div className="cv-preview">
          {/* Languages Section */}
          <div className="cv-section">
            <h3><i className="fas fa-language"></i> {t('cv.languages')}</h3>
            <div className="languages-list">
              <p><i className="fas fa-check-circle"></i> {t('cv.languagesList.arabic')}</p>
              <p><i className="fas fa-check-circle"></i> {t('cv.languagesList.french')}</p>
              <p><i className="fas fa-check-circle"></i> {t('cv.languagesList.english')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;