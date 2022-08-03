import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Grid } from "@mui/material";
import Sidebars from "./components/Sidebars";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {
        //TODO: Need to style everything
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
    </div>
  );
}

export default App;
