import React from "react";
import { Box, Typography } from "@mui/material";

const ImageCard = ({ title, src, alt, width = 350, height = 500 }) => {
  return (
    <Box
      sx={{
        width,
        height,
        textAlign: "center",
        overflow: "hidden",
        border: "2px solid #fff",
        borderRadius: 2,
        p: 1,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ mb: 1, color: "#C83F12" }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: height - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageCard;
