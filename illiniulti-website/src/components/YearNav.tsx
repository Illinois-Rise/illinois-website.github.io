import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { To, useNavigate } from "react-router-dom";
import { ROSTER_DATA } from "../data/roster/roster.data";
import { RosterYear } from "../data/roster/roster.model";
import { TournamentYear } from "../data/tournaments/tournament.model";
interface YearNavProps{
  years: RosterYear[]|TournamentYear[]
}
function YearNav({years}: YearNavProps) {

  const data = years
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(data.length - 1);
  const onYearClick = (year: number) => {
    setTabValue(data.findIndex((element) => element.year === year));
    navigate(year.toString());
  };

  return (
    <Tabs value={tabValue} variant="scrollable">
      {data.map((row, index) => (
        <Tab
          label={row.year}
          value={index}
          onClick={() => onYearClick(row.year)}
        />
      ))}
    </Tabs>
  );
}

export default YearNav;
