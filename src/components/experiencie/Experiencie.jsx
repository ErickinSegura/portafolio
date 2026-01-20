import { useTranslation } from 'react-i18next';
import './Experiencie.css';

const experienceData = [
  {
    translationKey: "oracle",
    imageUrl: "./images/experience/oracle.png",
  }
];

const Experiencie = () => {
  const { t } = useTranslation();

  return (
    <div className="experience-container">
      <h2 className="experience-title glass glass-shine-top">{t('Experience')}</h2>
      
      <div className="experience-content">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-card">
            {experience.imageUrl && (
              <img 
                src={experience.imageUrl} 
                alt={t(`experiencies.${experience.translationKey}.company`)}
                className="experience-image"
              />
            )}
            
            <div className="experience-info">
              <div className="experience-header">
                <h3 className="experience-position">
                  {t(`experiencies.${experience.translationKey}.position`)}
                </h3>
                <p className="experience-company">
                  {t(`experiencies.${experience.translationKey}.company`)}
                </p>
                <p className="experience-period">
                  {t(`experiencies.${experience.translationKey}.period`)}
                </p>
              </div>

              <p className="experience-description glass glass-subtle glass-shine-top">
                {t(`experiencies.${experience.translationKey}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencie;