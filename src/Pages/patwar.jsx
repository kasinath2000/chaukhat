import React from "react";
import { Typography } from "@mui/material";
import CustomBox from "../components/UI/CustomBox"; // adjust path if needed

const Patwar = () => {
  return (
    <CustomBox
      sx={{
        backgroundColor: "#EAD8A4",
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

export default Patwar;
