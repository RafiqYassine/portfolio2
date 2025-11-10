import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use project images from project data, or fallback to placeholder if no images provided
  const projectImages = project.images && project.images.length > 0
    ? project.images.map((img, index) => ({
        url: img,
        alt: `${project.title} - Image ${index + 1}`
      }))
    : [
        { 
          url: `https://via.placeholder.com/800x500/2563eb/ffffff?text=${encodeURIComponent(project.title)}`, 
          alt: project.title 
        }
      ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  if (!isOpen) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div className="project-modal-header">
          <h2>{project.title}</h2>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-gallery">
            <div className="gallery-main">
              <img
                src={projectImages[currentImageIndex].url}
                alt={projectImages[currentImageIndex].alt}
                className="gallery-main-image"
              />
              {projectImages.length > 1 && (
                <>
                  <button className="gallery-nav gallery-prev" onClick={prevImage} aria-label="Previous image">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="gallery-nav gallery-next" onClick={nextImage} aria-label="Next image">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <div className="gallery-indicator">
                    {currentImageIndex + 1} / {projectImages.length}
                  </div>
                </>
              )}
            </div>
            {projectImages.length > 1 && (
              <div className="gallery-thumbnails">
                {projectImages.map((img, index) => (
                  <button
                    key={index}
                    className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={img.url} alt={img.alt} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="project-modal-info">
            <div className="project-modal-description">
              <h3><i className="fas fa-info-circle"></i> {t('projects.description') || 'Description'}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-modal-tech">
              <h3><i className="fas fa-code"></i> {t('projects.technologies') || 'Technologies'}</h3>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-modal-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
                <i className="fas fa-external-link-alt"></i>
                {t('projects.liveDemo')}
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
                <i className="fab fa-github"></i>
                {t('projects.sourceCode')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

