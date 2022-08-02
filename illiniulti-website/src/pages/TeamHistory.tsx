import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import HistoryNav from "../components/HistoryNav";
import { HISTORY_DATA } from "../data/history/history.data";
import Sidebars from "../components/Sidebars";
function TeamHistory() {
  const isSmall = useMediaQuery("(max-width:1000px)");

  const navigate = useNavigate();
  const shouldRedirect = true;
  useEffect(() => {
    //One time direct to most recent year
    const historyData = HISTORY_DATA;
    const years = historyData.map((data) => {
      return data.year;
    });
    console.log(years);

    const recent = Math.max(...years).toString();
    console.log(recent);
    if (shouldRedirect) {
      navigate(recent);
    }
  }, []);

  // useEffect(() => {
  //   console.log(isSmall);
  // });
  // <Grid container>
  //     <Grid item sm={isSmall ? 1 : 2} />
  //     <Grid item sm={isSmall ? 10 : 8} justifyContent="center">

  //TODO: Also do the responsive mobile design for TeamHistory, maybe turn it into a component
  return (
    <>
      <Typography variant="h2" align="center">
        Team History
      </Typography>
      <Box alignContent="center">
        <HistoryNav></HistoryNav>
      </Box>
      <Outlet />
    </>
  );
}

export default TeamHistory;
