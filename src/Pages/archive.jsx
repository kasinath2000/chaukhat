
// src/Pages/Archive.jsx
import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard";

const archiveLinks = [
  { label: "लेखक का घर", href: "/archive/authors-home" },
  { label: "लेखक की यादें", href: "/archive/authors-memories" },
  { label: "अतीत", href: "/archive/past" },
  { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
];

const Archive = () => {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        gap: 3,
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {/* Left: Dynamic Content */}
      <Box sx={{ flex: 1, backgroundColor: "#FAD59A", p: 2, borderRadius: 2 }}>
        <Outlet />
      </Box>

      {/* Right: Links */}
      <Box sx={{ width: "25%" }}>
        <LinkChipCard title="संग्रह अनुभाग" links={archiveLinks} />
      </Box>
    </Box>
  );
};

export default Archive;
