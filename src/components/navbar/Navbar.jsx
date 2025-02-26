import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang)
            .then(() => {
                setIsMenuActive(false);
            })
            .catch((error) => {
                console.error("Error changing language:", error);
            });
    };

    const toggleMenu = () => setIsMenuActive(!isMenuActive);

    useEffect(() => {
        const handleResize = () => window.innerWidth > 768 && setIsMenuActive(false);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button
                    className={`hamburger ${isMenuActive ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
                    <li className="nav-item" onClick={() => setIsMenuActive(false)}>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                        >
                            {t('Principal')}
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setIsMenuActive(false)}>
                        <NavLink
                            to="/techstack"
                            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                        >
                            {t('Techstack')}
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => setIsMenuActive(false)}>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                        >
                            {t('Techstack')}
                        </NavLink>
                    </li>

                    {/* Solo mostrar en versión móvil cuando el menú está activo */}
                    {isMenuActive && (
                        <li className="nav-item">
                            <button
                                className="language-toggle"
                                onClick={toggleLanguage}
                            >
                                {i18n.language === 'es' ? '🇲🇽' : '🇬🇧'}
                            </button>
                        </li>
                    )}
                </ul>

                {/* Botón de idioma solo visible en desktop */}
                <button className="language-toggle desktop" onClick={toggleLanguage}>
                    {i18n.language === 'es' ? '🇲🇽' : '🇬🇧'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;