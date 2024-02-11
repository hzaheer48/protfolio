import * as React from "react";
import CustomTabs from "./CustomTabs";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";

const RightDrawer = ({ lightTheme, isOpen, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: lightTheme ? "white" : "#3F2E3E",
          maxWidth: "70%",
        },
      }}
    >
      <CustomTabs lightTheme={lightTheme} />
    </Drawer>
  );
};

export default function CustomSidebar({
  lightTheme,
  sidebarClicked,
  setSidebarClicked,
}) {
  const toggleRightDrawer = () => {
    setSidebarClicked(!sidebarClicked);
  };

  return (
    <Box>
      <RightDrawer
        lightTheme={lightTheme}
        isOpen={sidebarClicked}
        onClose={toggleRightDrawer}
      />
    </Box>
  );
}
