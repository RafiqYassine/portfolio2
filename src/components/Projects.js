import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: t('projects.Didactiques.title'),
      description: t('projects.Didactiques.description'),
      tech: [
        { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
        { name: "React Router", icon: "fas fa-route", color: "#ca4245" },
        { name: "Axios", icon: "fas fa-network-wired", color: "#5a29e4" },
        { name: "CSS", icon: "fab fa-css3-alt", color: "#1572b6" },
        { name: "HTML", icon: "fab fa-html5", color: "#e34f26" },
        { name: "Laravel 12", icon: "fab fa-laravel", color: "#ff2d20" },
        { name: "Laravel Breeze", icon: "fab fa-laravel", color: "#ff2d20" },
        { name: "REST API", icon: "fas fa-plug", color: "#6cc24a" },
        { name: "MySQL", icon: "fas fa-database", color: "#4479a1" }
      ],
      images: [
        '/images/project1/interface1.png',
        '/images/project1/interface2.png',
        '/images/project1/interface3.png',
        '/images/project1/interface4.png'
      ],
      demoLink: "#",
      codeLink: "https://github.com/RafiqYassine/synthes",
      showDemoLink: false,
      showCodeLink: false,
      accentColor: "#2563eb",
      featured: false
    },

    {
      title: t('projects.Microservices.title'),
      description: t('projects.Microservices.description'),
      tech: [
        { name: "Node.js", icon: "fab fa-node", color: "#339933" },
        { name: "Express.js", icon: "fas fa-server", color: "#000000" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
        { name: "Mongoose", icon: "fas fa-leaf", color: "#47a248" },
        { name: "REST APIs", icon: "fas fa-plug", color: "#6cc24a" },
        { name: "JWT Authentication", icon: "fas fa-key", color: "#d4af37" },
        { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
        { name: "Docker Compose", icon: "fab fa-docker", color: "#2496ed" },
        { name: "HTML", icon: "fab fa-html5", color: "#e34f26" },
        { name: "CSS", icon: "fab fa-css3-alt", color: "#1572b6" },
        { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" }
      ],
      images: [
        '/images/nodejs/image1.png',
        '/images/nodejs/image2.png',
        '/images/nodejs/image3.png',
        '/images/nodejs/image4.png',
        '/images/nodejs/image5.png'
      ],
      demoLink: "#",
      codeLink: "https://github.com/RafiqYassine/project-nod.js-microservice.git",
      showDemoLink: false,
      showCodeLink: true,
      accentColor: "#10b981",
      featured: false
    },
    {
      title: t('projects.Plannings.title'),
      description: t('projects.Plannings.description'),
      tech: [
        { name: "Laravel", icon: "fab fa-laravel", color: "#ff2d20" },
        { name: "Laravel Breeze", icon: "fab fa-laravel", color: "#ff2d20" },
        { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
        { name: "Git & GitHub", icon: "fab fa-github", color: "#181717" },
        { name: "Cron / Laravel Scheduler", icon: "fas fa-clock", color: "#f59e0b" }
      ],
      images: [
        '/images/Plannings/image1.png',
        '/images/Plannings/image2.png',
        '/images/Plannings/image3.png',
        '/images/Plannings/image4.png',
        '/images/Plannings/image5.png',
        '/images/Plannings/image6.png',
        '/images/Plannings/image7.png',
        '/images/Plannings/image8.png',
        '/images/Plannings/image9.png',
        '/images/Plannings/image10.png',
      ],
      demoLink: "#",
      codeLink: "",
      showDemoLink: false,
      showCodeLink: false,
      accentColor: "#f59e0b"
    }, 
    {
      title: t('projects.Automated.title'),
      description: t('projects.Automated.description'),
      tech: [
        { name: "Google Apps Script", icon: "fas fa-code", color: "#4285f4" },
        { name: "Google Forms", icon: "far fa-file-alt", color: "#34a853" },
        { name: "Google Drive API", icon: "fas fa-cloud", color: "#ea4335" },
        { name: "Gmail API", icon: "fas fa-envelope-open-text", color: "#fbbc05" }
      ],
      images: [
        '/images/form/code.png',
        '/images/form/temp.png'
      ],
      demoLink: "#",
      codeLink: "https://github.com/RafiqYassine/custom-google-form-pdf-automation",
      showDemoLink: false,
      showCodeLink: true,
      accentColor: "#8b5cf6"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = projectsRef.current?.querySelectorAll('.project-card');
    projectElements?.forEach((el, index) => {
      el.dataset.index = index;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section projects-section" ref={projectsRef}>
      <div className="projects-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <h2 className="section-title">{t('projects.title')}</h2>
      <p className="section-subtitle">Discover my latest creations and technical solutions</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${visibleProjects.includes(index) ? 'visible' : ''} ${
              project.featured ? 'featured' : ''
            }`}
            style={{ '--accent-color': project.accentColor }}
            onClick={() => openModal(project)}
          >
            <div className="project-glow"></div>
            <div className="project-badge">
              {project.featured && <span className="featured-badge">Featured</span>}
              <span className="project-type">{project.tech[0]?.name}</span>
            </div>
            
            <div className="project-image-wrapper">
              {project.images && project.images.length > 0 ? (
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.images[0]})`,
                  }}
                >
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>{t('projects.viewProject') || 'Explore Project'}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className="project-image placeholder"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.accentColor}20 0%, ${project.accentColor}40 100%)` 
                  }}
                >
                  <i className="fas fa-code" style={{ color: project.accentColor }}></i>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>{t('projects.viewProject') || 'Explore Project'}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-actions">
                  <button className="project-action-btn" onClick={(e) => {
                    e.stopPropagation();
                    openModal(project);
                  }}>
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              
              <p className="project-preview">{project.description.substring(0, 120)}...</p>
              
              <div className="project-tech">
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="tech-tag"
                    style={{ '--tech-color': tech.color }}
                  >
                    <i className={`${tech.icon} tech-icon`}></i>
                    {tech.name}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tech-tag more">+{project.tech.length - 4}</span>
                )}
              </div>

              <div className="project-footer">
                <div className="project-links-preview">
                  {project.showDemoLink && (
                    <span className="link-indicator">
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </span>
                  )}
                  {project.showCodeLink && (
                    <span className="link-indicator">
                      <i className="fab fa-github"></i>
                      Source Code
                    </span>
                  )}
                </div>
                <div className="project-cta">
                  <span>View Details</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;