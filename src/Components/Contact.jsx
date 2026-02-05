import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            // Using FormSubmit.co (No Key Required)
            const response = await fetch("https://formsubmit.co/ajax/jashk748@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Enquiry from Jash Portfolio",
                    _template: "table" // Makes the email look professional
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' });
                // Auto-hide success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                setStatus({ submitting: false, success: false, error: "Submission failed. Please try again." });
            }
        } catch (err) {
            setStatus({ submitting: false, success: false, error: "Something went wrong. Please check your connection." });
        }
    };

    return (
        <section id="contact" className="contact-section">
            {/* Top Status Bar (Full width border) */}
            <div className="contact-status-bar">
                <div className="contact-container">
                    <div className="status-bar-inner">
                        <div className="status-indicator">
                            <span className="dot pulse"></span>
                            <span>Available for freelance</span>
                        </div>
                        <button
                            className="back-to-top"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Back to top <span className="arrow-up">↑</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-main-flex">
                    {/* Left Side: Content */}
                    <div className="contact-content-left">
                        <h1 className="contact-main-title">
                            Let's create something extraordinary together<span className="dot-purple">.</span>
                        </h1>
                        <p className="contact-subtext">Let's make an impact</p>

                        <div className="social-pill-container">
                            <div className="social-pill">
                                <a href="https://www.behance.net/jaswanth1/projects" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="behance-text">Bē</span>
                                </a>
                                <a href="https://www.instagram.com/design_withjash?igsh=MWJobnR3NnN6bWc2bA==" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/jaswanth-k-37a9792a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="mailto:jashk748@gmail.com" className="social-link">
                                    <i className="bi bi-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="contact-form-card">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn-pill"
                                disabled={status.submitting}
                            >
                                {status.submitting ? "Sending..." : "Submit"}
                            </button>

                            {status.error && <p className="error-message">{status.error}</p>}
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Branding Area (Full width border) */}
            <footer className="contact-footer">
                <div className="contact-container">
                    <div className="footer-inner">
                        <div className="footer-left-brand">
                            <h2 className="footer-name">Jash</h2>
                            <p className="footer-copyright">Copyright @jaswanth2026</p>
                        </div>

                        <div className="footer-right-author">
                            <span className="created-by-text">Created by</span>
                            <div className="author-badge">
                                <img src="/images/about-profile.jpg" alt="Jaswanth" className="author-avatar" />
                                <span className="author-name">Jaswanth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Success Popup */}
            {status.success && (
                <div className="success-overlay">
                    <div className="success-popup">
                        <div className="success-icon">
                            <i className="bi bi-check-circle-fill"></i>
                        </div>
                        <h2>Successfully submitted!</h2>
                        <p>I'll get back to you soon. Thanks for reaching out!</p>
                        <button className="close-popup-btn" onClick={() => setStatus({ ...status, success: false })}>
                            Done
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
