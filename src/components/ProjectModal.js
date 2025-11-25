import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

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
      setIsZoomed(false);
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
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, isZoomed]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Clean Header - Just Title */}
        <div className="project-modal-header">
          <h2>{project.title}</h2>
          <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="project-modal-body">
          {/* Gallery Section */}
          <div className="project-modal-gallery">
            <div className={`gallery-main ${isZoomed ? 'zoomed' : ''}`}>
              <img
                src={projectImages[currentImageIndex].url}
                alt={projectImages[currentImageIndex].alt}
                className="gallery-main-image"
                onClick={toggleZoom}
              />
              
              {/* Gallery Controls */}
              {projectImages.length > 1 && (
                <>
                  <button className="gallery-nav gallery-prev" onClick={prevImage} aria-label="Previous image">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="gallery-nav gallery-next" onClick={nextImage} aria-label="Next image">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* Simple Image Counter */}
                  <div className="gallery-indicator">
                    {currentImageIndex + 1} / {projectImages.length}
                  </div>
                </>
              )}
              
              {/* Zoom Button for Single Images */}
              {projectImages.length === 1 && (
                <button 
                  className="gallery-zoom" 
                  onClick={toggleZoom}
                  aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
                >
                  <i className={`fas ${isZoomed ? 'fa-search-minus' : 'fa-search-plus'}`}></i>
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {projectImages.length > 1 && (
              <div className="gallery-thumbnails">
                {projectImages.map((img, index) => (
                  <button
                    key={index}
                    className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsZoomed(false);
                    }}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={img.url} alt={img.alt} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="project-modal-info">
            {/* Description Section */}
            <div className="project-modal-description">
              <h3><i className="fas fa-info-circle"></i> {t('projects.description')}</h3>
              <p>{project.description}</p>
            </div>

            {/* Technologies Section */}
            <div className="project-modal-tech">
              <h3><i className="fas fa-code"></i> {t('projects.technologies') || 'Technologies'}</h3>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-tag"
                    style={{ '--tech-color': tech.color || '#2563eb' }}
                  >
                    <i className={`${tech.icon} tech-icon`}></i>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="project-modal-links">
              {project.showDemoLink !== false && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn primary"
                >
                  <i className="fas fa-external-link-alt"></i>
                  {t('projects.liveDemo')}
                </a>
              )}
              {project.showCodeLink !== false && (
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn secondary"
                >
                  <i className="fab fa-github"></i>
                  {t('projects.sourceCode')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;