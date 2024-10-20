import { createContext, useEffect, useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Main from './components/Main';

export const ThemeContext = createContext();
export const LangContext = createContext();

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('uz');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    if(localStorage.getItem('lang')){
      setLanguage(localStorage.getItem('lang'))
    }


  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('lang', language)
  }, [language, i18n]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{ language, setLanguage }}>
        {/* <h1>{t('Welcome to React')}</h1> */}
        <Header />
        <Main/>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
