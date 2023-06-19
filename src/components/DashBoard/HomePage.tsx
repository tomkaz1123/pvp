import * as React from 'react';
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem, Paper, Button, Tab, Tabs, Popover, Grid} from '@mui/material';
import GoDown from "../../ScrollDown";
import  ScrollCounter from "../../Counter"
import { Gold, Hydrogen, Helium, Lithium, Beryllium, Silver, Boron } from '../Buttons';
import { NavLink } from "react-router-dom";
import CallMadeIcon from '@mui/icons-material/CallMade';
import Rock from "../Rock";
import Sidebar from "../Sidebar";
import ismesti from "../../assets/img/ismesti.jpg";
import perdirbti from "../../assets/img/perdirbti.jpg";
import kasyba1 from "../../assets/img/kasyba1.jpg";
import kasyba2 from "../../assets/img/kasyba2.jpg";
import rafinavimas1 from "../../assets/img/rafinavimas1.jpg";
import rafinavimas2 from "../../assets/img/rafinavimas2.jpg";
import surinkimas1 from "../../assets/img/surinkimas1.jpg";
import surinkimas2 from "../../assets/img/surinkimas2.jpg";
//
import RockWhite from "../Elements/White.gif";
import RockWhiteOpen from "../Elements/White-open.gif";
import RockOrange from "../Elements/Orange.gif";
import RockOrangeOpen from "../Elements/Orange-open.gif";
import RockYellow from "../Elements/Yellow.gif";
import RockYellowOpen from "../Elements/Yellow-open.gif";
import RockGreen from "../Elements/Green.gif";
import RockGreenOpen from "../Elements/Green-open.gif";
import RockBlue from "../Elements/Blue.gif";
import RockBlueOpen from "../Elements/Blue-open.gif";
import RockBlue2 from "../Elements/Blue2.gif";
import RockBlue2Open from "../Elements/Blue2-open.gif";
//
import { useTranslation } from "react-i18next";

export default function HomePage() {

  function height() {
    return window.innerHeight;
  }
  const { t, i18n } = useTranslation();
  const textStyles = {
    color: "#ffe298",
    textAlign: "center",
    fontSize:"32px",
    fontWeight:"400",
  }

  const blockStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    width: '100%',
    mb: "150px",
    zIndex: 1,
    px: "40px",
  }

  const imgWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: "80px",
    transition: "all 0.2s ease-in",
    '&:hover': {
      backgroundColor: "transparent",
      transform: "scale(1.02)",
    },
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

  };

  const buttonStyles = {
    width: "500px",
    margin: "0 60px",
    transition: "all 0.2s ease-in",

    '&:hover': {
      backgroundColor: "transparent",
      transform: "scale(1.02)",

      'img.bad': {
        boxShadow: "0px 0px 20px rgba(255, 0, 0,0.7)",
      },

      'img.good': {
        boxShadow: "0px 0px 20px rgba(255,255,255,0.7)",
      },
    },
  }

  const buttonImgStyles = {
    transition: "all 0.2s ease-in",
    width: "100%",
    borderRadius: "50px",
  }

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
    }}>
      {/* <GoDown /> */}
      <Sidebar />
      <Box>
      <Rock
  text={t('rock_zinc')}
  positionStyles={{
    top: "100px",
    left: "350px",
  }}
  closedRock={RockWhite}
  openRock={RockWhiteOpen}
  />
  <Rock
    text={t('rock_aluminum')}
    positionStyles={{
      top: "0",
      right: "250px",
    }}
    closedRock={RockOrange}
    openRock={RockOrangeOpen}
  />
  <Rock
    text={t('rock_silver')}
    positionStyles={{
      top: "300px",
      left: "300px",
    }}
    closedRock={RockYellow}
    openRock={RockYellowOpen}
  />
  <Rock
    text={t('rock_gold')}
    positionStyles={{
      top: "500px",
      right: "300px",
    }}
    closedRock={RockGreen}
    openRock={RockGreenOpen}
  />
  <Rock
    text={t('rock_titanium')}
    positionStyles={{
      top: "800px",
      left: "200px",
    }}
    closedRock={RockBlue}
    openRock={RockBlueOpen}
  />
  <Rock
    text={t('rock_lead')}
    positionStyles={{
      top: "700px",
      right: "400px",
    }}
    closedRock={RockBlue2}
    openRock={RockBlue2Open}
  />
<Rock
  text={t('rock_copper')}
  positionStyles={{
    top: "1300px",
    left: "350px",
  }}
  closedRock={RockOrange}
  openRock={RockOrangeOpen}
/>
<Rock
  text={t('rock_cobalt')}
  positionStyles={{
    top: "1500px",
    right: "400px",
  }}
  closedRock={RockYellow}
  openRock={RockYellowOpen}
/>
<Rock
  text={t('rock_manganese')}
  positionStyles={{
    top: "1600px",
    left: "200px",
  }}
  closedRock={RockGreen}
  openRock={RockGreenOpen}
/>
<Rock
  text={t('rock_lithium')}
  positionStyles={{
    top: "1800px",
    right: "250px",
  }}
  closedRock={RockBlue}
  openRock={RockBlueOpen}
/>
<Rock
  text={t('rock_neodymium')}
  positionStyles={{
    top: "1900px",
    left: "150px",
  }}
  closedRock={RockBlue2}
  openRock={RockBlue2Open}
/>
<Rock
  text={t('rock_copper')}
  positionStyles={{
    top: "2000px",
    right: "350px",
  }}
  closedRock={RockWhite}
  openRock={RockWhiteOpen}
/>
<Rock
  text={t('rock_aluminum')}
  positionStyles={{
    top: "2500px",
    left: "340px",
  }}
  closedRock={RockOrange}
  openRock={RockOrangeOpen}
/>
<Rock
  text={t('rock_nickel')}
  positionStyles={{
    top: "2200px",
    right: "300px",
  }}
  closedRock={RockYellow}
  openRock={RockYellowOpen}
/>
<Rock
  text={t('rock_platinum')}
  positionStyles={{
    top: "2700px",
    left: "200px",
  }}
  closedRock={RockGreen}
  openRock={RockGreenOpen}
/>
<Rock
  text={t('rock_palladium')}
  positionStyles={{
    top: "2600px",
    right: "100px",
  }}
  closedRock={RockBlue}
  openRock={RockBlueOpen}
/>
      </Box>
      <Box sx={{
        ...blockStyles,
        maxWidth:"900px",
      }}>
        <Typography sx={{
          ...textStyles,
          mb: "20px",
        }}>
          {t('electronics')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "40px",
        }}>
          {t('info_about_web')}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-end',
          textAlign: "center",
          mb: "20px",
        }}>
          <Typography sx={{
            ...textStyles,
            fontSize:"64px",
            zIndex: 2,
          }}>
            {t('learn')}
            <CallMadeIcon sx={{
              fontSize:"150px",
            }} />
          </Typography>
          <Rock
          text={t('rock_info')}
          big={true}
          buttonStyles={{
            marginLeft: "-150px",
          }}
          closedRock={RockWhite}
          openRock={RockWhiteOpen}
          />
        </Box>
      </Box>

      <Box sx={{
        ...blockStyles,
        maxWidth:"1000px",
      }}>
        <Typography id="digging" sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          {t('digging')}
        </Typography>
        <Typography sx={{
          ...textStyles,
        }}>
          {t('two_ways')}
        </Typography>
        <Typography sx={{
          ...textStyles,
        }}>
          {t('underground_dig')}
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          {t('open_pit_mining')}
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={kasyba1}/>
          <img style={imgStyles} src={kasyba2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
          marginBottom: "20px",
        }}>
          Abiem būdais išsiskiria toksiškos cheminės medžiagos (cianidas, sieros rūgštis, sunkieji metalai), kurios kenkia gamtai, vandens šaltiniams ir dirvožemiui.
        </Typography>
        <Typography sx={{
          ...textStyles,
        }}>
          Dėl žemės ir uolienų šalinimo vyksta dirvožemio erozija ir naikinamos gyvūnų buveinės.
        </Typography>
      </Box>

      <Box sx={{
        ...blockStyles,
        maxWidth:"1000px",
      }}>
        <Typography id="refining" sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          Rafinavimas
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "20px",
        }}>
          Rafinavimo procesas paprastai apima priemaišų pašalinimą ir metalo gryninimą. Tam naudojami metodai:
        </Typography>
        <Typography sx={{
          ...textStyles,
        }}>
          Lydymas, kai lydomas metalas ir pašalinamos priemaišos.
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          Elektrolizė, kai naudojama elektros srovė metalui atskirti nuo kitų medžiagų.
        </Typography>
        <Box sx={smallImgWrapperStyles}>
          <img style={imgStyles} src={rafinavimas1}/>
          <img style={imgStyles} src={rafinavimas2}/>
        </Box>
        <Typography sx={{
          ...textStyles,
          marginBottom: "20px",
        }}>
          Lydymo metu gali išsiskirti oro teršalai tokie kaip sieros dioksidas ir įvairios kietosios dalelės ir susidaryti pavojingų šalutinių produktų, kurie gali kelti pavojų laukinei gamtai.
        </Typography>
        <Typography sx={{
          ...textStyles,
        }}>
          Dėl žemės ir uolienų šalinimo vyksta dirvožemio erozija ir naikinamos gyvūnų buveinės.
        </Typography>
      </Box>

      <Box sx={{
        ...blockStyles,
        maxWidth:"1000px",
      }}>
        <Typography id="manufacturing" sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          Surinkimas
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "20px",
        }}>
          Paskutinis elektronikos gamybos etapas yra surinkimas į galutinius gaminius.
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          Šiame etape naudojami įvairūs gamybos būdai, įskaitant liejimą, kalimą, štampavimą ir litavimą, kad būtų sukurti atskiri komponentai, sudarantys elektroniką.
        </Typography>
        <Box sx={{
          ...smallImgWrapperStyles,
          mb: "0",
        }}>
          <img style={imgStyles} src={surinkimas1}/>
          <img style={imgStyles} src={surinkimas2}/>
        </Box>
      </Box>

      <Box sx={{
        ...blockStyles,
        maxWidth:"1100px",
        mb: "300px"
      }}>
        <Typography id="choice" sx={{
          ...textStyles,
          fontSize:"64px",
          mb: "20px",
        }}>
          Pasirinkimas
        </Typography>
        <Typography sx={{
          ...textStyles,
        }}>
          Taigi, koks būtų jūsų pasirinkimas, kai jūsų elektronika nustos veikti?
        </Typography>
        <Typography sx={{
          ...textStyles,
          mb: "80px",
        }}>
          Išmesti ar perdirbti ir pakartotinai panaudoti?
        </Typography>
        <Box sx={imgWrapperStyles}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: "column",
          }}>
            <Typography sx={{
              ...textStyles,
              fontSize:"64px",
              mb: "20px",
            }}>
              Perdirbti
            </Typography>
            <Button sx={buttonStyles} disableRipple={true} component={NavLink} to="/recycle">
              <img style={buttonImgStyles} className="good" src={perdirbti}/>
            </Button>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: "column",
          }}>
            <Typography sx={{
              ...textStyles,
              fontSize:"64px",
              mb: "20px",
            }}>
              Išmesti
            </Typography>
            <Button sx={buttonStyles} disableRipple={true} component={NavLink} to="/harm">
              <img style={buttonImgStyles} className="bad" src={ismesti}/>
            </Button>
            
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        position: "absolute",
        bottom: "100px",
        width: "100%",
      }}>
        <Button disableRipple={true} onClick={scrollToTop} sx={{
          color: "#ffe298",
          fontSize:"64px",
          position: "relative",
          textTransform:"none",
          transition: "all 0.2s ease-in",

          "&:before": {
            content: "''",
            position: "absolute",
            borderTop: "15px solid #ffe298",
            borderLeft: "15px solid #ffe298",
            width: "100px",
            height: "100px",
            transform: "rotate(45deg)",
            right: "-50px",
            bottom: "70px",
            mr: "140px",
            transition: "all 0.2s ease-in",
          },

          "&:hover": {
            color: "#ffe49e",
            backgroundColor: "transparent",
            transform: "scale(1.02)",
            textShadow: "0px 0px 20px rgba(255,255,255,0.2)",
            "&:before": {
              mb: "10px",
            }
          }
        }}>
          {t('up')}
        </Button>
      </Box>

      {/* <Button style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: 'black',
        color:'white',
        padding: '15px',
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: '15px',
      }} onClick={() => { window.scrollTo(100000, 1000000); }}>
        Į apačią !
      </Button>
      <ScrollCounter /> */}
    </Box>
  );
}
