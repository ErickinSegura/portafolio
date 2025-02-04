import React, { useMemo } from 'react';
import './StarryBackground.css';
import Constellations from "./Constellations";


const StarryBackground = () => {
    const starCount = 150;
    const maxRadius = 100;

    const stars = useMemo(() =>
            Array.from({ length: starCount }).map(() => {
                const angle = Math.random() * 2 * Math.PI;
                const radius = Math.sqrt(Math.random()) * maxRadius;
                const left = 50 + radius * Math.cos(angle);
                const top = 50 + radius * Math.sin(angle);
                return {
                    left,
                    top,
                    size: Math.random() * 2 + 1,
                    twinkleDelay: Math.random() * 2
                };
            })
        , [starCount, maxRadius]);

    return (
        <div className="starry-wrapper">
            <div className="animated-background" />

            <div className="stars-container">
                {stars.map((star, index) => (
                    <div
                        key={index}
                        className="star"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.twinkleDelay}s`
                        }}
                    />
                ))}
                <Constellations />
            </div>
        </div>
    );
};

export default StarryBackground;
