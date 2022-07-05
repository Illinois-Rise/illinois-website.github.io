import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { RESULTS_DATA } from "../data/results/results.data";

function ResultsTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Sectionals</TableCell>
            <TableCell>Regionals</TableCell>
            <TableCell>Nationals</TableCell>
            <TableCell align="center">Team Page</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RESULTS_DATA.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.sectionals}</TableCell>
              <TableCell>{row.regionals}</TableCell>
              <TableCell>{row.nationals}</TableCell>
              <TableCell align="center">
                <a href={row.teamPageLink} target="_blank" rel="noreferrer">
                  {row.teamPageLabel}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultsTable;
