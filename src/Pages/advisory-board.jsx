import React from "react";
import { Box, Typography, Avatar, Divider, Grid } from "@mui/material";
import umesh from "../../src/assets/umesh.jpg"; // Replace with actual images
import lokesh from "../../src/assets/lokesh.jpg"; // Replace with actual images
import mahipal from "../../src/assets/mahipal.jpg";
import raman from "../../src/assets/raman.jpg";
import kajal from "../../src/assets/kajal.jpg";
import anish from "../../src/assets/anish.jpg";
import SimpleLayout from "../Layout/SimpleLayout";

const activeMembers = [
  {
    name: "उमेश कटारिया ",
    role: "उमेश कटारिया ",
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
    role: "शोधार्थी, हिन्दी विभाग ",
    location: "अलीगढ़ मुस्लिम विश्वविद्यालय , अलीगढ़, उत्तर प्रदेश",
    email: "kajal.sharma472@gmail.com",
    image: kajal,
  },
  {
    name: "रमन कुमार",
    role: "शोधार्थी, हिन्दी विभाग ",
    location: "डॉ. बी. आर. अम्बेडकर विश्वविद्यालय दिल्ली",
    email: "ramantakiyadu@gmail.com ",
    image: raman,
  },
  {
    name: "लोकेश कुमार",
    role: "शोधार्थी, हिन्दी विभाग ",
    location: "दिल्ली विश्वविद्यालय, दिल्ली ",
    email: "luckysingh29jan@gmail.com",
    image: lokesh,
  },
  // ➕ Add more members here
];

const ActiveMembers = () => {
  return (
    <SimpleLayout>

    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto", bgcolor: "#FAD59A", borderRadius: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#C83F12">
        परामर्श मंडल
      </Typography>

      <Divider sx={{ mb: 3, borderColor: "#C83F12" }} />

      <Grid container spacing={4}>
        {activeMembers.map((member, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                p: 2,
                border: "2px solid white",
                borderRadius: 2,
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                bgcolor: "#EAA64D",
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 100, height: 100, borderRadius: 2, border: "2px solid #C83F12" }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold" color="#EBD6FB">
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: 15, color: "#210F37" }}>
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
