import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import HistoryNav from "../components/HistoryNav";
import HistorySection from "../components/HistorySection";
function TeamHistory() {
  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8} justifyContent="center">
        <Typography variant="h2" align="center">
          Team History
        </Typography>
        <Box alignContent="center">
          <HistoryNav></HistoryNav>
          <HistorySection></HistorySection>
        </Box>
        <Outlet />
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
}

export default TeamHistory;
