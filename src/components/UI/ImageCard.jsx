
import React from "react";
import { Box } from "@mui/material";

const ImageCard = ({ src, alt, width = 180, height = 260 }) => {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: 2,
        overflow: "hidden",
        border: "2px solid #fff",
        flex: "0 0 auto", // prevent shrink inside scroll container
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default ImageCard;
