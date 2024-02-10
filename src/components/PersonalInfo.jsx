import { Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SwitchButton from "./SwitchButton";
import TypingAnimation from "./TypingAnimation";
export default function PersonalInfo() {
  return (
    <Box
      style={{
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CodeIcon className="Logo-animation" style={{ fontSize: "40px",color:"white" }} />
      <Typography variant="h4" mt={3} mb={1} color="white">
        Hammad Zaheer
      </Typography>
      <TypingAnimation />
      <SwitchButton />
    </Box>
  );
}
