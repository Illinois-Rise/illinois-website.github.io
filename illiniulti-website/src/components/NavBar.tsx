import React, {useState} from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { ArrowDropDown, Home, Sports } from '@mui/icons-material';
import { CalendarMonth } from '@mui/icons-material';
import { FormatListNumbered } from '@mui/icons-material';
import { Cancel } from '@mui/icons-material';
import { Replay } from '@mui/icons-material';
import { EmojiEvents } from '@mui/icons-material';
import { Inventory } from '@mui/icons-material';
import { Email } from '@mui/icons-material';

function NavBar(){
    const isDesktop = useMediaQuery('(min-width:1400px)');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const dropdownIconClick = (event: React.MouseEvent<HTMLElement>) => {
        setDropdownOpen(!dropdownOpen);
        setAnchorEl(event.currentTarget);
        console.log("now dropdown is " + dropdownOpen);
    }
    const handleClose = () => {
        setDropdownOpen(false);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{justifyContent: 'center'}}>
                    {isDesktop ? 
                        <>
                            <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
                            <Button color="inherit" startIcon={<InfoIcon />}>About Us</Button>
                            <Button color="inherit" startIcon={<PersonAdd />}>Prospective Players</Button>
                            <Button color="inherit" startIcon={<Sports />}>Practice</Button>
                            <Button color="inherit" startIcon={<CalendarMonth />}>Tournaments</Button>
                            <Button color="inherit" startIcon={<FormatListNumbered />}>Roster</Button>
                            <Button color="inherit" startIcon={<Cancel />}>Absent Form</Button>
                            <Button color="inherit" startIcon={<Replay />}>Team History</Button>
                            <Button color="inherit" startIcon={<EmojiEvents />}>Awards</Button>
                            <Button color="inherit" startIcon={<Inventory />}>Past Results</Button>
                            <Button color="inherit" startIcon={<Email />}>Contact Us</Button>
                            
                        </>
                        :
                        <>
                            <IconButton 
                            color="inherit" 
                            aria-label="dropdown" 
                            size="small" 
                            onClick={dropdownIconClick}>
                                <ArrowDropDown fontSize='inherit'/>
                            </IconButton>
                            <Menu
                                open={dropdownOpen}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    horizontal: 'center',
                                    vertical: 'top',
                                }}
                                transformOrigin={{
                                    horizontal: 'center',
                                    vertical: 'top',
                                }}
                                PaperProps={{
                                    style: {
                                        width: "300px",
                                    }
                                }}
                                >
                                <MenuItem>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <InfoIcon/>
                                    </ListItemIcon>
                                    <ListItemText>About Us</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd/>
                                    </ListItemIcon>
                                    <ListItemText>Prospective Players</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Sports/>
                                    </ListItemIcon>
                                    <ListItemText>Practice</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <CalendarMonth/>
                                    </ListItemIcon>
                                    <ListItemText>Tournaments</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <FormatListNumbered/>
                                    </ListItemIcon>
                                    <ListItemText>Roster</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Cancel/>
                                    </ListItemIcon>
                                    <ListItemText>Absent Form</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Replay/>
                                    </ListItemIcon>
                                    <ListItemText>Team History</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <EmojiEvents/>
                                    </ListItemIcon>
                                    <ListItemText>Awards</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Inventory/>
                                    </ListItemIcon>
                                    <ListItemText>Past Results</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Email/>
                                    </ListItemIcon>
                                    <ListItemText>Contact Us</ListItemText>
                                </MenuItem>
                            </Menu>
                        </>
                        
                    }
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;