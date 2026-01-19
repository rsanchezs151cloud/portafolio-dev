import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button className="lang-button" onClick={() => setLang(lang === "es" ? "en" : "es")}>
      {lang === 'es' ? '🇲🇽 - ES' : '🇺🇸 - EN'}
    </button>
  );
};

export default LanguageSwitcher;
