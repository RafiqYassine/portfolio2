import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillsData = {
    frontend: [
      'HTML/CSS',
      'JavaScript',
      'React',
      'Responsive Design'
    ],
    backend: [
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs'
    ],
    tools: [
      'Git & GitHub',
      'VS Code',
      'Figma',
      'Netlify'
    ]
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t('skills.title')}</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><i className="fas fa-palette"></i> {t('skills.frontend')}</h3>
          <ul className="skill-list">
            {skillsData.frontend.map((skill, index) => (
              <li key={index}>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3><i className="fas fa-server"></i> {t('skills.backend')}</h3>
          <ul className="skill-list">
            {skillsData.backend.map((skill, index) => (
              <li key={index}>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3><i className="fas fa-tools"></i> {t('skills.tools')}</h3>
          <ul className="skill-list">
            {skillsData.tools.map((skill, index) => (
              <li key={index}>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;