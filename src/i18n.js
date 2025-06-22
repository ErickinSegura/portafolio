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
