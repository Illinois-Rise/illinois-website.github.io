import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import HistoryNav from "../components/HistoryNav";
import { HISTORY_DATA } from "../data/history/history.data";
function TeamHistory() {
  const navigate = useNavigate();
  const shouldRedirect = true;
  useEffect(() => {
    //One time direct to most recent year
    const historyData = HISTORY_DATA;
    const years = historyData.map((data) => {
      return data.year;
    });

    const recent = Math.max(...years).toString();
    if (shouldRedirect) {
      navigate(recent);
    }
  }, []);

  return (
    <>
      <Typography variant="h2" align="center">
        Team History
      </Typography>
      <Box alignContent="center">
        <HistoryNav></HistoryNav>
      </Box>
      <Outlet />
    </>
  );
}

export default TeamHistory;
