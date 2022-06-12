import React, {useState} from 'react';
import {Menu, MenuItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { To, useNavigate } from 'react-router-dom';

//icons
import InfoIcon from '@mui/icons-material/Info';
import { ArrowDropDown, Home, Sports, PersonAdd } from '@mui/icons-material';
import { CalendarMonth } from '@mui/icons-material';
import { FormatListNumbered } from '@mui/icons-material';
import { Cancel } from '@mui/icons-material';
import { Replay } from '@mui/icons-material';
import { EmojiEvents } from '@mui/icons-material';
import { Inventory } from '@mui/icons-material';
import { Email } from '@mui/icons-material';

function DropdownMenu() {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const dropdownIconClick = (event: React.MouseEvent<HTMLElement>) => {
        setDropdownOpen(!dropdownOpen);
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setDropdownOpen(false);
        setAnchorEl(null);
    };
    const handleNavClick = (nav: To) => {
        navigate(nav)
        handleClose()
    }
    return(
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
            <MenuItem onClick={() => {handleNavClick('/home/')}}>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/aboutus/')}}>
                <ListItemIcon>
                    <InfoIcon/>
                </ListItemIcon>
                <ListItemText>About Us</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/prospective/')}}>
                <ListItemIcon>
                    <PersonAdd/>
                </ListItemIcon>
                <ListItemText>Prospective Players</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/practice/')}}>
                <ListItemIcon>
                    <Sports/>
                </ListItemIcon>
                <ListItemText>Practice</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/tournaments/')}}>
                <ListItemIcon>
                    <CalendarMonth/>
                </ListItemIcon>
                <ListItemText>Tournaments</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/roster/')}}>
                <ListItemIcon>
                    <FormatListNumbered/>
                </ListItemIcon>
                <ListItemText>Roster</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/absentform/')}}>
                <ListItemIcon>
                    <Cancel/>
                </ListItemIcon>
                <ListItemText>Absent Form</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/teamhistory/')}}>
                <ListItemIcon>
                    <Replay/>
                </ListItemIcon>
                <ListItemText>Team History</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/awards/')}}>
                <ListItemIcon>
                    <EmojiEvents/>
                </ListItemIcon>
                <ListItemText>Awards</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/pastresults/')}}>
                <ListItemIcon>
                    <Inventory/>
                </ListItemIcon>
                <ListItemText>Past Results</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {handleNavClick('/contactus/')}}>
                <ListItemIcon>
                    <Email/>
                </ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
            </MenuItem>
        </Menu>
        </>
        
    )
}

export default DropdownMenu;