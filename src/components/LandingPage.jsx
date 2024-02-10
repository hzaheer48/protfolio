import { Box, Grid, Typography } from "@mui/material";
import "./LandingPage.css";
import { useWindowSize } from "@uidotdev/usehooks";
import Skills from "./Skills";
import CustomTimeline from "./CustomTimeline";
import CustomSidebar from "./CustomSidebar";
import { useState } from "react";
import GithubIcon from "./GithubIcon";
import PersonalInfo from "./PersonalInfo";
import PakistanIcon from "./PakistanIcon";
import PolaroidImageView from "./PolaroidImageView";
import MacBookCardView from "./MacBookCardView";
import OwlIcon from "./OwlIcon";
import Copyrights from "./Copyrights";
export default function LandingPage() {
  const screenSize = useWindowSize();
  const [sidebarClicked, setSidebarClicked] = useState(false);
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          height: screenSize.width > 1920 ? "50vh" : "100vh",
          backgroundColor: "#59B4C3",
        }}
      >
        <GithubIcon/>
        <PersonalInfo/>
        <PakistanIcon/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" mt={10} mb={5} textAlign={"center"}>
          ABOUT ME
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: screenSize.width > 1024 ? "row" : "column",
          }}
        >
          <PolaroidImageView/>
          <MacBookCardView/>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        mt={5}
        style={{ height: "100%", backgroundColor: "#1f1f1f" }}
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
          <Skills />
        </Box>
      </Grid>
      <Grid item xs={12} style={{ height: "100%", backgroundColor: "#59B4C3" }}>
        <Typography
          variant="h4"
          mt={10}
          mb={5}
          textAlign={"center"}
          color={"white"}
        >
          Experience & Education
        </Typography>
        <CustomTimeline />
      </Grid>
      <Grid item xs={12}>
          <Copyrights/>
      </Grid>
      {!sidebarClicked && (
        <OwlIcon setSidebarClicked={setSidebarClicked}/>
      )}
      <CustomSidebar
        sidebarClicked={sidebarClicked}
        setSidebarClicked={setSidebarClicked}
      />
    </Grid>
  );
}
