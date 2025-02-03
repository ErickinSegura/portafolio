import React, {useState, useMemo, useEffect} from 'react';
import './Constellations.css';

const Constellations = () => {
    const [constellationData, setConstellationData] = useState([]);

    useEffect(() => {
        fetch('/constellations.json')
            .then(response => response.json())
            .then(data => setConstellationData(data))
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

    const wrapperStyle = useMemo(() => ({
        left: `${data.position.x}%`,
        top: `${data.position.y}%`,
        transform: `rotate(${data.rotation}deg)`
    }), [data.position.x, data.position.y, data.rotation]);

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