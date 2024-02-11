import PakistanLocation from "../images/pakistan.png";
import { Box } from "@mui/material";
export default function PakistanIcon() {
  return (
    <Box
      style={{
        height: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={PakistanLocation}
        height={"80px"}
        className="Image-animation"
        alt="Pakistan"
      />
    </Box>
  );
}
