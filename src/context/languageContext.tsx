import { createContext } from 'react';

interface LanguageContextType {
  language: 'en' | 'pt';
  setLanguage: (language: 'en' | 'pt') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export default LanguageContext;