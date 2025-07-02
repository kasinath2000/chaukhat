import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, Outlet } from "react-router-dom";
import LinkChipCard from "../components/UI/LinkChipCard";

const rulesLinks = [
  { label: "सदस्यता", href: "/rulesbook/membership" },
  { label: "पत्रिका में प्रकाशित करने के नियम", href: "/rulesbook/publication" },
  { label: "नियम पुष्टि", href: "/rulesbook/confirmation" },
];

const pathToHeading = {
  "/rulesbook/membership": "सदस्यता",
  "/rulesbook/publication": "प्रकाशन नियम",
  "/rulesbook/confirmation": "नियम पुष्टि",
};

const RulesLayout = () => {
  const location = useLocation();
  const heading = pathToHeading[location.pathname] || "नियमावली";

  return (
    <Box>
      {/* 🔷 Top Heading */}
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

      {/* 🔶 Main Layout */}
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* Optional Left Spacer */}
        <Box
          sx={{
            width: { md: "20%" },
            display: { xs: "none", md: "block" },
          }}
        />

        {/* 🔸 Center Content */}
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

        {/* 🔸 Right Sidebar */}
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <LinkChipCard title="नियम अनुभाग" links={rulesLinks} />
        </Box>
      </Box>
    </Box>
  );
};

export default RulesLayout;
