import React from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import navItems from "../../data/navItems";
import logo from "../../../src/assets/logo.png";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

// Dynamic social data
const socialLinks = [
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    link: "https://chat.whatsapp.com/GzuDwn1TPbdBW6wM5NnmMu",
    color: "#25D366",
  },
  {
    name: "Telegram",
    icon: <TelegramIcon />,
    link: "https://t.me/Chaukhat_25",
    color: "#0088cc",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    link: "https://x.com/chaukhat_25",
    color: "#1DA1F2",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/profile.php?id=100066637445017",
    color: "#1877F2",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    link: "https://youtube.com/@thehindisansar?si=D7N6lmZoP4anXy6Q",
    color: "#FF0000",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/chaukhat_25/",
    color: "#E1306C",
  },

  {
    name: "Email",
    icon: <EmailIcon />,
    link: "mailto:chaukhathindipatrika@gmail.com",
    color: "#EA4335",
  },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#3B060A", color: "white", mt: 8 }}>
      {/* Main Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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

        {/* Section 2 - Useful Links in 3 Columns */}
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

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            {socialLinks.map((platform) => (
              <IconButton
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: platform.color,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                {platform.icon}
              </IconButton>
            ))}
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
        <MuiLink
          href="https://personal-portfolio-pi-olive.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            color: "#ccc", // subtle light gray on dark bg
            fontSize: 14,
            transition: "color 0.3s",
            "&:hover": {
              color: "#90CAF9", // light blue on hover
            },
          }}
        >
          Developed & Designed by Kasinath Mandal
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
