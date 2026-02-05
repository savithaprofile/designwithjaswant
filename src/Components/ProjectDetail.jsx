import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="project-detail-error">
                <h2>Project not found</h2>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    const { details } = project;

    // Project-specific visuals or defaults
    // Project-specific visuals or defaults
    const visuals = details.visuals;

    return (
        <div className={`project-detail-page ${details?.isDarkTheme ? 'dark-theme' : ''}`}>
            <header className="detail-header">
                <h1 className="detail-title">{project.title}</h1>
                {project.websiteUrl && (
                    <a href={project.websiteUrl} className="view-website-btn" target="_blank" rel="noopener noreferrer">
                        <span className="btn-icon">→</span>
                        View website
                    </a>
                )}
            </header>

            <div className="detail-hero-image">
                <img src={details?.heroImage || project.image} alt={project.title} />
            </div>

            {details && (
                <div className="detail-content">
                    <div className="detail-meta-grid">
                        <div className="meta-item">
                            <h3>Industry</h3>
                            <p>{details.industry}</p>
                        </div>
                        <div className="meta-item">
                            <h3>Date</h3>
                            <p>{details.date}</p>
                        </div>
                        <div className="meta-item">
                            <h3>Tools</h3>
                            <p>{details.tools}</p>
                        </div>
                    </div>

                    <section className="detail-section overview-section">
                        <h2>Project Overview</h2>
                        <p>{details.overview}</p>
                    </section>

                    <div className="problem-solution-grid">
                        <section className="detail-section">
                            <h2>Problem Statement</h2>
                            <ul className="detail-list">
                                {details.problem.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                        <section className="detail-section">
                            <h2>Solution</h2>
                            <ul className="detail-list solution-list">
                                {details.solution.map((item, i) => (
                                    typeof item === 'string' ? (
                                        <li key={i}>{item}</li>
                                    ) : (
                                        <li key={i} className="solution-item">
                                            <strong>{item.title}</strong>
                                            <span>{item.desc}</span>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </section>
                    </div>

                    <section className="detail-section design-process-section">
                        <h2>Design Process</h2>
                        <div className="design-process-flex">
                            <div className="process-steps">
                                {details.designProcessSteps && details.designProcessSteps.map((step, i) => (
                                    <div key={i} className="process-step">
                                        <h3>
                                            <span className="step-arrow">{'>'}</span> {step.title}
                                        </h3>
                                        <p>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                            {visuals && (
                                <div className="design-visuals">
                                    <div className="design-box typography" style={{
                                        background: `linear-gradient(153.75deg, ${visuals.colors.primary} -30.89%, #FFFFFF 74.66%)`
                                    }}>
                                        <div className="box-header">
                                            <h3 style={{ color: visuals.colors.text || '#1a1a1a' }}>Typography</h3>
                                        </div>
                                        <div className="typo-preview">
                                            <div className="main-font" style={{ color: visuals.colors.interColor || visuals.colors.text || '#1a1a1a' }}>{visuals.fonts[0]}</div>
                                            <div className="font-variants">
                                                <div className="variant">
                                                    <span className="variant-name" style={{ color: visuals.colors.text || '#1a1a1a' }}>Semibold</span>
                                                    <span className="alphabet" style={{ color: visuals.colors.text || '#4a4a4a' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                                                </div>
                                                <div className="variant">
                                                    <span className="variant-name" style={{ color: visuals.colors.text || '#1a1a1a' }}>Medium</span>
                                                    <span className="alphabet" style={{ color: visuals.colors.text || '#4a4a4a' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                                                </div>
                                                <div className="variant">
                                                    <span className="variant-name" style={{ color: visuals.colors.text || '#1a1a1a' }}>Regular</span>
                                                    <span className="alphabet" style={{ color: visuals.colors.text || '#4a4a4a' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                                                </div>
                                            </div>
                                            <div className="giant-aa" style={{ color: visuals.colors.text || visuals.colors.primary }}>Aa</div>
                                        </div>
                                    </div>
                                    <div className="design-box colors" style={{
                                        background: `linear-gradient(153.16deg, #FFFFFF 43.45%, ${visuals.colors.primary} 150.09%)`
                                    }}>
                                        <div className="box-header">
                                            <h3 style={{ color: visuals.colors.text || visuals.colors.primary }}>Colors</h3>
                                        </div>
                                        <div className="colors-grid">
                                            <div className="core-colors">
                                                <h4>Core Colors</h4>
                                                <div className="color-row">
                                                    <div className="color-info-box primary" style={{ backgroundColor: visuals.colors.primary }}>
                                                        <span className="label">Primary</span>
                                                        <span className="hex">{visuals.colors.primary}</span>
                                                    </div>
                                                    <div className="color-info-box secondary" style={{ backgroundColor: visuals.colors.secondary }}>
                                                        <span className="label">Secondary</span>
                                                        <span className="hex">{visuals.colors.secondary}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gradient-info">
                                                <h4>Gradient</h4>
                                                <div className="gradient-bar" style={{ background: visuals.colors.gradient }}>
                                                    <span className="hex-start">{visuals.colors.primary}</span>
                                                    <span className="hex-end">{visuals.colors.secondary}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {details.secondaryImage && (
                        <div className="detail-secondary-image" style={{ backgroundColor: details.secondaryImageBg || '#ffffff' }}>
                            <img src={details.secondaryImage} alt={`${project.title} Collage`} />
                        </div>
                    )}

                    <section className="detail-section key-features-section">
                        <h2>Key Features</h2>
                        <ul className="detail-list check-list">
                            {details.keyFeatures && details.keyFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
