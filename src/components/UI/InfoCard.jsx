import React from "react";
import { Box, Typography } from "@mui/material";

const InfoCard = ({ image, alt, name, role, address, email, phone }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: 2,
        p: 1.5,
        mb: 2,
        textAlign: "center",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{
          width: "100%",
          height: 300,
          objectFit: "cover", // Ensures cover fill
          borderRadius: 2,
          mb: 1.5,
        }}
      />

      {/* Name */}
      <Typography variant="subtitle1" fontWeight="bold">
        {name}
      </Typography>

      {/* Role */}
      <Typography variant="body2" sx={{ whiteSpace: "pre-line", mt: 0.5 }}>
        {role}
      </Typography>

      {/* Address */}
      {address && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          {address}
        </Typography>
      )}

      {/* Email */}
      {email && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          ✉️ {email}
        </Typography>
      )}

      {/* Phone */}
      {phone && (
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          📞 {phone}
        </Typography>
      )}
    </Box>
  );
};

export default InfoCard;
