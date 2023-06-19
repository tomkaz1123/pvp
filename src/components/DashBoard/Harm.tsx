import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { List, ListItem, Tab, Tabs } from '@mui/material';
import React from 'react';
import background from '../background/recycling.png'
import flower from "../Elements/flower.gif"
import { useTranslation } from "react-i18next";
import kasyba2 from "../../assets/img/kasyba2.jpg";
import harm1 from "../../assets/img/harm-1.jpg";
import harm2 from "../../assets/img/harm-2.jpg";
import harmhealth1 from "../../assets/img/harm-health-1.jpg";
import harmhealth2 from "../../assets/img/harm-health-2.jpg";
import harmwaste1 from "../../assets/img/harm-waste1.jpg";
import harmwaste2 from "../../assets/img/harm-waste2.jpg";

import DownButton from "../DownButton";

export default function Harm() {
  const { t, i18n } = useTranslation();

  const textStyles = {
    color: "#ffdb9f",
    textAlign: "center",
    fontSize:"32px",
    fontWeight:"400",
  }

  const TextTitlePageStyles = {
    color: "#000000",
    textAlign: "center",
    fontSize:"32px",
    fontWeight:"400",
    // background: "#FFDB9F",
    // borderRadius: "20px",
  }

  const companiesStyles = {
    textAlign: "left",
    fontSize:"24px",
    width: "100%",
    // background: "#FFDB9F",
    // borderRadius: "20px",
    '& a': { 
      color: "#202020",
      textDecoration: "underline",
      transition: "all 0.2s ease-in",

      '&:hover': {
        color: "#111111",
        textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
        textDecoration: "underline",
      },
    },
  }

  const titlePageBlockStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    width: '100%',
    mb: "110px",
    maxWidth:"1200px",
    background: "#ffdb9f",
    borderRadius: "15px",
  } 

  const blockStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    width: '100%',
    mb: "110px",
    maxWidth:"1200px",
    //background: "rgba(96, 54, 4, 0.7)",
    // background: "rgba(14, 14, 14, 0.7)",
    //px: "40px",
    //borderRadius: "80px",
  }  

  const imgWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: "80px",
  }

  const smallImgWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: "80px",
    transition: "all 0.5s ease-in",
    '&:hover': {
      backgroundColor: "transparent",
      transform: "scale(1.15)",
    },
  }


  const imgStyles = {
    width: "300px",
    borderRadius: "50px",
    margin: "0 40px",
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
      mt: "-700px",
      px: "40px",
    }}>
      <Box sx={{
        ...titlePageBlockStyles,
        mb: "40px",
      }}>

        <Typography sx={{
          ...TextTitlePageStyles,
          ...companiesStyles,
          textAlign: "center",
          mb: "30px",
        }}>
          {t('Harm_1')}
        </Typography>

      </Box>
      <Box sx={{
        ...titlePageBlockStyles,
      }}>
            <Typography sx={{
          ...TextTitlePageStyles,
          ...companiesStyles,
          fontSize: "36px",
          mb: "10px",    
        }}>
          {t('Harm_2')}
        </Typography>
        <Typography sx={{
          ...companiesStyles,
          mb: "0",
          zIndex: "1",
          fontSize: "32px"
        }}>
          {t('Harm_stats1')}
        </Typography>
        <Typography sx={{
          ...companiesStyles,
          mb: "0",
          zIndex: "1",
          fontSize: "32px"
        }}>
          {t('Harm_stats2')}
        </Typography>
        <Typography sx={{
          ...companiesStyles,
          mb: "0",
          zIndex: "1",
          fontSize: "32px"
        }}>
          {t('Harm_stats4')}
        </Typography>
        <Typography sx={{
          ...companiesStyles,
          mb: "0",
          zIndex: "1",
          fontSize: "32px"
        }}>
          {t('Harm_stats3')}
        </Typography>
        <Typography sx={{
          ...TextTitlePageStyles,
          mt: "10px",
          zIndex: "1",
          fontSize: "40px",
          // mb: "-20px",
        }}>
          {t('Harm_3')}
        </Typography>
       
      </Box>
      <DownButton tab={1} color="#202020" sx={{ mt: "-100px", mb: "120px", zIndex: "0" }} />
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          {t('Harm_Pollution_header')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('Harm_Pollution1')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={harm1}/>
          <img style={imgStyles} src={harm2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
        }}>
          {t('Harm_Pollution2')}
        </Typography>
      </Box>
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          {t('Harm_Health_header')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('Harm_Health_risks1')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={harmhealth1}/>
          <img style={imgStyles} src={harmhealth2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('Harm_Health_risks2')}
        </Typography>
      </Box>
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          {t('Harm_Waste_header')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('Harm_Waste1')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={harmwaste1}/>
          <img style={imgStyles} src={harmwaste2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
        }}>
          {t('Harm_Waste2')}
        </Typography>
      </Box>
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          mb: "20px",
        }}>
          {t('Harm_end')}
        </Typography>
      </Box>
    </Box>
  );}
