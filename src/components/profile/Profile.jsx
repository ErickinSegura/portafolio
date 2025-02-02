import React from 'react';
import { FaGithub, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-card">
                <div className="profile-header">
                    <h1 className="profile-name">Erick Segura Sánchez</h1>
                </div>
                <div className="profile-links">
                    <a
                        href="https://github.com/ErickinSegura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-link"
                    >
                        <FaGithub className="icon" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-link"
                    >
                        <FaFilePdf className="icon" />
                        <span>CV</span>
                    </a>
                    <a
                        href="mailto:erickseguraog@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-link"
                    >
                        <FaEnvelope className="icon" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
