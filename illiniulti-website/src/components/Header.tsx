import * as React from "react";
// import './Header.css';
import { Box, AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import RisePhoenix from "../images/RisePhoenix.png";
function Header() {
  return (
    <Box sx={{ display: "flex" }} justifyContent="center">
      {
        //The image is not flexible
      }
      <img
        src={RisePhoenix}
        alt="Illinois Rise Phoenix Logo"
        className="Logo"
        height="90px"
      ></img>
      <Typography variant="h1">Illinois Rise</Typography>
    </Box>
  );
}

export default Header;
