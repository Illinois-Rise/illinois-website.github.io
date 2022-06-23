import { Typography, Box } from "@mui/material";
import HTMLReactParser from "html-react-parser";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HISTORY_DATA } from "../data/history/history.data";

function HistorySection() {
  const params = useParams()
  const historyData = HISTORY_DATA;
  const element = historyData.find(data => data.year.toString() == params.historyId)
  

  return (
    <>
      <Typography variant="h2">{element?.year}</Typography>
      <img src={element?.image}></img>
      <Box>
        {HTMLReactParser(element? element.summaryMarkup:"")}
      </Box>
    </>
  );
}

export default HistorySection;
