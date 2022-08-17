import { Typography } from "@mui/material";
import PracticeTable from "../components/PracticeTable";
function Practice() {
  return (
    <>
      <Typography variant="h2" align="center">
        Practice
      </Typography>
      <PracticeTable />
      <Typography align="center">
        While unlikely, times subject to change based on field availability.
      </Typography>
      <Typography align="center">
        (If on mobile, please scroll to see locations)
      </Typography>
    </>
  );
}

export default Practice;
