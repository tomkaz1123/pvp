import { useEffect, useState, useRef } from "react";
import { Route, Routes, NavLink, Link, useLocation } from "react-router-dom";
import Footer from "./HeaderFooter/Footer";
import  HomePage  from "./components/DashBoard/HomePage";
import Header from "./HeaderFooter/Header";
import AboutPage from "./components/DashBoard/AboutPage";
import background from "./components/background/mainPageBackground1.jpg"
import background1 from "./components/background/WEBvirsus.png"
import background2 from "./components/background/WEBapacia.png" 
import HarmBG from "./components/background/Dark-BG-final.png"
import EcoBG from "./components/background/Eco-BG-new-new.png"
import heade from "./components/background/header.png" 
import Box from "@mui/material/Box";
import NotFound from "./errors/NotFound";
import "./App.css"
import {  CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { AppBar, Button, List, ListItem, Switch, Toolbar, Grid} from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import GoToTop from "./ScrollToTop";
import NavButton from "./components/NavButton";
import ContactUs from "./components/DashBoard/ContactUs";
import Recycle from "./components/DashBoard/Recycle";
import Harm from "./components/DashBoard/Harm";
import ReactPlayer from "react-player";
import recycleBackground from './components/background/recycling.png'
import { useTranslation } from "react-i18next";

function App() {
  function height() {
    return window.innerHeight;
  }
  const { t, i18n } = useTranslation();
  const midLinks = [
    { title: 'home', path: '/Home' },
    { title: 'about', path: '/About' }
  ]

  const navButtonStyles = {
    color: "brown",
    textDecoration: 'none',
    '&:hover': {
        color: "solid #43464B 1px",
        
    },
    '&.active': {
        color: 'text.secondary'
    },
    width: 200,
    height: 50, 
    border: '1px solid',
    borderColor: "solid #43464B 1px",
    fontSize: "20px",
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
      //backgroundImage: isRecyclePage ? `url(${recycleBackground})` : 'none',
      background: isRecyclePage ? `url(${EcoBG})` : (isHarmPage ? `url(${HarmBG})`  : 'none'),
      backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }}>
      <CssBaseline />
      <Header  />
      <Box style={{
        backgroundImage: isRecyclePage || isHarmPage ? 'none' : `url(${background2})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '100vw',
        height: '100%'
        }}>
        <Box pt={isHomePage ? 20 : 0}>
          <GoToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recycle" element={<Recycle />} />
            <Route path="/harm" element={<Harm />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
      {/* <Box sx={{backgroundColor: '#2a2726', minHeight:"80px"}}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          >
          <Grid item xs={3} sx={{alignItems:"center", justifyContent:"center", minWidth:"50px"}}>
            <Button component={Link} to="/Home" sx={navButtonStyles}>
              PAGRINDINIS
            </Button>
          </Grid>   
          <Grid item xs={3} sx={{alignItems:"center", justifyContent:"center", minWidth:"50px"}}>
            <Button component={Link} to="/About" sx={navButtonStyles}>
              APIE MUS
            </Button>
          </Grid>
          <Grid item xs={1} sx={{alignItems:"center", justifyContent:"center", minWidth:"50px"}}>
            <Button component={Link} to="/ContactUs" sx={navButtonStyles}>
              SUSISIEKITE
            </Button>
          </Grid>
        </Grid> 
      </Box> */}
    </Box>
  );
}

export default App;
