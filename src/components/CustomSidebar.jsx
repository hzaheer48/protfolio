import * as React from "react";
import CustomTabs from "./CustomTabs";
import Drawer from "@mui/material/Drawer";

const RightDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose} 
    
    PaperProps={{
      sx: { maxWidth: "70%" },
    }}>
      <CustomTabs />
    </Drawer>
  );
};

export default function CustomSidebar({ sidebarClicked, setSidebarClicked }) {
  const toggleRightDrawer = () => {
    setSidebarClicked(!sidebarClicked);
  };

  return (
    <div>
      <RightDrawer isOpen={sidebarClicked} onClose={toggleRightDrawer} />
    </div>
  );
}
