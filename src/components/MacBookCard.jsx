import React from "react";
import { Box, Typography } from "@mui/material";
const MacBookCard = () => {
  const cardStyle = {
    width: "80%",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "20px",
  };

  const headerStyle = {
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "start",
    padding: "10px",
  };

  const dotStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  };

  const redDotStyle = {
    ...dotStyle,
    backgroundColor: "#ff5f57",
    marginRight: "5px",
  };
  const yellowDotStyle = {
    ...dotStyle,
    backgroundColor: "#ffbd2e",
    marginRight: "5px",
  };
  const greenDotStyle = {
    ...dotStyle,
    backgroundColor: "#28c940",
    marginRight: "5px",
  };

  const contentStyle = {
    padding: "20px",
  };

  const textStyle = {
    marginBottom: "10px",
    color: "#555",
  };

  return (
    <Box style={cardStyle}>
      <Box style={headerStyle}>
        <Box style={redDotStyle}></Box>
        <Box style={yellowDotStyle}></Box>
        <Box style={greenDotStyle}></Box>
      </Box>
      <Box style={contentStyle}>
        <Typography variant="h4" style={textStyle}>
          Hi :)
        </Typography>
        <Typography variant="body1" style={textStyle}>
          🌐 Full-Stack Developer with a focus on MERN Stack and AI/ML
          technologies.
        </Typography>
        <Typography variant="body1" style={textStyle}>
          💡 Creative problem solver adept at blending technical expertise and
          innovation for seamless solutions.
        </Typography>
        <Typography variant="body1" style={textStyle}>
          🛠️ Proven track record of delivering robust software solutions with
          precision and reliability.
        </Typography>
        <Typography variant="body1" style={textStyle}>
          🚀 Passionate about pushing boundaries in the ever-evolving landscape
          of technology.
        </Typography>
        <Typography variant="body1" style={textStyle}>
          🤖 Enthusiastic explorer of Artificial Intelligence and Machine
          Learning realms.
        </Typography>
        <Typography variant="body1" style={textStyle}>
          📈 Committed to continuous learning and staying at the forefront of
          industry trends.
        </Typography>
      </Box>
    </Box>
  );
};

export default MacBookCard;
