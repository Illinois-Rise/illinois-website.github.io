import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import RosterNav from "../components/RosterNav";
import RosterSection from "../components/RosterSection";
import { ROSTER_DATA } from "../data/roster/roster.data";

function Roster() {
  const theme = useTheme();
  const navigate = useNavigate();
  const shouldRedirect = true;
  const isSmall = useMediaQuery("(max-width:1000px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    //One time direct to most recent year
    const rosterData = ROSTER_DATA;
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
      {!isMobile ? (
        <Grid container>
          <Grid item sm={isSmall ? 1 : 2} />
          <Grid item sm={isSmall ? 10 : 8} justifyContent="center">
            <Typography variant="h2" align="center">
              Roster
            </Typography>
            <Box alignContent="center">
              <RosterNav />
            </Box>
            <Outlet />
          </Grid>
          <Grid item sm={isSmall ? 1 : 2} />
        </Grid>
      ) : (
        <Box>
          <Typography variant="h2" align="center">
            Roster
          </Typography>
          <Box alignContent="center">
            <RosterNav />
          </Box>
          <Outlet />
        </Box>
      )}
    </>
  );
}

export default Roster;
