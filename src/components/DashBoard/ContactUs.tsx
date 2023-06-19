import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { List, ListItem, Tab, Tabs, TextField } from '@mui/material';
import React from 'react';

export default function ContactUs() {

  const [isValid, SetIsValid] = useState(false);
  const [isValidName, SetIsValidName] = useState(false);
  const [isValidText, SetIsValidText] = useState(false);

  const handleStateChange = (event: { target: { value: string; }; }) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(event.target.value))
      SetIsValid(true);
    else
      SetIsValid(false);
  };

  function handleNameChange(event: string ) {
    if(event.length > 0)
        SetIsValidName(true);
    else
        SetIsValidName(false);
  }
  function handleDescriptionChange(event: string ) {
    if(event.length > 0)
        SetIsValidText(true);
    else
        SetIsValidText(false);
  }

  const checkIt = () => {
    if(isValid) {
      if(isValidText) {
        if(isValidName)
          return true;
      }
    }
    return false;
  }

  const textStyles = {
    color: "#ffe298",
    textAlign: "center",
    fontSize:"32px",
    fontWeight:"400",
  }

  const textFieldStyles = {
    background: "rgba(14, 14, 14, 0.7)",
    borderRadius: "20px",

    input: {
      color: "#ffe298",
      fontSize:"24px",
      fontWeight:"400",
      px: "20px",
    },

    label: {
      color: "rgb(255, 226, 152, 0.5)",
      fontSize:"24px",
    }
  } 

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <Box sx={{ 
        mt: "-400px",
        mb: "100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: "column",
      }}>
        <Box sx={{ 
          background: "rgba(14, 14, 14, 0.7)",
          borderRadius: "60px", 
          p: "50px 60px",
          mb: "50px",
         }}>
          <Typography sx={[{ ...textStyles, color: "#fff", fontSize: "64px", fontWeight: "bold", mb: "40px" }]}>
            Susisiekite
          </Typography> 
          <Typography sx={{ ...textStyles }}>
            Jei turite klausimų susisiekite su mumis.
          </Typography>
        </Box>
        <Box>
          <TextField
            sx={textFieldStyles}
            margin="normal"
            fullWidth
            label="Jūsų el. pašto adresas"
            onChange={handleStateChange}
            variant="outlined"
          />
          <TextField
            sx={textFieldStyles}
            margin="normal"
            fullWidth
            label="Jūsų vardas"
            onChange={(e) => {handleNameChange(e.target.value)}}
            variant="outlined"
          />
          <TextField
            sx={textFieldStyles}
            margin="normal"
            fullWidth
            label="Parašykite kuo norite pasidomėti"
            multiline
            onChange={(e) => {handleDescriptionChange(e.target.value)}}
            rows={10}
            variant="outlined"
            inputProps={{ style: { color: "#ffe298" } }}
            
            
          />
          <Button
            disabled={!checkIt()}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,  backgroundColor: "#ffe298", color: "black" }}
          >
            Siųsti
          </Button>
        </Box>
      </Box>
    </Box>
  );}

