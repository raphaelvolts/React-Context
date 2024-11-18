import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createUseStyles } from "react-jss";
import styles from "./Styles/FormStyles";
import { LanguageContext } from "./Contexts/LanguageContext";
import { ThemeContext } from "./Contexts/ThemeContext";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";

const styling = createUseStyles(styles);
const translate = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Addresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Acuérdate de mí"
  }
};

export default function Form() {
  const { theme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { signIn, email, password, remember } = translate[language];
  const classes = styling({ theme });
  return (
    <main className={classes.main}>
      <ThemeProviderMUI theme={theme}>
        <Paper className={classes.paper} elavation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} variant="standard" onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" type="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              className={classes.submit}
              fullWidth
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </ThemeProviderMUI>
    </main>
  );
}
