// src/Pages/Thought.jsx
import React from "react";
import { Typography, Box } from "@mui/material";

const Thought = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#C83F12" }}>
        विचार अनुभाग
      </Typography>
      <Typography sx={{ mt: 1 }}>
        कृपया दाईं ओर से कोई श्रेणी चुनें जैसे पतवार, लालटेन या मुहावरे।
      </Typography>
    </Box>
  );
};

export default Thought;
