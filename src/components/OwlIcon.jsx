import OwlImage from "../images/owl.png";
import { Box } from "@mui/material";
export default function OwlIcon({setSidebarClicked}){
    return (
        <Box
        style={{
          width: "10%",
          position: "fixed",
          top: "20%",
          right: "-5%",
          transform: "rotate(-90deg)",
          zIndex: 9999999,
        }}
      >
        <img
          onClick={() => setSidebarClicked(true)}
          src={OwlImage}
          width={"100px"}
          style={{ cursor: "pointer" }}
          alt="OwlIcon"
        ></img>
      </Box>
    )
}