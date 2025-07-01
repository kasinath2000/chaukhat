import React from "react";
import { Typography } from "@mui/material";
import CustomBox from "../components/UI/CustomBox"; // Adjust the path if needed

const Lantern = () => {
  return (
    <CustomBox
      sx={{
        backgroundColor: "#D6D85D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <Typography variant="h6" sx={{ color: "#C83F12", fontWeight: "bold" }}>
        Coming Soon...
      </Typography>
    </CustomBox>
  );
};

export default Lantern;
