import "../styles/Header.css";
import { Box, Paper, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import RisePhoenix from "../images/RisePhoenix.png";
import { HeaderBackground } from "../images";

function Header() {
  const isSmall = useMediaQuery("(min-width:575px)");
  return (
    <Paper
      square={true}
      sx={{
        backgroundImage: `url(${HeaderBackground})`,
        width: "100%",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {isSmall ? (
          <img
            src={RisePhoenix}
            alt="Illinois Rise Phoenix Logo"
            className="Logo"
            height="90px"
          ></img>
        ) : (
          <></>
        )}

        <Typography align="center" className="header">
          ILLINOIS RISE
        </Typography>
      </Box>
    </Paper>
  );
}

export default Header;
