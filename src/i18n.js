import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Principal": "Main",
            "Blog": "Blog",
            "Techstack": "My Techstack",
            "Description": "Experienced student in fullstack development for multiple platforms.",
            "Projects": "My Projects",
            "Repo": "Repository",
            "Demo": "Demo",
            "Building": "Amazing things soon...",
            "projects": {
                "rift": {
                    "name": "Rift",
                    "description": "A multiplatform tool (Web and Telegram Bot) for managing projects based on agile methodologies, including progress tracking and report generation with charts."
                },
                "juraid": {
                    "name": "JurAid",
                    "description": "Android application that allows users to address legal issues efficiently and securely. With a minimalist and professional interface."
                },
                "awaq": {
                    "name": "AWAQ Gamification",
                    "description": "Gamified training platform for future biomonitors of the Awaq NGO, including a video game and a web application for progress monitoring."
                },
                "turings": {
                    "name": "Turings",
                    "description": "React-based educational gamification application for managing the virtual currency \"Turings\" in academic environments."
                },
                "lux": {
                    "name": "Lux (HackMTY2024)",
                    "description": "Service with a web platform designed for SMEs, providing business owners with tools to analyze, report, and generate ideas using natural language."
                }
            },
            "technology":  {
                "frontend" :{
                    "name": "Frontend",
                    "description": "Frontend Technologies",
                },
                "backend": {
                    "name": "Backend",
                    "description": "Backend Technologies",
                },
                "database": {
                    "name": "Database",
                    "description": "Database Technologies",
                },
                "extra": {
                    "name": "Extras",
                    "description": "Extra Technologies",
                }
            },
            "Experience": "Experiencie",
            "experiencies": {
                "oracle":{
                    "company": "Oracle (Guadalajara, Jalisco, México)",
                    "position": "Software Engeenieer Intern",
                    "period": "July 2025 - Present",
                    "description": "I develop enterprise applications using Oracle APEX for ACE (Application Center of Excellence) team projects. This experience allows me to significantly strengthen my advanced SQL skills (complex queries, query optimization) and gain practical experience in real project management and solution development for enterprise environments.<br/><br/><strong>Skills:</strong> Oracle APEX, Advanced SQL, Oracle Database, Project Management."
                }
            }

        }
    },
    es: {
        translation: {
            "Principal": "Principal",
            "Blog": "Blog",
            "Techstack": "Mis Tecnologías",
            "Description": "Estudiante con experiencia en el desarrollo fullstack para multiples plataformas.",
            "Projects": "Mis Proyectos",
            "Repo": "Repositorio",
            "Demo": "Demo",
            "Building": "Cosas impresionantes proximamente...",
            "projects": {
                "rift": {
                    "name": "Rift",
                    "description": "Una herramienta multiplataforma (Web y Bot de Telegram) que sirve para gestionar proyectos basados en metdologías ágiles, con medición de progresos y generación de reportes con gráficas"
                },
                "juraid": {
                    "name": "JurAid",
                    "description": "Aplicación Android que permite a los usuarios abordar procesos problemas legales de manera eficiente y segura. Con una interfaz minimalista y profesional"
                },
                "awaq": {
                    "name": "Gamificación de AWAQ",
                    "description": "Plataforma gamificada de capacitación para futuros biomonitores de la ONG Awaq, incluyendo un videojuego y una aplicación web para monitorización de progresos."
                },
                "turings": {
                    "name": "Turings",
                    "description": "Aplicación React de gamificación educativa para la gestión de la moneda virtual \"Turings\" en entornos académicos"
                },
                "lux": {
                    "name": "Lux (HackMTY2024)",
                    "description": "Servicio con plataforma web diseñada para PYMES que provee a dueños de negocios herramientas para analizar, reportar y generar ideas usando lenguaje natural"
                }
            },
            "technology":  {
                "frontend" :{
                    "name": "Frontend",
                    "description": "Tecnologías de Frontend",
                },
                "backend": {
                    "name": "Backend",
                    "description": "Tecnologías de Backend",
                },
                "database": {
                    "name": "Base de Datos",
                    "description": "Tecnologías de Bases de Datos",
                },
                "extra": {
                    "name": "Extras",
                    "description": "Tecnologías Extra",
                }
            },
            "Experience": "Experiencia",
            "experiencies": {
                "oracle":{
                    "company": "Oracle (Guadalajara, Jalisco, México)",
                    "position": "Software Engeenieer Intern",
                    "period": "Julio 2025 - Presente",
                    "description": "Desarrollo aplicaciones empresariales con Oracle APEX para proyectos del equipo de ACE (Application Center of Excellence). Esta experiencia me permite fortalecer significativamente mis habilidades en SQL avanzado(consultas complejas, optimización de queries) y adquirir experiencia práctica en gestión de proyectos reales y desarrollo de soluciones para entornos empresariales.<br/><br/><strong>Competencias:</strong> Oracle APEX, SQL avanzado, Oracle Database, gestión de proyectos."
                }
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'es',
        interpolation: { escapeValue: false },
        detection: { order: [], caches: [] }
    });

export default i18n;
