import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        'UX Design', 'UI Design', 'Interaction Design',
        'Information Architecture', 'User Research', 'User Flows',
        'Design Systems', 'Prototyping', 'Usability Testing'
    ];

    return (
        <section className="skills-section">
            <div className="container">
                <h2 className="skills-title">My Skills & Stacks</h2>

                <div className="skills-tags">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-pill">{skill}</span>
                    ))}
                </div>

                <div className="tools-grid">
                    {/* Figma Card - Highlighted */}
                    <div className="tool-card purple-card">
                        <div className="tool-icon tool-icon-figma">
                            <img src="/images/8b0ebfeeb83b4c29775cbb195ffc825af20248e4.png" alt="Figma" className="tool-logo figma-logo-img" />
                        </div>
                        <div className="tool-info">
                            <h3>Figma</h3>
                            <p>Designing structured user flows, scalable systems, and high fidelity interfaces that hold up in real use.</p>
                        </div>
                    </div>

                    {/* ChatGPT Card */}
                    <div className="tool-card">
                        <div className="tool-icon tool-icon-gpt">
                            <img src="/images/9ee17dbeb01f9872e86b8683f8ce5715b1fd6432.png" alt="ChatGPT" className="tool-logo" />
                        </div>
                        <div className="tool-info">
                            <h3>Chatgpt</h3>
                            <p>Supporting research synthesis, UX writing, and early exploration to sharpen thinking before visuals.</p>
                        </div>
                    </div>

                    {/* Adobe XD Card 1 */}
                    <div className="tool-card">
                        <div className="tool-icon tool-icon-xd">
                            <img src="/images/a9dc80f2d150be23f146cd96196cec18f45d10e7.png" alt="Adobe XD" className="tool-logo" />
                        </div>
                        <div className="tool-info">
                            <h3>Adobe XD</h3>
                            <p>Adobe XD is my go-to tool for wireframing, UI design, and interactive prototyping.</p>
                        </div>
                    </div>

                    {/* Notion Card */}
                    <div className="tool-card">
                        <div className="tool-icon tool-icon-notion">
                            <img src="/images/4541da301ee0037fcf60c634a540f940f19df636.png" alt="Notion" className="tool-logo notion-logo-img" />
                        </div>
                        <div className="tool-info">
                            <h3>Notion</h3>
                            <p>To note my schedules and to collaborate with my team while improving productivity and communication.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
