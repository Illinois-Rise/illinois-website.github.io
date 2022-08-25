import { useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Grid, ThemeProvider } from "@mui/material";
import Sidebars from "./components/Sidebars";
import Footer from "./components/Footer";
import theme from "./styles/theme";
function App() {
  const navigate = useNavigate();
  useEffect(()=> {
    navigate("home");
  },[])
  
  return (
    <ThemeProvider theme={theme}>
      {
        //TODO: Fix favicon so its not a white square
        //TODO: Add calendar picker in the Absence Form
        //Prettier Everything: ./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
      }
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Grid>
        <Sidebars>
          <Outlet />
        </Sidebars>
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
