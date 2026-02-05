import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section bg-dots">
            <div className="container hero-content">

                {/* Left Side: Text */}
                <div className="hero-text">
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        Available for work
                    </div>

                    <h1 className="hero-title">
                        Hi! I'm <span className="highlight-pill">Jaswanth</span>
                    </h1>

                    <div className="hero-subtitle">
                        <span>a</span>
                        <span className="purple-pill">UI/UX Designer</span>
                    </div>

                    <div className="hero-subtitle">
                        <span>from</span>
                        <span className="outline-pill">Chennai</span>
                    </div>

                    <p className="hero-description">
                        I design intuitive, user-centered digital experiences that balance business goals and user needs, crafting clean interfaces, meaningful interactions, and scalable design systems.
                    </p>

                    <a href="/Jaswanth-Resume.pdf" download="Jaswanth-Resume.pdf" className="btn-primary" style={{ textDecoration: 'none' }}>
                        Download Resume
                        <span className="btn-icon-circle">↓</span>
                    </a>
                </div>

                {/* Right Side: Image */}
                <div className="hero-image-container">
                    <div className="profile-card">
                        {/* Real Profile Image */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="/images/profile-new.png"
                                alt="Jaswanth Profile"
                                className="profile-img"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    mixBlendMode: 'normal'
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
