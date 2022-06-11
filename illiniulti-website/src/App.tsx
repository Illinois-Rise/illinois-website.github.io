import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Link, Outlet} from 'react-router-dom';
import './App.css';


function App() {
  return (<div>
    {
      /*
      Structure will be router wrapping everything, then inside that
      Header
      Navbar
      Then routes
      
      */
      
    }
    <NavBar/>
    <Outlet />
      
  </div>
  );
}

export default App;
