import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Grid, ThemeProvider } from "@mui/material";
import Sidebars from "./components/Sidebars";
import Footer from "./components/Footer";
import theme from "./styles/theme";
function App() {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      {
        //TODO: Actually fix the build version of this thing, problems with MIME type
        //TODO: Fix homepage so that it build correctly and finds the actual right thing at right place
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
