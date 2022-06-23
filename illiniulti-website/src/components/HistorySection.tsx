import React, { useState } from "react";
import { HISTORY_DATA } from "../data/history/history.data";

function HistorySection() {
  const historyData = HISTORY_DATA;
  const element = historyData[0];
  console.log(element.image)
  return (
    <>
      <img src={element.image}></img>
    </>
  );
}

export default HistorySection;
