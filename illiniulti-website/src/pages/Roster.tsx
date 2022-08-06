import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import YearNav from "../components/YearNav";
import { ROSTER_DATA } from "../data/roster/roster.data";

function Roster() {
  const navigate = useNavigate();
  const shouldRedirect = true;
  //since the ROSTER_DATA goes from recent to old, have to reverse for map to order in ascending order
  //creates a shallow copy using slice()
  //setting data instead of using useState since state has a possible type of undefined, hard to work with
  //And don't need to constantly be updating roster data on each rerender
  const reverseYears = ROSTER_DATA.slice(0).reverse();
  useEffect(() => {
    //One time direct to most recent year

    const rosterData = ROSTER_DATA;
    const years = rosterData.map((data) => {
      return data.year;
    });

    const recent = Math.max(...years).toString();

    if (shouldRedirect) {
      navigate(recent);
    }
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h2" align="center">
          Roster
        </Typography>
        <Box alignContent="center">
          <YearNav years={reverseYears} />
        </Box>
        <Outlet />
      </Box>
    </>
  );
}

export default Roster;
