import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Principal": "Home",
            "Techstack": "Techstack",
            "Welcome": "Welcome to my portfolio",
        }
    },
    es: {
        translation: {
            "Principal": "Principal",
            "Techstack": "Techstack",
            "Welcome": "Bienvenido a mi portafolio",
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
