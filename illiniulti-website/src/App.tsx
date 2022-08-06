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
        //TODO: Actually fix the build version of this thing, problems with MIME type
        //TODO: Make sure that the home page pictures still show up after navigating away from home page
        //TODO: Fix the Submit Query button to look nicer
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
