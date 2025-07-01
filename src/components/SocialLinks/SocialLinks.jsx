// components/UI/SocialLinks.jsx
import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

const socialPlatforms = [

  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/profile.php?id=100066637445017",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/chaukhat_25/",
    color: "#E1306C",
  },
  {
    name: "Twitter",
    icon: <Twitter />,
    link: "https://x.com/chaukhat_25",
    color: "#1DA1F2",
  },
  {
    name: "YouTube",
    icon: <YouTube />,
    link: "https://youtube.com/@thehindisansar?si=D7N6lmZoP4anXy6Q",
    color: "#FF0000",
  },
  {
    name: "Telegram",
    icon: <Telegram />,
    link: "https://t.me/Chaukhat_25",
    color: "#0088cc",
  },
  {
    name: "WhatsApp",
    icon: <WhatsApp />,
    link: "https://chat.whatsapp.com/GzuDwn1TPbdBW6wM5NnmMu",
    color: "#25D366",
  },
];

const SocialLinks = () => {
  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {socialPlatforms.map((platform) => (
        <Tooltip key={platform.name} title={platform.name}>
          <IconButton
            component="a"
            href={platform.link}
            target="_blank"
            rel="noopener"
            sx={{
              color: platform.color,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            {platform.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialLinks;
