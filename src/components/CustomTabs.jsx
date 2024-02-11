import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ApiIcon from "@mui/icons-material/Api";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function CustomTabs({ lightTheme }) {
  const [value, setValue] = React.useState("projects");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const projects = [
    {
      name: "Legal Search Engine",
      language: "Python",
      link: "https://github.com/hzaheer48/LegalSearchEngine",
    },
    {
      name: "Online Shopping",
      language: "EJS, NodeJS, ExpressJS",
      link: "https://github.com/hzaheer48/OnlineShopping",
    },
    {
      name: "Amazon",
      language: "Jupyter Notebook",
      link: "https://github.com/hzaheer48/Amazon",
    },
    {
      name: "Yield Prediction",
      language: "Jupyter Notebook",
      link: "https://github.com/hzaheer48/Yield",
    },
    {
      name: "AI-Enabled Cars Price Predictor",
      language: "Python",
      link: "https://github.com/hzaheer48/AI-EnabledCarsPricePredictor",
    },
    {
      name: "Cricket Info App",
      language: "PUG, NodeJS, ExpressJS",
      link: "https://github.com/hzaheer48/CricketInfoApp",
    },
    {
      name: "Thyroid",
      language: "Jupyter Notebook",
      link: "https://github.com/hzaheer48/Thyroid",
    },
    {
      name: "Restaurant",
      language: "Jupyter Notebook",
      link: "https://github.com/hzaheer48/Restaurant",
    },
  ];
  const contactArray = [
    {
      type: "Email",
      value: "hmmdzaheer@gmail.com",
    },
    {
      type: "Phone",
      value: "+923057778734",
    },
    {
      type: "GitHub",
      value: "https://github.com/hzaheer48",
    },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/hzaheer48/",
    },
  ];
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab
              label="Projects"
              value="projects"
              style={{
                color: lightTheme ? "black" : "white",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Contact"
              value="contact"
              style={{
                color: lightTheme ? "black" : "white",
                textTransform: "capitalize",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="projects">
          <List>
            {projects.map((project, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItemIcon
                    style={{ color: lightTheme ? "black" : "white" }}
                  >
                    <ApiIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: lightTheme ? "black" : "white" }}
                    primary={project.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </TabPanel>
        <TabPanel value="contact">
          <List>
            {contactArray.map((contact, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItemIcon
                    style={{ color: lightTheme ? "black" : "white" }}
                  >
                    {contact.type === "Email" && <EmailIcon />}
                    {contact.type === "Phone" && <PhoneIcon />}
                    {contact.type === "GitHub" && <GitHubIcon />}
                    {contact.type === "LinkedIn" && <LinkedInIcon />}
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: lightTheme ? "black" : "white" }}
                    primary={contact.value}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
