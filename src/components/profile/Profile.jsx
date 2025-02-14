import React from 'react';
import { FaGithub, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import './Profile.css';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t, i18n } = useTranslation();

    const handleCVDownload = () => {
        const cvFileName = i18n.language === 'es' ? 'Español.pdf' : 'English.pdf';
        const displayName = i18n.language === 'es'
            ? 'CV Erick Segura Sánchez.pdf'
            : 'Resume Erick Segura Sánchez.pdf';

        const link = document.createElement('a');
        link.href = `/${cvFileName}`;
        link.download = displayName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-content">
                    <h1 className="profile-name">Erick Segura Sánchez</h1>
                    <p className="profile-title">{t('Description')}</p>

                    <div className="profile-links">
                        <a
                            href="https://github.com/ErickinSegura"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-link"
                        >
                            <FaGithub className="link-icon" />
                            <span>GitHub</span>
                            <div className="link-underline"></div>
                        </a>
                        <button
                            onClick={handleCVDownload}
                            className="profile-link"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.5rem',
                                color: 'rgba(255, 255, 255, 0.9)',
                                textDecoration: 'none',
                                borderRadius: '10px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: 'none',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'left'
                            }}
                        >
                            <FaFilePdf className="link-icon" />
                            <span>CV</span>
                            <div className="link-underline"></div>
                        </button>
                        <a
                            href="mailto:erickseguraog@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-link"
                        >
                            <FaEnvelope className="link-icon" />
                            <span>Email</span>
                            <div className="link-underline"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;