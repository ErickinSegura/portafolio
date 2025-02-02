import React, { useState, useMemo } from 'react';
import './Constellations.css';

const Constellations = () => {
    // Memoriza los datos de las constelaciones para evitar que se vuelvan a crear en cada render.
    const constellationData = useMemo(() => [
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
    ], []);

    return (
        <div className="constellations-container">
            {constellationData.map(constellation => (
                <Constellation key={constellation.id} data={constellation} />
            ))}
        </div>
    );
};

// Envolvemos el componente en React.memo para evitar renders innecesarios.
const Constellation = React.memo(({ data }) => {
    const [hover, setHover] = useState(false);
    const stars = data.stars;

    // Se calcula la rotación una sola vez.
    const rotation = useMemo(() => Math.random() * 30 - 15, []);

    // Calcula y memoriza el bounding box de la constelación.
    const { minLeft, maxLeft, minTop, maxTop } = useMemo(() => {
        const lefts = stars.map(star => star.left);
        const tops = stars.map(star => star.top);
        return {
            minLeft: Math.min(...lefts),
            maxLeft: Math.max(...lefts),
            minTop: Math.min(...tops),
            maxTop: Math.max(...tops)
        };
    }, [stars]);

    // Memoriza el estilo del contenedor.
    const containerStyle = useMemo(() => ({
        position: 'absolute',
        left: `${minLeft}%`,
        top: `${minTop}%`,
        width: `${maxLeft - minLeft}%`,
        height: `${maxTop - minTop}%`,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s'
    }), [minLeft, minTop, maxLeft, maxTop, rotation]);

    // Calcula los puntos relativos para el <polyline>.
    const relativePoints = useMemo(() =>
            stars
                .map(star => {
                    const x = ((star.left - minLeft) / (maxLeft - minLeft)) * 100;
                    const y = ((star.top - minTop) / (maxTop - minTop)) * 100;
                    return `${x},${y}`;
                })
                .join(' ')
        , [stars, minLeft, minTop, maxLeft, maxTop]);

    // Función para obtener el estilo relativo de cada estrella.
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
});

export default Constellations;
