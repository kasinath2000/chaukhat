


import React from "react";
import { Box, Typography, Link, Stack, Divider,IconButton } from "@mui/material";
import navItems from "../../data/navItems";
import logo from "../../../src/assets/logo.png"; // adjust if needed
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#3B060A", color: "white", mt: 8 }}>
      {/* Main Footer Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: 4,
          gap: 4,
        }}
      >
        {/* Section 1 - Logo & Description */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <img
              src={logo}
              alt="Chaukhat Logo"
              style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "black" }}
            />
            <Typography variant="h6" fontWeight="bold">
              chaukhat
            </Typography>
          </Box>
          {/* <Divider sx={{ borderColor: "white", my: 1, width: "60px" }} /> */}
          <Typography variant="body2">
            A platform for culture, creativity, and collaboration.
          </Typography>
        </Box>

        {/* Section 2 - Useful Links in Two Columns */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Typography variant="h6">Useful Links</Typography>
          <Divider sx={{ borderColor: "white", my: 1, width: "60px" }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="hover"
                color="inherit"
                sx={{
                  "&:hover": { color: "#FAD59A" },
                  fontSize: 14,
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>

    
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Divider sx={{ borderColor: "white", my: 1, width: "60px" }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100066637445017"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="#"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/chaukhat_25/"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
          {/* Divider below Follow Us */}
        </Box>
      </Box>

      {/* Footer Bottom Line */}
      <Box sx={{ textAlign: "center", py: 2, borderTop: "1px solid #ffffff33" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Chaukhat. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
