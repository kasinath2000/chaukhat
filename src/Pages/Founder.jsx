import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import p1 from "../../src/assets/p3.jpg"; // adjust path if needed
import SimpleLayout from "../Layout/SimpleLayout";

const Founder = () => {
  return (
    <SimpleLayout>
       <Box sx={{ p: 4, maxWidth: 800, mx: "auto", bgcolor: "#FAD59A", borderRadius: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#C83F12">
        संस्थापक
      </Typography>

      <Divider sx={{ mb: 3, borderColor: "#C83F12" }} />

      <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <Avatar
          alt="नीरज छिलवार"
          src={p1}
          sx={{ width: 150, height: 150, borderRadius: 2, border: "3px solid #C83F12" }}
        />

        <Box>
          <Typography variant="h6" fontWeight="bold" color="#210F37">
            नीरज छिलवार
          </Typography>
          <Typography sx={{ mt: 1, color: "#3B060A", fontSize: 16, lineHeight: 1.8 }}>
            प्रधान संपादक एवं संस्थापक : <strong>चौखट पत्रिका</strong> (2025)।<br />
            संपादक : वर्धा डायरी, मासिक ई पत्रिका प्रवेशांक (2024)।<br />
            सृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक।<br />
            <br />
            <strong>पता:</strong> म. न : 4033, गली न: 17, अजीत नगर, गांधी नगर, दिल्ली – 110031<br />
            <strong>ईमेल:</strong>{" "}
            <a
              href="mailto:talk2neeraj92@gmail.com"
              style={{ color: "#C83F12", textDecoration: "underline" }}
            >
              talk2neeraj92@gmail.com
            </a>
            <br />
            <strong>संपर्क सूत्र:</strong> 8929995706 / 9822726080
          </Typography>
        </Box>
      </Box>
    </Box>
    </SimpleLayout>
  );
};

export default Founder;
