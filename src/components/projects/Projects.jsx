import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
    SiKotlin,
    SiSupabase,
    SiUnity,
    SiMysql,
    SiReact,
    SiTailwindcss,
    SiFirebase,
    SiFlask,
    SiOpenai,
    SiHtml5
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const projectsData = [
    {
        titleKey: "projects.juraid.name",
        descriptionKey: "projects.juraid.description",
        imageUrl: "./images/projects/juraid.png",
        repoLink: "https://github.com/ErickinSegura/SECAL-SACV",
        techStack: [
            { name: "Kotlin", icon: <SiKotlin /> },
            { name: "Supabase", icon: <SiSupabase /> }
        ]
    },
    {
        titleKey: "projects.awaq.name",
        descriptionKey: "projects.awaq.description",
        imageUrl: "./images/projects/awaq.png",
        repoLink: "https://github.com/ErickinSegura/Zucaritas-TM",
        techStack: [
            { name: "Unity", icon: <SiUnity /> },
            { name: "MySQL", icon: <SiMysql /> }
        ]
    },
    {
        titleKey: "projects.turings.name",
        descriptionKey: "projects.turings.description",
        imageUrl: "./images/projects/turings.png",
        repoLink: "https://github.com/ErickinSegura/Turings",
        techStack: [
            { name: "React", icon: <SiReact /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            { name: "Firebase", icon: <SiFirebase /> }
        ]
    },
    {
        titleKey: "projects.lux.name",
        descriptionKey: "projects.lux.description",
        imageUrl: "./images/projects/hack.png",
        repoLink: "https://github.com/ErickinSegura/HackMTY-2024",
        techStack: [
            { name: "Flask", icon: <SiFlask /> },
            { name: "OpenAI", icon: <SiOpenai /> },
            { name: "HTML", icon: <SiHtml5 /> }
        ]
    }
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="projects-container">
            <h2 className="projects-title">{t('Projects')}</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        {project.imageUrl && (
                            <img src={project.imageUrl} alt={t(project.titleKey)} className="project-image" />
                        )}
                        <div className="project-content">
                            <h3 className="project-title">{t(project.titleKey)}</h3>
                            <p className="project-description">{t(project.descriptionKey)}</p>
                            <div className="project-techstack">
                                {project.techStack.map((tech, idx) => (
                                    <div className="tech-item" key={idx}>
                                        <span className="tech-icon">{tech.icon}</span>
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="project-buttons">
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-button"
                                >
                                    <FaGithub className="button-icon" /> {t('Repo')}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;