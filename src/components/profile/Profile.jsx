import React from 'react';
import { FaGithub, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import './Profile.css';
import '../../index.css'
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
            <div className="profile-card glass">
                <div className="profile-content">
                    <h1 className="profile-name">Erick Segura Sánchez</h1>
                    <p className="profile-title">{t('Description')}</p>

                    <div className="profile-links">
                        <a
                            href="https://github.com/ErickinSegura"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-link glass-subtle glass"
                        >
                            <FaGithub className="link-icon" />
                            <span>GitHub</span>
                            <div className="link-underline"></div>
                        </a>
                        <button
                            onClick={handleCVDownload}
                            className="profile-link glass-subtle glass"
                            style={{
                                cursor: 'pointer'
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
                            className="profile-link glass-subtle glass"
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