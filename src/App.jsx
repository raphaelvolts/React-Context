import { useState } from "react";
/* import { CssBaseline, ThemeProvider } from "@mui/material"; */
import Navbar from "./Navbar";
import { useTheme, createTheme, useColorScheme } from "@mui/material/styles";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { LanguageProvider } from "./Contexts/LanguageContext";

/* import "./App.css"; */

function App() {
  const [count, setCount] = useState(0);
  const theme = createTheme({
    colorSchemes: {
      light: true,
      dark: true
    },
    cssVariables: {
      colorSchemeSelector: "class"
    }
  });

  theme.applyStyles("dark");
  const { mode, setMode } = useColorScheme();
  setMode("dark");
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
