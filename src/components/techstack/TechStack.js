import React, { useState } from 'react';
import './TechStack.css';
import './TechStackTabs.css';
import { useTranslation } from 'react-i18next';
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiPostgresql,
    SiCss3,
    SiSpringboot,
    SiKotlin,
    SiFlask,
    SiFastapi,
    SiMysql,
    SiFirebase,
    SiSupabase,
    SiOracle,
    SiFigma,
    SiPhotopea,
    SiGit,
    SiGithub,
    SiDocker,
    SiDotnet
} from "react-icons/si";

const TechStacks = {
    frontend: {
        elements: [
            {name: 'JavaScript', icon: <SiJavascript />},
            {name: 'React', icon: <SiReact />},
            {name: 'TailwindCSS', icon: <SiTailwindcss />},
            {name: 'CSS3', icon: <SiCss3 />},
        ]
    },
    backend: {
        elements: [
            {name: 'Java Springboot', icon: <SiSpringboot />},
            {name: '.NET', icon: <SiDotnet />},
            {name: 'Kotlin', icon: <SiKotlin />},
            {name: 'Flask', icon: <SiFlask />},
            {name: 'FastAPI', icon: <SiFastapi />},
        ]
    },
    database: {
        elements: [
            {name: 'MySQL', icon: <SiMysql />},
            {name: 'PostgreSQL', icon: <SiPostgresql />},
            {name: 'Oracle SQL', icon: <SiOracle />},
            {name: 'Firebase', icon: <SiFirebase />},
            {name: 'Supabase', icon: <SiSupabase />},
        ]
    },
    extra: {
        elements: [
            {name: 'Git', icon: <SiGit />},
            {name: 'Github', icon: <SiGithub />},
            {name: 'Docker', icon: <SiDocker />},
            {name: 'Figma', icon: <SiFigma />},
            {name: 'Photopea', icon: <SiPhotopea />},
        ]
    }
};

const TechStack = () => {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState('frontend');
    const [isTransitioning, setIsTransitioning] = useState(false);



    const handleTabChange = (newTab) => {
        if (newTab !== activeTab) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab(newTab);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 100);
            }, 300);
        }
    };

    return (
        <div className="tech-stack-container">
            {/* Título centrado */}
            <div className="title-section">
                <h2 className="tech-title glass-primary glass-shine-top">{t('Techstack')}</h2>
            </div>

            <div className="main-content">
                {/* Tabs a la izquierda */}
                <div className="tabs-section">
                    <div className="tabs-container glass-primary glass-shine-top glass-shine-left">
                        <div className="tabs-wrapper">
                            {Object.keys(TechStacks).map((key) => (
                                <button
                                    key={key}
                                    className={`tab-button glass-subtle glass-hover-effect ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => handleTabChange(key)}
                                >
                                    {t(`technology.${key}.name`)}
                                </button>
                            ))}
                        </div>
                        <div className={`tech-list ${isTransitioning ? 'transitioning' : ''}`}>
                            <h3>{t(`technology.${activeTab}.description`)}</h3>
                            <ul>
                                {TechStacks[activeTab].elements.map((tech, index) => (
                                    <li key={index} className="tech-list-item" style={{ animationDelay: `${index * 0.1}s` }}>
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
                        <div className={`background-container ${isTransitioning ? 'transitioning' : ''}`}>
                            <div className="blackhole">
                                <div className="blackhole-before"></div>
                                <div className="blackhole-after"></div>
                            </div>
                            <div className={`rotating-box ${isTransitioning ? 'pulse-animation' : ''}`}>
                                <ul className="rotation-list">
                                    {TechStacks[activeTab].elements.map((tech, index) => (
                                        <li key={`${activeTab}-${index}`} className={`list-item item-${index + 1} ${isTransitioning ? 'dramatic-fade-in' : ''}`}>
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