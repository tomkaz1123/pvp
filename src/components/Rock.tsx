import React, { MouseEventHandler, useContext, useRef, useState } from 'react';
import { Route, Routes, NavLink, Link} from "react-router-dom";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { ClickAwayListener, AppBar, Button, Typography, List, ListItem, Switch, Toolbar, Grid, Popover, Popper, SxProps, Fade} from "@mui/material";
// import closedRock from "../components/Elements/akmenukas.gif"
// import openRock from "../components/Elements/atsidarymas2.gif"
import closedRock from "../Elements/Blue2.gif";
import openRock from "../Elements/Blue2-open.gif";

interface IRock {
    text: string;
    buttonStyles?: SxProps;
    positionStyles?: SxProps;
    big?: boolean;
    closedRock: string;
    openRock: string;
}

const Rock: React.FC<IRock> = ({ text, buttonStyles, positionStyles, big=false, closedRock, openRock}) => {
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const [open, setOpen] = useState(false);
    const [rock, setRock] = useState(closedRock);

    const buttonRef = useRef<HTMLElement>(null);
    const divRef = useRef<HTMLElement>(null);

    const handleClickOpen: MouseEventHandler<HTMLImageElement> = (e) => {
        setAnchorEl(e.target)
        setOpen((previousOpen) => !previousOpen)
        setRock(openRock);
    };

    const handleClickAway = (e) => {
        setOpen(false);
        setRock(closedRock);
    };

    const sx = {
        transition: "all 0.2s ease-in",
        position: "relative",

        // lol
        // '&.open:before': {
        //     content: "''",
        //     position: "absolute",
        //     background: "radial-gradient(circle farthest-side at center center, #118799 10%, rgba(255,255,255,0) 80%)",
        //     width: "100px",
        //     height: "100px",
        //     zIndex: -1,
        // },

        '&:hover': {
            color: "#111111",
            textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
            backgroundColor: "transparent",
            transform: "scale(1.04)",
        },
        ...buttonStyles,
    }

    const sx2 = {
        position: big ? "relative" : "absolute",
        ...positionStyles,
    }

    const classes = open ? "open" : "";

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={sx2}>
                <Button disableRipple={true} sx={sx} ref={buttonRef} className={classes}>
                    <img src={rock} alt="rock" width={big ? "300px" : "150px"} height={big ? "300px" : "150px"} onClick={handleClickOpen} />
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    sx={{
                        backgroundColor: "#474747",
                        padding: "15px",
                        borderRadius: "25px",
                        boxShadow: "0px 0px 10px rgba(255,255,255,0.2)",
                        zIndex: 1,
                    }}
                    >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                            <Typography sx={{
                                color: "#ffe298",
                                fontSize:"32px",
                                textAlign: "center",
                                maxWidth:"700px",
                                fontWeight:"500",
                            }}>{text}</Typography>
                        </Fade>
                    )}
                    
                </Popper>
            </Box>
        </ClickAwayListener>
    );
}

export default Rock;
