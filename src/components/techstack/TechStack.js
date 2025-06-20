import React, { useState } from 'react';
import './TechStack.css';
import './TechStackTabs.css';
import { useTranslation } from 'react-i18next';
import {SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiPostgresql, SiPython, SiDjango, SiCss3, SiVuedotjs, SiAngular, SiBootstrap, SiSass} from "react-icons/si";

const TechStacks = {
    frontend: {
        name: 'Frontend',
        elements: [
            {name: 'JavaScript', icon: <SiJavascript />},
            {name: 'React', icon: <SiReact />},
            {name: 'Vue.js', icon: <SiVuedotjs />},
            {name: 'Angular', icon: <SiAngular />},
        ]
    },
    backend: {
        name: 'Backend',
        elements: [
            {name: 'Node.js', icon: <SiNodedotjs />},
            {name: 'Express', icon: <SiExpress />},
            {name: 'Python', icon: <SiPython />},
            {name: 'Django', icon: <SiDjango />},
        ]
    },
    database: {
        name: 'Database',
        elements: [
            {name: 'MongoDB', icon: <SiMongodb />},
            {name: 'PostgreSQL', icon: <SiPostgresql />},
            {name: 'Express', icon: <SiExpress />},
            {name: 'Node.js', icon: <SiNodedotjs />},
        ]
    },
    styling: {
        name: 'Styling',
        elements: [
            {name: 'TailwindCSS', icon: <SiTailwindcss />},
            {name: 'Bootstrap', icon: <SiBootstrap />},
            {name: 'Sass', icon: <SiSass />},
            {name: 'CSS3', icon: <SiCss3 />},
        ]
    }
};

const TechStack = () => {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <div className="tech-stack-container">
            {/* Título centrado */}
            <div className="title-section">
                <h2 className="tech-title glass-primary glass-shine-top">{t('Projects')}</h2>
            </div>

            {/* Contenedor principal con tabs a la izquierda y orbit a la derecha */}
            <div className="main-content">
                {/* Tabs a la izquierda */}
                <div className="tabs-section">
                    <div className="tabs-container glass-primary glass-shine-top glass-shine-left">
                        <div className="tabs-wrapper">
                            {Object.entries(TechStacks).map(([key, stack]) => (
                                <button
                                    key={key}
                                    className={`tab-button ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    {stack.name}
                                </button>
                            ))}
                        </div>
                        <div className="tech-list">
                            <h3>Tecnologías en {TechStacks[activeTab].name}</h3>
                            <ul>
                                {TechStacks[activeTab].elements.map((tech, index) => (
                                    <li key={index} className="tech-list-item">
                                        <span className="tech-list-icon">{tech.icon}</span>
                                        <span className="tech-list-name">{tech.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Agujero negro y órbitas a la derecha */}
                <div className="orbit-section">
                    <div className="orbit-container">
                        <div className="background-container">
                            <div className="blackhole">
                                <div className="blackhole-before"></div>
                                <div className="blackhole-after"></div>
                            </div>
                            <div className="rotating-box">
                                <ul className="rotation-list">
                                    {TechStacks[activeTab].elements.map((tech, index) => (
                                        <li key={index} className={`list-item item-${index + 1}`}>
                                            <span>
                                                <div className="tech-content">
                                                    <div className="tech-icon">{tech.icon}</div>
                                                    <div className="tech-name">{tech.name}</div>
                                                </div>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;