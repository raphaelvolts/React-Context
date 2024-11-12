import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import { createUseStyles } from "react-jss";
import styles from "./styles/NavbarStyles";
import { useTheme } from "@mui/material/styles";

const styling = createUseStyles(styles);

export default function Navbar() {
  const theme = useTheme();
  const classes = styling({ theme });
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <span>🇫🇷</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
