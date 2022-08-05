import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { TOURNAMENTS_DATA } from "../data/tournaments/tournaments.data";

import { TournamentYear } from "../data/tournaments/tournament.model";

function TournamentSection() {
  const params = useParams();
  console.log(params);
  const rosterData = TOURNAMENTS_DATA;
  const element = rosterData.find(
    (data) => data.year.toString() == params.tournamentYear
  );
  const tournamentYearData = element ? element?.tournaments : [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 50 }}>Season</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">When</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tournamentYearData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.season}</TableCell>
              <TableCell align="center">
                <a href={row.nameLink} target="_blank" rel="noreferrer">
                  {row.nameLabel}
                </a>
              </TableCell>
              <TableCell align="center">{row.when}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TournamentSection;
