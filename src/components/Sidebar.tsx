import React, { MouseEventHandler, useContext, useRef, useState, useEffect } from 'react';
import { Route, Routes, NavLink, Link} from "react-router-dom";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { AppBar, Button, Typography, List, ListItem, Switch, Toolbar, Grid, Popover, Popper, SxProps, Fade} from "@mui/material";
import rock from "../components/Elements/akmenukas.gif";
import openRock from "../components/Elements/atsidarymas2.gif";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FactoryIcon from '@mui/icons-material/Factory';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MemoryIcon from '@mui/icons-material/Memory';
import { useTranslation } from "react-i18next";

interface ISidebar {

}

const Sidebar: React.FC<ISidebar> = ({  }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const buttonRef = useRef<HTMLElement>(null);

    const throttle = <T extends unknown[]>(callback: (...args: T) => void, delay: number) => {
        let lastTime = 0;
        return (...args: T) => {
            const currentTime = new Date().getTime();
            if (currentTime - lastTime >= delay) {
            callback.apply(this, args);
            lastTime = currentTime;
            }
        };
    }

    const scrollToElement = (event) => {
        let target = ""
        if (event.target.dataset.target) {
            target = event.target.dataset.target
        } else {
            target = event.target.children[0].dataset.target
        }
        const offset = document.getElementById(target)?.offsetTop ?? 0;
        window.scroll({
          top: offset + window.innerHeight + 100,
          left: 0,
          behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        const throttledHandleScroll = throttle(handleScroll, 50);

        window.addEventListener('scroll', throttledHandleScroll);

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, []);

    const boxTop = (scrollPosition / document.body.scrollHeight) * 100;

    const buttonStyles = {
        transition: "all 0.2s ease-in",
        padding: "0 20px",
        borderRadius: "30px",
        justifyContent: "flex-start",
        position: "relative",
        //ml: "100px",
        m: "15px 0",

        '&:hover': {
            color: "#111111",
            backgroundColor: "transparent",
            transform: "scale(1.02)",
        },

        '&:before': {
            content: "''",
            position: "absolute",
            background: "#614c3c",
            width: "30px",
            height: "6px",
            borderRadius: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            left: "-13px",
            //boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
            boxShadow: "0px 0px 10px rgba(255,255,255,0.4)",
            //zIndex: -1,
        }
    }

    const textStyles = {
        color: "#202020",
        textDecoration: 'none',
        textTransform: 'none',
        fontSize: "24px",
        fontWeight: "600",
        transition: "all 0.2s ease-in",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        p: "0 20px",
        textShadow: "0px 0px 5px rgba(255,255,255,0.7)",

        '&:hover': {
            color: "#111111",
            textShadow: "0px 0px 20px rgba(255,255,255,0.6)",

            '& svg': {
                filter: "drop-shadow(0px 0px 20px rgb(255 255 255 / 0.6))",
            }
        },

        '& svg': {
            mr: "20px",
            transition: "all 0.2s ease-in",
            fontSize: "48px",
            filter: "drop-shadow(0px 0px 5px rgb(255 255 255 / 0.7))",
        }
    }

    return (
        <Box sx={{
            position: "fixed",
            top: "20%",
            left: "100px",
            zIndex: 100,
        }}>
            <Box sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                //width: "100px",
                py: "10px",
            }}>
                <Box sx={{
                    position: "absolute",
                    background: "#614c3c",
                    width: "6px",
                    height: "100%",
                    borderRadius: "10px",
                    top: "0",
                    left: "0",
                    boxShadow: "0px 0px 10px rgba(255,255,255,0.7)",
                }}>
                    <Box sx={{
                        position: "absolute",
                        background: "#e3a34a",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        top: `calc(${boxTop}% - 20px)`,
                        transform: "translateX(-50%)",
                        left: "50%",
                        boxShadow: "0px 0px 10px rgba(255,255,255,0.7)",
                        zIndex: 100,
                    }}>
                    </Box>
                </Box>
                
                <Button sx={buttonStyles} onClick={scrollToElement}>
                    <Typography sx={textStyles} data-target="digging"><PrecisionManufacturingIcon /> {t('digging')}</Typography>
                </Button>
                <Button sx={buttonStyles} onClick={scrollToElement}>
                    <Typography sx={textStyles} data-target="refining"><FactoryIcon /> {t('refining')}</Typography>
                </Button>
                <Button sx={buttonStyles} onClick={scrollToElement}>
                    <Typography sx={textStyles} data-target="manufacturing"><MemoryIcon /> {t('collection')}</Typography>
                </Button>
                <Button sx={buttonStyles} onClick={scrollToElement}>
                    <Typography sx={textStyles} data-target="choice"><QuestionMarkIcon /> {t('choice')}</Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default Sidebar;
