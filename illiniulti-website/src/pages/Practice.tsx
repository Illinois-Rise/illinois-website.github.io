import { Typography } from "@mui/material";
import React from "react";
import PracticeTable from "../components/PracticeTable";
import Sidebars from "../components/Sidebars";
function Practice() {
  return (
    <Sidebars>
      <Typography variant="h2" align="center">
        Practice
      </Typography>
      <PracticeTable/>
    </Sidebars>
    
  );
}

export default Practice;
