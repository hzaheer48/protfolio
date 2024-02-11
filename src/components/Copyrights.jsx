import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export default function Copyrights({ lightTheme }) {
  const handleGitHubClick = () => {
    window.open("https://github.com/hzaheer48", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/hzaheer48/", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hmmdzaheer@gmail.com";
  };
  return (
    <Box
      style={{
        width: "100%",
        height: "13vh",
        backgroundColor: lightTheme ? "black" : "#331D2C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box p={2} style={{ display: "flex", flexWrap: "wrap" }}>
        <GitHubIcon
          style={{
            fontSize: "30px",
            color: "white",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={handleGitHubClick}
        />

        <LinkedInIcon
          style={{
            fontSize: "30px",
            color: "white",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={handleLinkedInClick}
        />

        <EmailIcon
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          onClick={handleEmailClick}
        />
      </Box>
      <Typography variant="body2" color={"white"}>
        &copy; 2024 Hammad Zaheer
      </Typography>
    </Box>
  );
}
