import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  function toggleMode() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeContext.Provider value={{ isDarkMode: darkMode, toggle: toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
