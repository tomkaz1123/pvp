import * as React from 'react';
import { Route, Routes, NavLink, Link} from "react-router-dom";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { AppBar, Button, List, ListItem, Switch, Toolbar, Grid, SxProps} from "@mui/material";

interface INavButton {
    name: string;
    link: string;
    sx?: SxProps;
    disableRipple?: boolean;
}

const NavButton: React.FC<INavButton> = ({ name, link, sx={}, disableRipple=false }) => {
    const navButtonStyles = {
        color: "#202020",
        textDecoration: 'none',
        textTransform: 'none',
        fontSize: "32px",
        fontWeight: "600",
        borderRadius: "30px",
        transition: "all 0.2s ease-in",
        padding: "10px 20px",

        '&:hover': {
            color: "#111111",
            textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
            backgroundColor: "transparent",
            transform: "scale(1.02)",
        },
        ...sx,
    }

    return (
        <Button disableRipple={disableRipple} component={NavLink} to={link} sx={navButtonStyles}>
            {name}
        </Button>
    );
}

export default NavButton;
