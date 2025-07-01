// src/components/Layout/SimpleLayout.jsx
import React from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard"; // ✅ your chip card

const Links = [
  { label: "संस्थापक", href: "/founder" },
  { label: "संरक्षक", href: "/patron" },
  { label: " परामर्श मंडल", href: "/advisory-board" },
  { label: "संपादक मण्डल", href: "/editorial-board" },
  { label: "विशेषज्ञ समिति", href: "/expert-committee" },
  { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
];

const SimpleLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: 3,
        flexWrap: "nowrap",
      }}
    >
      {/* Left Back Button */}
      <Box sx={{ width: "5%" }}>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#fff",
            border: "2px solid #C83F12",
            color: "#C83F12",
            "&:hover": {
              backgroundColor: "#C83F12",
              color: "#fff",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Center content */}
      <Box sx={{ width: "70%", backgroundColor: "#FAD59A", p: 2, borderRadius: 2 }}>
        {children}
      </Box>

      {/* Right side Link Chips */}
      <Box sx={{ width: "25%" }}>
        <Box display="flex" flexDirection="column" gap={1}>
          <LinkChipCard title="इनके  के बारे में" links={Links} />
        </Box>
      </Box>
    </Box>
  );
};

export default SimpleLayout;
