import React, { useState, useEffect } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Trail logic
            const newDot = {
                id: Date.now(),
                x: clientX,
                y: clientY,
            };
            setDots((prev) => [...prev.slice(-15), newDot]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const interval = setInterval(() => {
            setDots((prev) => prev.filter(dot => Date.now() - dot.id < 500));
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="cursor-trail-container">
            {dots.map(dot => (
                <div
                    key={dot.id}
                    className="trail-dot"
                    style={{
                        left: dot.x,
                        top: dot.y,
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
