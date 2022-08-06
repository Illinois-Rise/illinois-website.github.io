import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { To, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
//icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Sports } from "@mui/icons-material";
import { CalendarMonth } from "@mui/icons-material";
import { FormatListNumbered } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import { Replay } from "@mui/icons-material";
import { EmojiEvents } from "@mui/icons-material";
import { Inventory } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import DropdownMenu from "./DropdownMenu";

function NavBar() {
  const isDesktop = useMediaQuery("(min-width:1500px)");
  const navigate = useNavigate();
  const handleNavClick = (nav: To) => {
    navigate(nav);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          {isDesktop ? (
            <>
              <Button
                color="inherit"
                startIcon={<HomeIcon />}
                onClick={() => {
                  handleNavClick("/home/");
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                startIcon={<InfoIcon />}
                onClick={() => {
                  handleNavClick("/aboutus/");
                }}
              >
                About Us
              </Button>
              <Button
                color="inherit"
                startIcon={<PersonAdd />}
                onClick={() => {
                  handleNavClick("/prospective/");
                }}
              >
                Prospective Players
              </Button>
              <Button
                color="inherit"
                startIcon={<Sports />}
                onClick={() => {
                  handleNavClick("/practice/");
                }}
              >
                Practice
              </Button>
              <Button
                color="inherit"
                startIcon={<CalendarMonth />}
                onClick={() => {
                  handleNavClick("/tournaments/");
                }}
              >
                Tournaments
              </Button>
              <Button
                color="inherit"
                startIcon={<FormatListNumbered />}
                onClick={() => {
                  handleNavClick("/roster/");
                }}
              >
                Roster
              </Button>
              <Button
                color="inherit"
                startIcon={<Cancel />}
                onClick={() => {
                  handleNavClick("/absentform/");
                }}
              >
                Absent Form
              </Button>
              <Button
                color="inherit"
                startIcon={<Replay />}
                onClick={() => {
                  handleNavClick("/teamhistory/");
                }}
              >
                Team History
              </Button>
              <Button
                color="inherit"
                startIcon={<EmojiEvents />}
                onClick={() => {
                  handleNavClick("/awards/");
                }}
              >
                Awards
              </Button>
              <Button
                color="inherit"
                startIcon={<Inventory />}
                onClick={() => {
                  handleNavClick("/pastresults/");
                }}
              >
                Past Results
              </Button>
              <Button
                color="inherit"
                startIcon={<Email />}
                onClick={() => {
                  handleNavClick("/contactus/");
                }}
              >
                Contact Us
              </Button>
            </>
          ) : (
            <DropdownMenu></DropdownMenu>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
