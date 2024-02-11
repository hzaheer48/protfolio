import { Box, Typography } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
export default function CustomCard({ img, title, lightTheme }) {
  const screenSize = useWindowSize();
  return (
    <Box
      m={5}
      p={2}
      style={{
        borderRadius: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:
          screenSize.width > 1024
            ? "5%"
            : screenSize.width > 768
            ? "20%"
            : "25%",
        height: "10%",
        backgroundColor: lightTheme ? "#2a2929" : "#3F2E3E",
      }}
    >
      <img src={img} alt="dummy" width={"50%"} />
      <Typography mt={1} variant="body1" color={"white"}>
        {title}
      </Typography>
    </Box>
  );
}
