import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { List, ListItem, Tab, Tabs } from '@mui/material';
import React from 'react';

export default function AboutPage() {
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
          p: "40px 60px",
          mb: "50px",
        }}>
          <Typography sx={[{ fontSize: "64px", textAlign: 'center', fontWeight: "bold", color:"white", marginBottom: "40px"}]}>
            Apie mus
          </Typography> 
          <Typography style={{ fontSize: "32px", textAlign: 'center', lineHeight: 3, color:"#ffe298" }}>
            Mes esame komanda studentų iš Kauno technologijų universiteto.
          </Typography>
        </Box>
        <Box sx={{
          background: "rgba(14, 14, 14, 0.7)",
          borderRadius: "60px", 
          p: "40px 60px",
          mb: "50px",
          maxWidth: "1000px",
        }}>
          <Typography sx={[{ fontSize: "64px", textAlign: 'center', fontWeight: "bold", marginBottom: "40px", color:"white"}]}>
            Mūsų misija
          </Typography> 
          <Typography style={{ fontSize: "32px", textAlign: 'center', lineHeight: 2, color:"#ffe298", marginBottom: "30px" }}>
            Norime išsaugoti planetą bei paversti ją švaresne ir sveikesne gyventi.
            Mes norime supažindinti visuomenę apie elektroninių atliekų žalą, perdirbimą bei jų išgavimą.
            <br></br>
          </Typography>
          <Typography style={{ fontSize: "32px", textAlign: 'center', lineHeight: 2, color:"#ffe298" }}>
            Mūsų svetainėje galite išmokti atpažinti cheminius elementus,
            sužinoti iš ko sudaromi elektroniniai įrenginiai ir kaip juos taisyklingai perdirbti.
          </Typography>
        </Box>
      </Box>
    </Box>
  );}
