import React from 'react';
import {FaGithub, FaYoutube} from 'react-icons/fa';
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
    SiHtml5, SiOracle, SiTelegram, SiDocker, SiKubernetes, SiPostgresql, SiDotnet, SiCss3
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import {TbBrandCSharp} from "react-icons/tb";

const projectsData = [
    {
        titleKey: "projects.rift.name",
        descriptionKey: "projects.rift.description",
        imageUrl: "./images/projects/rift.png",
        repoLink: "https://github.com/ErickinSegura/AREL",
        demo: "https://youtu.be/L8O_YEM0nLs",
        techStack: [
            { name: "React", icon: <SiReact /> },
            { name: "Oracle Cloud", icon: <SiOracle /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "Telegram", icon: <SiTelegram /> },
        ]
    },
    {
        titleKey: "projects.juraid.name",
        descriptionKey: "projects.juraid.description",
        imageUrl: "./images/projects/juraid.png",
        repoLink: "https://github.com/ErickinSegura/SECAL-SACV",
        techStack: [
            { name: "Kotlin", icon: <SiKotlin /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "Postgresql", icon: <SiPostgresql /> },
            { name: "Firebase", icon: <SiFirebase /> },
        ]
    },
    {
        titleKey: "projects.awaq.name",
        descriptionKey: "projects.awaq.description",
        imageUrl: "./images/projects/awaq.png",
        repoLink: "https://github.com/ErickinSegura/Zucaritas-TM",
        techStack: [
            { name: "Unity", icon: <SiUnity /> },
            { name: ".NET", icon: <SiDotnet /> },
            { name: "C#", icon: <TbBrandCSharp /> },
            { name: "MySQL", icon: <SiMysql /> },
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
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <SiCss3 /> },
        ]
    }
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="projects-container">
            <h2 className="projects-title glass-primary glass-shine-top">{t('Projects')}</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card glass-primary glass-shine-top glass-shine-left" key={index}>

                        <div className="project-content">
                            {project.imageUrl && (
                                <img src={project.imageUrl} alt={t(project.titleKey)} className="project-image" />
                            )}
                            <h3 className="project-title glass-secondary glass-shine-top">{t(project.titleKey)}</h3>
                            <p className="project-description glass-secondary glass-shine-top">{t(project.descriptionKey)}</p>
                            <div className="project-techstack">
                                {project.techStack.map((tech, idx) => (
                                    <div className="tech-item glass-subtle" key={idx}>
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
                                    className="project-button glass-subtle glass-hover-effect"
                                >
                                    <FaGithub className="button-icon" /> {t('Repo')}
                                </a>

                                {project.demo &&
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-button glass-subtle glass-hover-effect"
                                    >
                                        <FaYoutube className="button-icon" /> {t('Demo')}
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;