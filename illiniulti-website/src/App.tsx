import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Link, Outlet} from 'react-router-dom';
import './App.css';
import { Grid } from '@mui/material';


function App() {
  return (<div>
    {
      /*
      Structure will be router wrapping everything, then inside that
      Header
      Navbar
      Then routes
      
      */
      //TODO: Need to create Header
      //TODO: Need to center all the stuff
    }
    <Grid container alignItems='center'>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid item xs={12}>
        <NavBar/>
      </Grid>
      
    </Grid>
    
    <Outlet />
      
  </div>
  );
}

export default App;
