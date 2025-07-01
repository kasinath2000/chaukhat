// src/components/UI/InfoCard.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const InfoCard = ({ image, alt, description }) => {
  return (
    <Box mb={2} sx={{ border: "2px solid white", p: 1, borderRadius: 2 }}>
      <img
        src={image}
        alt={alt}
        style={{ width: "100%", height: "auto", borderRadius: 8 }}
      />
      <Typography
        variant="body1"
        sx={{ mt: 1, fontSize: 15, lineHeight: 1.8, color: "#210F37" }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default InfoCard;
