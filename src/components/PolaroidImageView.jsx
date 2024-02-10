import PolaroidImage from "./PolaroidImage";
import { Box } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
export default function PolaroidImageView() {
  const screenSize = useWindowSize();
  return (
    <Box
      style={{
        width:
          screenSize.width > 1629
            ? "20vw"
            : screenSize.width > 1024
            ? "33vw"
            : screenSize.width > 768
            ? "50vw"
            : "100vw",
      }}
    >
      <PolaroidImage />
    </Box>
  );
}
