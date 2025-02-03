import React, {useState, useMemo, useEffect} from 'react';
import './Constellations.css';

function isOverlapping(newPosition, existingPositions, minDistance) {
    for (const { x, y } of existingPositions) {
        const distance = Math.sqrt(
            Math.pow(newPosition.x - x, 2) + Math.pow(newPosition.y - y, 2)
        );
        if (distance < minDistance) {
            return true;
        }
    }
    return false;
}

const Constellations = () => {
    const [constellationData, setConstellationData] = useState([]);

    useEffect(() => {
        fetch('/constellations.json')
            .then(response => response.json())
            .then(data => {
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;
                const MIN_DISTANCE = 200; // Distancia mínima en píxeles

                const dataWithRandomPositionsAndRotations = [];
                const existingPositions = [];

                for (const constellation of data) {
                    let newPosition;
                    let attempts = 0;
                    const MAX_ATTEMPTS = 100;

                    do {
                        newPosition = {
                            x: Math.random() * screenWidth,
                            y: Math.random() * screenHeight,
                        };
                        attempts++;
                    } while (
                        isOverlapping(newPosition, existingPositions, MIN_DISTANCE) &&
                        attempts < MAX_ATTEMPTS
                        );

                    if (attempts < MAX_ATTEMPTS) {
                        existingPositions.push(newPosition);
                        dataWithRandomPositionsAndRotations.push({
                            ...constellation,
                            position: {
                                x: newPosition.x / screenWidth,
                                y: newPosition.y / screenHeight,
                            },
                            rotation: Math.random() * 360,
                        });
                    } else {
                        console.warn('No se pudo encontrar una posición válida para una constelación.');
                    }
                }

                setConstellationData(dataWithRandomPositionsAndRotations);
            })
            .catch(error => console.error('Error loading constellations:', error));
    }, []);

    return (
        <div className="constellations-container">
            {constellationData.map(constellation => (
                <Constellation key={constellation.id} data={constellation} />
            ))}
        </div>
    );
};

const Constellation = React.memo(({ data }) => {
    const [hover, setHover] = useState(false);

    const wrapperStyle = useMemo(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        return {
            left: `${data.position.x * screenWidth}px`,
            top: `${data.position.y * screenHeight}px`,
            transform: `rotate(${data.rotation}deg)`,
            position: 'absolute',
        };
    }, [data.position.x, data.position.y, data.rotation]);

    return (
        <div className="constellation-wrapper"
             style={wrapperStyle}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}>
            <div className="constellation-image"
                 style={{ backgroundImage: `url(${data.image
                            
                 })` }} />
            <svg viewBox="0 0 100 100" className="constellation-lines">
                {data.lines.map(([start, end], index) => (
                    <line
                        key={`line-${index}`}
                        x1={data.stars[start].x}
                        y1={data.stars[start].y}
                        x2={data.stars[end].x}
                        y2={data.stars[end].y}
                        className={hover ? 'line-hover' : 'line-default'}
                    />
                ))}
                {data.stars.map((star, index) => (
                    <circle
                        key={`star-${index}`}
                        cx={star.x}
                        cy={star.y}
                        r={(Math.random() * 2 + 1) / 4}
                        className="constellation-star"
                        style={{
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </svg>

            <div className="constellation-name">
                {data.name}
            </div>
        </div>
    );
});

export default Constellations;