import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AwardsTable from "../components/AwardsTable";

function Awards() {
  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8} justifyContent="center">
        <Typography variant="h2" align="center">
          Awards
        </Typography>
        <AwardsTable />
        <Box padding={1}>
          *All-Freshman team added in 2013, FOTY (Freshman of the Year) given to
          the All-Freshman member with the most 1st place votes
        </Box>
        <Box padding={1}>
          *Player of the year award added in 2013, POTY (Player of the Year)
          given to the All-Region member with the most 1st place votes
        </Box>
        <Box padding={1}>*COTY (Coach of the Year) added in 2009</Box>
        <Box padding={1}>*2nd-Team All Region added in 2009</Box>
        <Box padding={1}>*Awards first given out in 2002</Box>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
}

export default Awards;
