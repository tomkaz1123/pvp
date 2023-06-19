import { AppBar, Box, Button, Divider, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../components/background/mainPageBackground1.jpg" 
import background2 from "./components/background/OIP.jfif" 


export default function Footer() {
  const navButtonStyles = {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    },
    width: 110, 
    border: '1px solid'
  }

  const navSocialStyles = {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    },
    width: 120, 
  }
  const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h7',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}




  return (
    <AppBar position='static' sx={[{borderTopLeftRadius: 5, borderTopRightRadius: 5}]} style={{backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100%'}}>
        <Box className="container" >
        <List sx={{ display: 'flex' }}>
        <Link to="/home">
          <Box sx={{width: 231, height: 72, marginLeft: 10, marginTop: 5}}>
              HOME
          </Box>
        </Link>
        <Link to="/About">
             <Box sx={{width: 231, height: 72, marginLeft: 10, marginTop: 5}}>
                About
              </Box>
            </Link>
          </List>
        </Box>
    </AppBar>
  )
}