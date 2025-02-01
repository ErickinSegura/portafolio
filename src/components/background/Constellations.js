import React, { useState, useMemo } from 'react';
import './Constellations.css';

const Constellations = () => {
    const constellationData = [
        {
            id: 1,
            image: 'logo192.png',
            stars: [
                { left: 20, top: 30 },
                { left: 25, top: 35 },
                { left: 30, top: 28 },
                { left: 33, top: 40 }
            ]
        },
        {
            id: 2,
            image: '/images/constellation2.png',
            stars: [
                { left: 60, top: 20 },
                { left: 65, top: 25 },
                { left: 70, top: 22 },
                { left: 75, top: 30 }
            ]
        },
    ];

    return (
        <div className="constellations-container">
            {constellationData.map(constellation => (
                <Constellation key={constellation.id} data={constellation} />
            ))}
        </div>
    );
};

const Constellation = ({ data }) => {
    const [hover, setHover] = useState(false);
    const stars = data.stars;

    const rotation = useMemo(() => Math.random() * 30 - 15, []);

    const lefts = stars.map(star => star.left);
    const tops = stars.map(star => star.top);
    const minLeft = Math.min(...lefts);
    const maxLeft = Math.max(...lefts);
    const minTop = Math.min(...tops);
    const maxTop = Math.max(...tops);

    const containerStyle = {
        position: 'absolute',
        left: `${minLeft}%`,
        top: `${minTop}%`,
        width: `${maxLeft - minLeft}%`,
        height: `${maxTop - minTop}%`,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s'
    };

    const relativePoints = stars
        .map(star => {
            const x = ((star.left - minLeft) / (maxLeft - minLeft)) * 100;
            const y = ((star.top - minTop) / (maxTop - minTop)) * 100;
            return `${x},${y}`;
        })
        .join(' ');

    const getRelativeStyle = star => ({
        left: `${((star.left - minLeft) / (maxLeft - minLeft)) * 100}%`,
        top: `${((star.top - minTop) / (maxTop - minTop)) * 100}%`
    });

    return (
        <div
            className="constellation-wrapper"
            style={containerStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <svg
                className="constellation-lines"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polyline
                    points={relativePoints}
                    className={hover ? 'line-hover' : 'line-default'}
                />
            </svg>

            {stars.map((star, index) => (
                <div
                    key={index}
                    className="constellation-star"
                    style={getRelativeStyle(star)}
                />
            ))}

            <div
                className="constellation-image"
                style={{
                    backgroundImage: `url(${data.image})`,
                    opacity: hover ? 0.15 : 0
                }}
            />
        </div>
    );
};

export default Constellations;
