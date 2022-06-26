import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import HistoryNav from "../components/HistoryNav";
import { HISTORY_DATA } from "../data/history/history.data";
function TeamHistory() {
  //TODO: Navigate to most recent history page
  const navigate = useNavigate()
  const [recent, setRecent] = useState("")
  const shouldRedirect = true;
  useEffect(() => {
    const historyData = HISTORY_DATA
    const years = historyData.map(data => {
      return data.year
    })
    console.log(years)
  
    const recent = Math.max(...years).toString()
    console.log(recent)
    if (shouldRedirect) {
      navigate(recent)
    }
  }, [])
  
 
  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8} justifyContent="center">
        <Typography variant="h2" align="center">
          Team History
        </Typography>
        <Box alignContent="center">
          <HistoryNav></HistoryNav>
        </Box>
        <Outlet />
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
}

export default TeamHistory;
