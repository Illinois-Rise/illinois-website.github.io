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
import { ROSTER_DATA } from "../data/roster/roster.data";

function RosterSection() {
  const params = useParams();
  const rosterData = ROSTER_DATA;
  const element = rosterData.find(
    (data) => data.year.toString() === params.rosterYear
  );
  const rosterYearData = element ? element?.players : [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 50 }}>#</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right" sx={{ width: 50 }}>
              Year
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rosterYearData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.number}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RosterSection;
