

import React from "react";
import { Box, Typography, Avatar, Divider, Grid } from "@mui/material";
import umesh from "../../src/assets/umesh.jpg";
import lokesh from "../../src/assets/lokesh.jpg";
import mahipal from "../../src/assets/mahipal.jpg";
import raman from "../../src/assets/raman.jpg";
import kajal from "../../src/assets/kajal.jpg";
import anish from "../../src/assets/anish.jpg";
import SimpleLayout from "../Layout/SimpleLayout";

const activeMembers = [
  {
    name: "उमेश कटारिया",
    role: "उमेश कटारिया",
    location: "विश्विद्यालय - दिल्ली विश्वविद्यालय",
    email: "katariaumesh0806@gmail.com",
    image: umesh,
  },
  {
    name: "महिपाल त्रिपाठी",
    role: "पीएचडी हिंदी शोधार्थी",
    location: "दिल्ली विश्वविद्यालय",
    email: "mahipaltripathi11@gmail.com",
    image: mahipal,
  },
  {
    name: "अनीश",
    role: "पीएचडी हिंदी शोधार्थी",
    location: "दिल्ली विश्वविद्यालय",
    email: "anish@hindi.du.ac.in",
    image: anish,
  },
  {
    name: "काजल शर्मा",
    role: "शोधार्थी, हिन्दी विभाग",
    location: "अलीगढ़ मुस्लिम विश्वविद्यालय , अलीगढ़, उत्तर प्रदेश",
    email: "kajal.sharma472@gmail.com",
    image: kajal,
  },
  {
    name: "रमन कुमार",
    role: "शोधार्थी, हिन्दी विभाग",
    location: "डॉ. बी. आर. अम्बेडकर विश्वविद्यालय दिल्ली",
    email: "ramantakiyadu@gmail.com",
    image: raman,
  },
  {
    name: "लोकेश कुमार",
    role: "शोधार्थी, हिन्दी विभाग",
    location: "दिल्ली विश्वविद्यालय, दिल्ली",
    email: "luckysingh29jan@gmail.com",
    image: lokesh,
  },
];

const ActiveMembers = () => {
  return (
    <SimpleLayout>
      <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto", bgcolor: "#FAD59A", borderRadius: 2 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#C83F12">
          सक्रिय सहयोगी सदस्य
        </Typography>

        <Divider sx={{ mb: 3, borderColor: "#C83F12" }} />

        <Grid container spacing={3}>
          {activeMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  border: "2px solid #fff",
                  bgcolor: "#EAA64D",
                  height: "100%",
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 2,
                    objectFit: "cover",
                    border: "2px solid #C83F12",
                  }}
                />
                <Box>
                  <Typography variant="h6" fontWeight="bold" color="#210F37" textAlign={{ xs: "center", sm: "left" }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "#210F37",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {member.role}
                    <br />
                    {member.location}
                    <br />
                    <strong>ई-मेल:</strong> {member.email}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SimpleLayout>
  );
};

export default ActiveMembers;
