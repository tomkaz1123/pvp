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
import imgEwaste1 from "../../assets/img/e-waste1.jpg";
import imgEwaste2 from "../../assets/img/e-waste2.jpg";
import imgEwasteSeperation1 from "../../assets/img/e-waste-separation1.jpg";
import imgEwasteSeperation2 from "../../assets/img/e-waste-separation2.jpg";
import imgEwasteSorting1 from "../../assets/img/e-waste-sorting1.jpg";
import imgEwasteSorting2 from "../../assets/img/e-waste-sorting2.jpg";

import DownButton from "../DownButton";

export default function Recycle() {
  const { t, i18n } = useTranslation();
  const textStyles = {
    color: "#202020",
    textAlign: "center",
    fontSize:"32px",
    fontWeight:"400",
  }

  const companiesStyles = {
    textAlign: "left",
    fontSize:"24px",
    width: "100%",

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

  const blockStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    width: '100%',
    mb: "110px",
    maxWidth:"1200px",
    //background: "rgba(96, 54, 4, 0.7)",
    //background: "rgba(14, 14, 14, 0.7)",
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
      mt: "-600px",
      px: "40px",
    }}>
      <Box sx={{
        ...blockStyles,
        mb: "40px",
      }}>
        <Typography sx={{
          ...textStyles,
          mb: "20px",
        }}>
          {t('recycle_subtitle1')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          ...companiesStyles,
        }}>
          <a href="https://emp.lt" target="_blank">emp.lt</a> - {t('recycle_website1_description')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          ...companiesStyles,
        }}>
          <a href="https://atliekos.lt" target="_blank">atliekos.lt</a> - {t('recycle_website2_description')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          ...companiesStyles,
        }}>
          <a href="https://epa.lt" target="_blank">epa.lt</a> - {t('recycle_website3_description')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          ...companiesStyles,
        }}>
          <a href="https://atc.lt" target="_blank">atc.lt</a> - {t('recycle_website4_description')}
        </Typography>
      </Box>
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          mb: "0",
          zIndex: "1",
          fontSize: "38px"
        }}>
          {t('recycle_subtitle2')}
        </Typography>
        <DownButton tab={1} color="#202020" sx={{ mt: "-15px", zIndex: "0" }} />
      </Box>
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          {t('recycle_subtitle3')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('recycle_hand1')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={imgEwaste1}/>
          <img style={imgStyles} src={imgEwaste2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
        }}>
          {t('recycle_hand2')}
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
          {t('recycle_subtitle4')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('recycle_shred')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={imgEwasteSorting1}/>
          <img style={imgStyles} src={imgEwasteSorting2}/>
        </Box>
      </Box>
      <Box sx={{
        ...blockStyles,
      }}>
        <Typography sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          {t('recycle_subtitle5')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('recycle_valuables1')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={imgEwasteSeperation1}/>
          <img style={imgStyles} src={imgEwasteSeperation2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
        }}>
          {t('recycle_valuables2')}
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
          {t('recycle_subtitle6')}
        </Typography>
      </Box>
    </Box>
  );}
