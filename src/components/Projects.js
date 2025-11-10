import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ============================================
     PROJECT CONTENT - ADD/EDIT YOUR PROJECTS HERE
     ============================================
     To add a new project, copy the structure below and fill in:
     - title: Project name
     - description: Full project description
     - tech: Array of technologies used
     - images: Array of image URLs (can be local paths or URLs)
     - demoLink: Link to live demo
     - codeLink: Link to source code (GitHub, etc.)
     ============================================ */
  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tech: ['React', 'CSS', 'JavaScript', 'Context API'],
      // Add your project images here - can be local paths or URLs
      images: [
        '/images/project1/education1.png',  // Replace with your actual image paths
        '/images/projects/ecommerce-2.jpg',
        '/images/projects/ecommerce-3.jpg'
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.description'),
      tech: ['JavaScript', 'API', 'CSS', 'HTML'],
      // Add your project images here
      images: [
        '/images/projects/weather-1.jpg',
        '/images/projects/weather-2.jpg'
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: t('projects.taskManager.title'),
      description: t('projects.taskManager.description'),
      tech: ['React', 'Local Storage', 'CSS'],
      // Add your project images here
      images: [
        '/images/projects/taskmanager-1.jpg',
        '/images/projects/taskmanager-2.jpg',
        '/images/projects/taskmanager-3.jpg'
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      tech: ['React', 'CSS', 'JavaScript'],
      // Add your project images here
      images: [
        '/images/projects/portfolio-1.jpg',
        '/images/projects/portfolio-2.jpg'
      ],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => openModal(project)}
          >
            <div className="project-image-wrapper">
              {project.images && project.images.length > 0 ? (
                <div 
                  className="project-image" 
                  style={{ 
                    backgroundImage: `url(${project.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="project-overlay">
                    <i className="fas fa-eye"></i>
                    <span>{t('projects.viewProject') || 'View Project'}</span>
                  </div>
                </div>
              ) : (
                <div className="project-image" style={{ background: `linear-gradient(135deg, #2563eb ${index * 20}%, #1e40af 100%)` }}>
                  <div className="project-overlay">
                    <i className="fas fa-eye"></i>
                    <span>{t('projects.viewProject') || 'View Project'}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-preview">{project.description.substring(0, 100)}...</p>
              <div className="project-tech">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
                {project.tech.length > 3 && (
                  <span className="tech-tag more">+{project.tech.length - 3}</span>
                )}
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