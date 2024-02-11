import { Box, Grid, Typography } from "@mui/material";
import "./LandingPage.css";
import { useWindowSize } from "@uidotdev/usehooks";
import Skills from "../Skills";
import CustomTimeline from "../CustomTimeline";
import CustomSidebar from "../CustomSidebar";
import { useState } from "react";
import GithubIcon from "../GithubIcon";
import PersonalInfo from "../PersonalInfo";
import PakistanIcon from "../PakistanIcon";
import PolaroidImageView from "../PolaroidImageView";
import MacBookCardView from "../MacBookCardView";
import OwlIcon from "../OwlIcon";
import Copyrights from "../Copyrights";
import Cookies from 'js-cookie';
export default function LandingPage() {
  const screenSize = useWindowSize();
  const [sidebarClicked, setSidebarClicked] = useState(false);
  const [lightTheme, setLightTheme] = useState(getThemeFromCookies());
  function getThemeFromCookies() {
    const themeFromCookies = Cookies.get('theme');
    return themeFromCookies ? JSON.parse(themeFromCookies) : true; 
  }
  function setThemeInCookies(theme) {
    Cookies.set('theme', JSON.stringify(theme), { expires: 365 }); 
  }
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          height: screenSize.width > 1920 ? "50vh" : "100vh",
          background:  lightTheme ? "#59B4C3" :"#331D2C" ,
          transition: "background 0.5s ease-in-out",
        }}
      >
        <GithubIcon />
        <PersonalInfo lightTheme={lightTheme} setLightTheme={setLightTheme} setThemeInCookies={setThemeInCookies} />
        <PakistanIcon />
      </Grid>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: lightTheme ? "white" : "#A78295" }}
      >
        <Typography
          variant="h4"
          mt={10}
          mb={5}
          textAlign={"center"}
          style={{ color: lightTheme ? "black" : "white" }}
        >
          ABOUT ME
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: lightTheme ? "white" : "#A78295" }}
      >
        <Box
          mb={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: screenSize.width > 1024 ? "row" : "column",
          }}
        >
          <PolaroidImageView lightTheme={lightTheme} />
          <MacBookCardView lightTheme={lightTheme} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "100%",
          backgroundColor: lightTheme ? "#1f1f1f" : "#331D2C",
        }}
      >
        <Box mb={5} style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h4"
            mt={10}
            mb={5}
            textAlign={"center"}
            color={"white"}
          >
            Skills
          </Typography>
          <Skills lightTheme={lightTheme} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "100%",
          backgroundColor: lightTheme ? "#59B4C3" : "#A78295",
        }}
      >
        <Typography
          variant="h4"
          mt={10}
          mb={5}
          textAlign={"center"}
          color={"white"}
        >
          Experience & Education
        </Typography>
        <CustomTimeline lightTheme={lightTheme} />
      </Grid>
      <Grid item xs={12}>
        <Copyrights lightTheme={lightTheme} />
      </Grid>
      {!sidebarClicked && <OwlIcon setSidebarClicked={setSidebarClicked} />}
      <CustomSidebar
        lightTheme={lightTheme}
        sidebarClicked={sidebarClicked}
        setSidebarClicked={setSidebarClicked}
      />
    </Grid>
  );
}
