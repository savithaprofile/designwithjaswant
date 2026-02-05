import React from 'react';
import './About.css';

const About = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="about-header">About me</h2>

                <div className={`about-card ${isExpanded ? 'is-expanded' : ''}`}>
                    {/* Background Image Layer - Shared but styled differently in expanded */}
                    <div className="about-bg-wrapper">
                        <img
                            src="/images/about-profile.jpg"
                            alt="Jaswanth Profile"
                            className="about-bg-image"
                        />
                        <div className="about-overlay-gradient"></div>
                    </div>

                    {!isExpanded ? (
                        /* SUMMARY VIEW */
                        <>
                            <div className="about-badge-container">
                                <div className="about-glass-badge">
                                    <span className="badge-upper">Not Just</span>
                                    <span className="badge-script">Another Designer!</span>
                                </div>
                            </div>

                            <div className="about-content-right">
                                <p className="about-text">
                                    From shaping intuitive user experiences to refining every interaction, explore my journey, design philosophy, and the principles that guide my UI/UX thinking.
                                </p>
                                <button className="about-btn-white" onClick={() => setIsExpanded(true)}>
                                    About <span className="arrow">→</span>
                                </button>
                            </div>
                        </>
                    ) : (
                        /* DETAILED VIEW */
                        <div className="about-detail-view">
                            <h1 className="jash-title">JASH</h1>

                            <div className="about-detail-content">
                                <p>
                                    I'm Jaswanth, a passionate UI/UX Designer focused on creating intuitive, user-friendly, and visually engaging digital experiences. I specialize in transforming ideas into meaningful designs through user research, wireframing, and high-fidelity interfaces.
                                </p>
                                <p>
                                    I believe good design is not just how it looks — it's how it works. With a strong eye for detail and a problem-solving mindset, I design products that are easy to use, visually engaging, and conversion-focused.
                                </p>

                                <button className="about-btn-white back-btn" onClick={() => setIsExpanded(false)}>
                                    ← Back
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <h2 className="section-sub-header">Featured Works</h2>
            </div>
        </section>
    );
};

export default About;
