import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Varsayılan dil İngilizce (veya tarayıcı diline göre ayarlanabilir)
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);