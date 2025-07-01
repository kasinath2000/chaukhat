
import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard";

const ThoughtLinks = [
  { label: "पतवार", href: "/thought/patwar" },
  { label: "लालटेन", href: "/thought/lantern" },
  { label: "मुहावरे और लोकोक्तियाँ", href: "/thought/idioms" },
];

const pathToHeading = {
  "/thought": "पतवार",
  "/thought/patwar": "पतवार",
  "/thought/lantern": "लालटेन",
  "/thought/idioms": "मुहावरे और लोकोक्तियाँ",
};

const ThoughtLayout = () => {
  const location = useLocation();
  const heading = pathToHeading[location.pathname] || "विचार";

  return (
    <Box>
      {/* Dynamic Heading */}
      <Box
        sx={{
          backgroundColor: "#FAD59A",
          textAlign: "center",
          py: 2,
          borderBottom: "2px solid #C83F12",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C83F12" }}>
          {heading}
        </Typography>
      </Box>

      {/* Main Layout */}
      <Box
        sx={{
          padding: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* Spacer */}
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            display: { xs: "none", md: "block" },
          }}
        />

        {/* Center content */}
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

        {/* Right side - Thought links */}
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <LinkChipCard title="विचार अनुभाग" links={ThoughtLinks} />
        </Box>
      </Box>
    </Box>
  );
};

export default ThoughtLayout;
