import React from 'react';
import './StarryBackground.css';
import Constellations from "./Constellations";

const StarryBackground = () => {
    const starCount = 150;

    const stars = Array.from({ length: starCount }).map(() => ({
        left: Math.random() * 100,          // posición horizontal en %
        top: Math.random() * 100,           // posición vertical en %
        size: Math.random() * 2 + 1,        // tamaño entre 1 y 3px
        twinkleDelay: Math.random() * 2     // retraso aleatorio entre 0 y 2 segundos
    }));

    return (
        <div className="starry-wrapper">
            <div className="animated-background" />

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
    );
};

export default StarryBackground;
