import { Box, Grid, Typography } from "@mui/material";
import ResultsTable from "../components/ResultsTable";

function PastResults() {
  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8} justifyContent="center">
        <Typography variant="h2" align="center">
          Results
        </Typography>
        <Box m={1}>
          <ResultsTable />
        </Box>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
}

export default PastResults;
