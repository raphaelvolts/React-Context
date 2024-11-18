import { createContext, useState } from "react";
import { createTheme } from "@mui/material";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });

  function toggleMode() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeContext.Provider
      value={{ isDarkMode: darkMode, theme: theme, toggle: toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
