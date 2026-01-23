import './Blog.css';
import { useTranslation } from 'react-i18next';

const Blog = () => {
    const { t } = useTranslation();
    return (
        <div className="profile-container">
            <div className="profile-card glass glass-shine-top">
                <div className="profile-content">
                    <p className="profile-name">{t('Building')}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;