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
import { useTranslation } from "react-i18next";

interface IDownButton {
    tab: number;
    sx?: SxProps;
    color?: string;
}

const DownButton: React.FC<IDownButton> = ({ tab, color="#ffe298", sx={} }) => {
    const { t, i18n } = useTranslation();

    function height() {
        return window.innerHeight;
    }

    const scrollToFirst = () => {
        window.scroll({
          top: tab * height(),
          left: 0,
          behavior: 'smooth'
        });
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            width: "100%",
            ...sx,
        }}>
            <Button disableRipple={true} onClick={scrollToFirst} sx={{
                color: {color},
                fontSize:"64px",
                position: "relative",
                textTransform:"none",
                transition: "all 0.2s ease-in",

                "&:before": {
                    content: "''",
                    position: "absolute",
                    borderColor: {color},
                    borderLeft: "15px solid",
                    borderBottom: "15px solid",
                    width: "100px",
                    height: "100px",
                    transform: "rotate(-45deg) translateX(50%)",
                    left: "-50%",
                    top: "100px",
                    marginLeft: "120px",
                    transition: "all 0.2s ease-in",
                },

                "&:hover": {
                    color: {color},
                    backgroundColor: "transparent",
                    transform: "scale(1.02)",
                    textShadow: "0px 0px 20px rgba(255,255,255,0.2)",
                    "&:before": {
                        marginTop: "10px",
                    }
                }
            }}>
                {t('down')}
            </Button>
        </Box>
    );
}

export default DownButton;
