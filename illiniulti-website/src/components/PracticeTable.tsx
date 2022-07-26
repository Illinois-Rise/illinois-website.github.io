import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { PRACTICE_DATA } from "../data/practice/practice.data";
  
  function PracticeTable() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Season</TableCell>
              <TableCell align="center">What</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">When</TableCell>
              <TableCell align="center">Where</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PRACTICE_DATA.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.season}</TableCell>
                <TableCell align="center">{row.what}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.when}</TableCell>
                <TableCell align="center">
                    <a href={row.locationLink} target="_blank" rel="noreferrer">
                        {row.locationLabel}
                    </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default PracticeTable;
