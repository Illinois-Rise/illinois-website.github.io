import { Box, Typography } from "@mui/material";
import ResultsTable from "../components/ResultsTable";

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
