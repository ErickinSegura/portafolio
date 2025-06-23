import React from 'react';
import './Blog.css';
import { useTranslation } from 'react-i18next';

const Blog = () => {
    const { t } = useTranslation();
    return (
        <div className="profile-container">
            <div className="profile-card glass-primary glass-shine-top glass-shine-left">
                <div className="profile-content">
                    <p className="profile-name">{t('Building')}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;