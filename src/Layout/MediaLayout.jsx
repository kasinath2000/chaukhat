// src/Pages/MediaLayout.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Outlet } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard";

const mediaLinks = [
  { label: "साक्षात्कार", href: "/media/interview" },
  { label: "सांस्कृतिक कार्यक्रम", href: "/media/cultural-events" },
  { label: "रंगमंच", href: "/media/theatre" },
  { label: "सिनेमा", href: "/media/cinema" },
  { label: "चौखट पर चर्चा-परिचर्चा", href: "/media/discussions" },
  { label: "कार्यशाला", href: "/media/workshop" },
  { label: "कला कलश", href: "/media/art-corner" },
];

const pathToHeading = {
  "/media": "साक्षात्कार",
  "/media/interview": "साक्षात्कार",
  "/media/cultural-events": "सांस्कृतिक कार्यक्रम",
  "/media/theatre": "रंगमंच",
  "/media/cinema": "सिनेमा",
  "/media/discussions": "चौखट पर चर्चा-परिचर्चा",
  "/media/workshop": "कार्यशाला",
  "/media/art-corner": "कला कलश",
};

const MediaLayout = () => {
  const location = useLocation();
  const heading = pathToHeading[location.pathname] || "मीडिया";

  return (
    <Box>
      {/* 🔹 Top Heading */}
      <Box
        sx={{
          backgroundColor: "#FAD59A",
          textAlign: "center",
          py: 2,
          borderBottom: "2px solid #C83F12",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#C83F12">
          {heading}
        </Typography>
      </Box>

      {/* 🔸 Main Layout */}
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: { md: "20%" },
            display: { xs: "none", md: "block" },
          }}
        />
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            backgroundColor: "#FAD59A",
            p: 2,
            borderRadius: 2,
            minHeight: "300px",
          }}
        >
          <Outlet />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <LinkChipCard title="मीडिया अनुभाग" links={mediaLinks} />
        </Box>
      </Box>
    </Box>
  );
};

export default MediaLayout;
