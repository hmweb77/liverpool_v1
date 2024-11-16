import { useContext } from 'react';

import LanguageContext from '../context/languageContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return { t };
};