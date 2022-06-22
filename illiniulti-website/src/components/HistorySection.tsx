import React, { useState } from "react";
import { HISTORY_DATA } from "../data/history/history.data";
const historyData = HISTORY_DATA;
  const element = historyData[0];
  console.log(element.imagePath)
  const picture = require(element.imagePath)
function HistorySection() {
  
  return (
    <>
      <img src={picture}></img>
    </>
  );
}

export default HistorySection;
