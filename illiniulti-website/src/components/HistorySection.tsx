import { Typography, Box, useMediaQuery } from "@mui/material";
import HTMLReactParser from "html-react-parser";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HISTORY_DATA } from "../data/history/history.data";

function HistorySection() {
  const params = useParams()
  const historyData = HISTORY_DATA;
  const element = historyData.find(data => data.year.toString() == params.historyId)
  const isSmall = useMediaQuery("(min-width:1000px)");

  return (
    <Box sx={{
      display: "flex",
      justifyContent:"center",
      alignItems:'center',
      flexDirection: 'column'
    }}>
      <Typography variant="h2" m={1}>{element?.year}</Typography>
      {isSmall?
        <Box component="img" sx={{ width: '75%'}} src={element?.image}/>
        : <Box component="img" sx={{ width: '100%'}} src={element?.image}/>
      }
      <Box>
        {HTMLReactParser(element? element.summaryMarkup:"")}
      </Box>
    </Box>
  );
}

export default HistorySection;
