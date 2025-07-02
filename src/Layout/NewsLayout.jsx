import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Outlet } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard";

const newsLinks = [
  { label: "चौखट पर", href: "/newus/chaukhat-par" },
  { label: "खबर साहित्य की", href: "/newus/khabar-sahitya-ki" },
];

const pathToHeading = {
  "/newus": "चौखट पर",
  "/newus/chaukhat-par": "चौखट पर",
  "/newus/khabar-sahitya-ki": "खबर साहित्य की",
};

const NewsLayout = () => {
  const location = useLocation();
  const heading = pathToHeading[location.pathname] || "समाचार";

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
        {/* Left Spacer (hidden on mobile) */}
        <Box sx={{ width: { md: "20%" }, display: { xs: "none", md: "block" } }} />

        {/* Center Content */}
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

        {/* Right Sidebar */}
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <LinkChipCard title="समाचार अनुभाग" links={newsLinks} />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLayout;
