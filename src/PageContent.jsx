import { useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";

export default function PageContent({ children }) {
  const { isDarkMode } = useContext(ThemeContext);
  const style = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0
  };

  return <div style={style}>{children}</div>;
}
