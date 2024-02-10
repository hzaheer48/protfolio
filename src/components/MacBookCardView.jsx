import { Box } from "@mui/material";
import MacBookCard from "./MacBookCard";
import { useWindowSize } from "@uidotdev/usehooks";
export default function MacBookCardView(){
    const screenSize = useWindowSize();
    return(
        <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width:
            screenSize.width > 1024
              ? "50vw"
              : screenSize.width > 768
              ? "75vw"
              : "100vw",
        }}
      >
        <MacBookCard />
      </Box>
    )
}