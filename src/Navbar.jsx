import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import { createUseStyles } from "react-jss";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./Contexts/ThemeContext";
import { LanguageContext } from "./Contexts/LanguageContext";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";

const styling = createUseStyles(styles);

const translate = {
  english: {
    flag: "🇬🇧",
    search: "Search"
  },
  french: {
    flag: "🇫🇷",
    search: "Recherche"
  },
  spanish: {
    flag: "🇪🇸",
    search: "Buscar"
  }
};

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { flag, search } = translate[language];
  const classes = styling({ theme });

  return (
    <div className={classes.root}>
      <ThemeProviderMUI theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="disabled">
              <span className={classes.emoji}>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggle} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProviderMUI>
    </div>
  );
}
