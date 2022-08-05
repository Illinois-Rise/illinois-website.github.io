import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import "./styles.css";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#142C4C",
    },
    success: {
      main: "#2e7d32",
      light: "#c0ffb8",
    },
    error: {
      main: "#d32f2f",
      light: "#f7d2d2",
    },
    text: {
      primary: "#00004d",
    },
  },
  typography: {
    fontFamily: "Oswald, Quattrocento Sans",
    h2: {
      fontFamily: "Oswald",
      fontWeight: 600,
      fontSize: "3rem",
    },
    h4: {
      fontFamily: "Oswald",
      fontWeight: 600,
      fontSize: "2rem",
    },

    body1: {
      fontFamily: "Quattrocento Sans",
    },
  },
};

const theme = createTheme(themeOptions);

// Dark Blue: #00004d this is for text only
// Orange Title: #fe6226
// Off White NavBar: #fffeff
// 142C4C is blue in phoenix
// Header font family is Oswald
// Text is Quattrocento

export default theme;
