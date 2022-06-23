import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import HistoryNav from "../components/HistoryNav";
import HistorySection from "../components/HistorySection";
function TeamHistory() {
  //TODO: Create images for the team history, thinking about routing
  //Maybe just import literally all the images in here so webpack recognizes them?
  // doesn't seem to be able to load on the fly with a `const pic = require(imagePath)
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
