
import { useRef } from "react";
import { AppBar, Box, Button, Typography, List, ListItem, Switch, Toolbar, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, NavLink, useLocation } from "react-router-dom";
import background from "../components/background/header.png"
import NavButton from "../components/NavButton";
import background1 from "../components/background/WEBvirsus.png"
import background2 from '../components/background/recycling.png'
import { useTranslation } from "react-i18next";
import DownButton from "../components/DownButton";

export default function Header() {
    const url = window.location.href

    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (event: SelectChangeEvent) => {
        console.log(i18n.language
        )
        const languageValue = event.target.value
        i18n.changeLanguage(languageValue);
    };

    function height() {
        return window.innerHeight;
    }

    const scrollToFirst = () => {
        window.scroll({
            top: height(),
            left: 0,
            behavior: 'smooth'
        });
    }

    const route = useLocation();
    const isRecyclePage = route.pathname == "/recycle";
    const isHarmPage = route.pathname == "/harm";
    const isHomePage = route.pathname == "/";

    return (
        <Box sx={{
            backgroundImage: isRecyclePage || isHarmPage ? 'none' : `url(${background1})`,
            backgroundPosition: 'bottom center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '99vw',
            height: height(),
            /// overflowY: 'scroll',
            // scrollbar be wilding? su kalbos keitimu issijungia
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-between",
                paddingTop: "50px",
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "space-around",
                    flexGrow: 1,
                    pl: "80px",
                    pr: "40px",

                }}>
                    <NavButton name={t('main_header1')} link="/" sx={
                        {textTransform: 'uppercase'}
                    }/>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "flex-end",
                        gap: '10px',
                        flexGrow: 1,
                        // px: "0px",
                    }}>
                        <NavButton name={t('danger_for_nature')} link="/harm" />
                        <NavButton name={t('recycle')} link="/recycle" />
                        <NavButton name={t('contact')} link="/contact" />
                        <NavButton name={t('about_us')} link="/about" />
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "space-around",
                    px: "80px",
                    //flexGrow: 1,
                }}>
                    <FormControl>
                        <Select
                            labelId="language-select-label"
                            value={i18n.language}
                            label={t('language')}
                            onChange={changeLanguageHandler}
                            variant="standard"
                            sx={{
                                color: "#202020",
                                fontSize: "24px",
                                fontWeight: "600",
                                textTransform: "none",
                                transition: "all 0.2s ease-in",

                                "&:before": {
                                    transition: "all 0.2s ease-in",
                                    borderBottom: "2px solid #202020",
                                },

                                "&:after": {
                                    transition: "all 0.2s ease-in",
                                    borderBottom: "2px solid #202020",
                                },

                                "&:hover": {
                                    borderColor: "#111111",
                                    textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
                                    backgroundColor: "transparent",
                                    transform: "scale(1.02)",
                                },

                                "&:focus": {
                                    borderColor: "#111111",
                                    textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
                                    backgroundColor: "transparent",
                                    transform: "scale(1.02)",
                                },
                            }}
                        >
                            <MenuItem value="en">EN</MenuItem>
                            <MenuItem value="lt">LT</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
            }}>
                <NavButton name={!isRecyclePage && !isHarmPage ? t('main_header1') : (isHarmPage ? t('danger_for_nature') : t('recycle'))} link="/" sx={{ fontSize: "100px", marginTop: !isHomePage ? "50px" : "100px", fontWeight: "400", textTransform: "uppercase" }} disableRipple={true} />
            </Box>
            
            

            {!isRecyclePage && !isHarmPage && (<Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                marginTop: "5px",
            }}>
                <Typography sx={{
                    color: "#202020",
                    fontSize: "32px",
                    textAlign: "center",
                    maxWidth: "700px",
                    fontWeight: "600",
                    textShadow: "0px 0px 2px rgba(255,255,255,0.6)",
                }}>
                    {t("h2")}
                </Typography>
            </Box>)}

            {isHomePage && <DownButton tab={1} sx={{
                position: "absolute",
                bottom: "100px",
            }} />}

            {/* <iframe title='Tons of electronic waste thrown out' src='https://www.theworldcounts.com/embeds/counters/18?font_size=20' style={{border: 'none'}} height='150' width='300'></iframe> */}

            {/* <Box sx={{alignContent:"center", justifyContent:"center"}}>
                <ReactPlayer url="https://www.facebook.com/StartupSpace/videos/960261018273506/" />
            </Box>  */}
        </Box>
    );
}
