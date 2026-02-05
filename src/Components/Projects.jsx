import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData, personalProjects } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const renderComingSoon = (type) => {
        if (type === 'blur') {
            return (
                <div className="coming-soon-overlay">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="coming-soon-icon">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" y1="2" x2="22" y2="22"></line>
                    </svg>
                    <span>Coming Soon</span>
                </div>
            );
        }
        return null;
    };

    return (
        <section id="project" className="projects-section">
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className={`project-card span-${project.span}`}>
                        <div className="project-header">
                            <span className="project-category">
                                <span className="brace">{'{'}</span>
                                <span className="category-text">{project.category}</span>
                                <span className="brace">{'}'}</span>
                            </span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                        </div>

                        <div className="project-image-container">
                            {project.comingSoon ? (
                                <>
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    {renderComingSoon(project.comingSoon.type)}
                                </>
                            ) : project.externalLink ? (
                                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </a>
                            ) : (
                                <Link to={`/project/${project.id}`}>
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="section-title personal-title">Personal Projects</h2>
            <div className="projects-grid">
                {personalProjects.map((project, index) => (
                    <div key={index} className={`project-card span-${project.span}`}>
                        <div className="project-header">
                            <span className="project-category">
                                <span className="brace">{'{'}</span>
                                <span className="category-text">{project.category}</span>
                                <span className="brace">{'}'}</span>
                            </span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                        </div>
                        <div className="project-image-container">
                            {project.externalLink ? (
                                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </a>
                            ) : (
                                <Link to={`/project/${project.id}`}>
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
