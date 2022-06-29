import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { AWARDS_DATA } from "../data/awards/awards.data";

function AwardsTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Player</TableCell>
            <TableCell align="center">Award</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AWARDS_DATA.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.award}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AwardsTable;
