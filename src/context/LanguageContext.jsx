import { createContext, useContext, useState } from "react";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

const LanguageContext = createContext();

const languages = {
  es,
  en,
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  const t = (key) => languages[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
