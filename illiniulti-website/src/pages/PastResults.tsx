import { Box, Grid, Typography } from "@mui/material";
import ResultsTable from "../components/ResultsTable";
import Sidebars from "../components/Sidebars";

function PastResults() {
  return (
    <>
        <Typography variant="h2" align="center">
          Results
        </Typography>
        <Box m={1}>
          <ResultsTable />
        </Box>
    </>
  );
}

export default PastResults;
