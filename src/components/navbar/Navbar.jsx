import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import {Image} from "lucide-react";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Optimizar el toggle de idioma
    const toggleLanguage = useCallback(() => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang)
            .then(() => {
                // Solo cerrar menú si está en móvil
                if (isMobile) {
                    setIsMenuActive(false);
                }
            })
            .catch((error) => {
                console.error("Error changing language:", error);
            });
    }, [i18n, isMobile]);

    // Optimizar el toggle del menú
    const toggleMenu = useCallback(() => {
        setIsMenuActive(prev => {
            const newState = !prev;
            // Prevenir scroll del body cuando el menú está abierto
            document.body.classList.toggle('menu-open', newState);
            return newState;
        });
    }, []);

    // Cerrar menú
    const closeMenu = useCallback(() => {
        setIsMenuActive(false);
        document.body.classList.remove('menu-open');
    }, []);

    // Manejar cambios de tamaño de ventana
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            // Si cambiamos a desktop, cerrar el menú móvil
            if (!mobile && isMenuActive) {
                closeMenu();
            }
        };

        // Debounce para optimizar rendimiento
        let timeoutId;
        const debouncedHandleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleResize, 150);
        };

        window.addEventListener('resize', debouncedHandleResize);
        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
            clearTimeout(timeoutId);
        };
    }, [isMenuActive, closeMenu]);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        if (!isMenuActive) return;

        const handleClickOutside = (event) => {
            // Solo en móvil y si el menú está activo
            if (isMobile && !event.target.closest('.navbar-container')) {
                closeMenu();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isMenuActive, isMobile, closeMenu]);

    // Limpiar al desmontar el componente
    useEffect(() => {
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Área de marca/logo (primera columna en grid) */}
                <div className="navbar-brand">
                    {isMobile && (
                        <button
                            className={`hamburger ${isMenuActive ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label={isMenuActive ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isMenuActive}
                            aria-controls="main-navigation"
                        >
                            <span className="bar" aria-hidden="true"></span>
                            <span className="bar" aria-hidden="true"></span>
                            <span className="bar" aria-hidden="true"></span>
                        </button>
                    )}
                </div>

                {/* Menu principal (segunda columna en grid) */}
                <ul
                    id="main-navigation"
                    className={`nav-menu ${isMenuActive ? 'active' : ''}`}
                    role="navigation"
                    aria-label="Navegación principal"
                >
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-links ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            <span>{t('Principal')}</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/techstack"
                            className={({ isActive }) =>
                                `nav-links ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            <span>{t('Techstack')}</span>
                        </NavLink>
                    </li>

                    {/* Botón de idioma en menú móvil */}
                    {isMobile && isMenuActive && (
                        <li className="nav-item language-item">
                            <button
                                className="language-toggle mobile"
                                onClick={toggleLanguage}
                                aria-label={`Cambiar a ${i18n.language === 'es' ? 'inglés' : 'español'}`}
                            >
                                <span className="flag-icon" aria-hidden="true">
                                    {i18n.language === 'es' ? '🇬🇧' : '🇲🇽'}
                                </span>
                                <span className="language-text">
                                    {i18n.language === 'es' ? 'English' : 'Español'}
                                </span>
                            </button>
                        </li>
                    )}
                </ul>


                {!isMobile &&
                    <>
                        {/* Acciones de la navbar (tercera columna en grid) */}
                        <div className="navbar-actions">
                            {/* Botón de idioma desktop */}
                            <button
                                className="language-toggle desktop"
                                onClick={toggleLanguage}
                                aria-label={`Cambiar a ${i18n.language === 'es' ? 'inglés' : 'español'}`}
                                title={`Cambiar a ${i18n.language === 'es' ? 'English' : 'Español'}`}
                            >
                        <span className="flag-icon" aria-hidden="true">
                            {i18n.language === 'es' ? '🇬🇧' : '🇲🇽'}
                        </span>
                            </button>
                        </div>
                    </>
                }

                {/* Overlay para cerrar menú en móvil */}
                {isMenuActive && isMobile && (
                    <div
                        className={`menu-overlay ${isMenuActive ? 'active' : ''}`}
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;