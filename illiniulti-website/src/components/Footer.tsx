import * as React from "react";
import { AppBar, BottomNavigation, Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";
function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Typography variant="body1" align="center">For support or to report website issues, email the admin at eric.c.badger@gmail.com or the creator at kevinzhou721@gmail.com</Typography>
    </AppBar>

  );
}

export default Footer;
