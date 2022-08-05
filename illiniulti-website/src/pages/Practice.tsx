import { Typography } from "@mui/material";
import React from "react";
import PracticeTable from "../components/PracticeTable";
import Sidebars from "../components/Sidebars";
function Practice() {
  return (
    <>
      <Typography variant="h2" align="center">
        Practice
      </Typography>
      <PracticeTable />
    </>
  );
}

export default Practice;
