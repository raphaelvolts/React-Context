import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");
  function changeLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <LanguageContext.Provider
      value={{ language: language, changeLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
