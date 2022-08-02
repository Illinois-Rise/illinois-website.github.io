import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebars from "../components/Sidebars";
import YearNav from "../components/YearNav";
import { TOURNAMENTS_DATA } from "../data/tournaments/tournaments.data";
function Tournaments() {
  const navigate = useNavigate();
  const shouldRedirect = true;
  //since the ROSTER_DATA goes from recent to old, have to reverse for map to order in ascending order
  //creates a shallow copy using slice()
  const reverseYears = TOURNAMENTS_DATA.slice(0).reverse();
  useEffect(() => {
    //One time direct to most recent year
    
    const rosterData = TOURNAMENTS_DATA;
    const years = rosterData.map((data) => {
      return data.year;
    });
    console.log(years);

    const recent = Math.max(...years).toString();
    console.log(recent);
    
    if (shouldRedirect) {
      navigate(recent);
    }
    
  }, []);
  
  return (
    
    <>
      <Box>
          <Typography variant="h2" align="center">
            Tournaments
          </Typography>
          <Box alignContent="center">
            <YearNav years={reverseYears}/>
          </Box>
          <Outlet />
          <Typography m={1} variant="body1">
            * Indicates bracket play not completed due to inclement weather (2019)
          </Typography>
      </Box>
    </>
  )
}

export default Tournaments;
