import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
      { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
      { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: '#37bc9b' }
    ],
    backend: [
      { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
      { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
      { name: 'Express', icon: 'fas fa-server', color: '#000000' },
      { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
      { name: 'REST APIs', icon: 'fas fa-network-wired', color: '#ff6b6b' }
    ],
    tools: [
      { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: '#f05032' },
      { name: 'VS Code', icon: 'fas fa-code', color: '#007acc' },
      { name: 'Netlify', icon: 'fas fa-cloud-upload-alt', color: '#00c7b7' },
      { name: 'UML', icon: 'fas fa-project-diagram', color: '#8a2be2' },
      { name: 'Agile / Scrum', icon: 'fas fa-sync-alt', color: '#ffa500' }
    ]
  };

  const categoryIcons = {
    frontend: 'fas fa-palette',
    backend: 'fas fa-server',
    tools: 'fas fa-tools'
  };

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">{t('skills.title')}</h2>
      
      {/* Category Navigation */}
      <div className="skills-category-nav">
        {Object.keys(skillsData).map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            <i className={categoryIcons[category]}></i>
            {t(`skills.${category}`)}
          </button>
        ))}
      </div>

      {/* Skills Galaxy Visualization - Horizontal Movement */}
      <div className="skills-galaxy-container">
        <div className="galaxy-track">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="galaxy-planet"
              style={{
                '--skill-color': skill.color,
                '--planet-delay': `${index * 2}s`,
                '--planet-duration': `${15 + (index % 5)}s`
              }}
            >
              <div className="planet-core">
                <i className={skill.icon}></i>
              </div>
              <div className="planet-glow"></div>
            </div>
          ))}
        </div>
        <div className="galaxy-overlay-left"></div>
        <div className="galaxy-overlay-right"></div>
      </div>

      {/* Skills Flow */}
      <div className="skills-flow">
        <div className="flow-container">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="flow-item"
              style={{ 
                '--skill-color': skill.color,
                '--flow-delay': `${index * 0.2}s`
              }}
            >
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;