import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import navItems from "../../data/navItems";
import logo from "../../../src/assets/logo.png";
import { Link as RouterLink } from "react-router-dom"; // ✅ React Router Link
import { Link } from "@mui/material"; // Make sure to import this

// MUI icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

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
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              chaukhat
            </Typography>
          </Box>
          <Typography variant="body2">
            A platform for culture, creativity, and collaboration.
          </Typography>
        </Box>

        {/* Section 2 - Useful Links in Three Columns */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Typography variant="h6">Useful Links</Typography>
          <Divider sx={{ borderColor: "white", my: 1, width: "60px" }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <RouterLink
                key={item.label}
                to={item.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: 14,
                }}
                className="hover:text-[#FAD59A] transition-colors"
              >
                {item.label}
              </RouterLink>
            ))}
          </Box>
        </Box>

        {/* Section 3 - Social Icons */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Divider sx={{ borderColor: "white", my: 1, width: "60px" }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              href="https://wa.me/919999999999" // Replace with real number
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              href="https://t.me/yourTelegramChannel" // Replace with real channel
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <TelegramIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/yourProfile" // Replace with real profile
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100066637445017"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/chaukhat_25/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff", "&:hover": { color: "#FAD59A" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Line */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          py: 2,
          px: 2,
          borderTop: "1px solid #ffffff33",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {/* Left: Internal Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <RouterLink
            to="/privacy-policy"
            style={{ color: "#fff", fontSize: 14, textDecoration: "none" }}
          >
            Privacy Policy
          </RouterLink>
          <RouterLink
            to="/copyright-policy"
            style={{ color: "#fff", fontSize: 14, textDecoration: "none" }}
          >
            Copyright Policy
          </RouterLink>
        </Box>

        {/* Center: Copyright */}
        <Typography variant="body2" sx={{ fontSize: 14 }}>
          &copy; {new Date().getFullYear()} Chaukhat. All rights reserved.
        </Typography>

        {/* Right: External Link using MUI Link */}
        <Link
          href="https://personal-portfolio-pi-olive.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{ color: "#fff", fontSize: 14 }}
        >
          Developed & Designed by Kasinath Mandal
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
