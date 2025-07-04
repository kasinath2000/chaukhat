

import React from "react";
import { Box, Typography, Avatar, Divider, Grid } from "@mui/material";
import supriya from "../../src/assets/supriya.jpg";
import suravi from "../../src/assets/suravi.jpg";
import ravi from "../../src/assets/ravi.jpg";
import bijaya from "../../src/assets/bijaya.jpg";
import chandan from "../../src/assets/chandan.jpg";
import khaksha from "../../src/assets/khaksha.jpg";
import ekta from "../../src/assets/ekta.jpg";
import avinash from "../../src/assets/avinash.jpg";
import gangadhar from "../../src/assets/gangadhar.jpg";
import sunil from "../../src/assets/sunil.jpg";
import SimpleLayout from "../Layout/SimpleLayout";

const committeeMembers = [
  {
    name: "डॉ. विजया सिंह",
    position: "सहायक आचार्य, भाषाविज्ञान विभाग,",
    affiliation: "महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय, वर्धा, महाराष्ट्र",
    email: "singhvijya710@gmail.com",
    image: bijaya,
  },
  {
    name: "डॉ. अविनाश मिश्रा",
    position: "सहायक आचार्य,",
    affiliation: "दौलतराम महाविद्यालय, दिल्ली विश्वविद्यालय",
    email: "dr.avinashmishra13@gmail.com",
    image: avinash,
  },
  {
    name: "डॉ. गंगाधर शेषराव चाटे",
    position: "सहायक आचार्य, हिंदी विभाग, कला संकाय",
    affiliation: "दिल्ली विश्वविद्यालय - 110007",
    email: "gschate@hindi.du.ac.in",
    image: gangadhar,
  },
  {
    name: "डॉ. सुरभि विप्लव",
    position: "सहायक प्रोफेसर, प्रदर्शनकारी कला विभाग (फ़िल्म एवं थियेटर)",
    affiliation: "महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय, वर्धा, महाराष्ट्र",
    email: "drsurabhibiplove@gmail.com",
    image: suravi,
  },
  {
    name: "डॉ. चन्दन कुमार",
    position: "डी पी एस इंटरनेशनल,",
    affiliation: "सेक्टर 50, गुरूग्राम, हरियाणा",
    email: "Chandankumar3491@gmail.com",
    image: chandan,
  },
  {
    name: "डॉ. कहकशां",
    position: "हिंदी विभाग,",
    affiliation: "दिल्ली विश्वविद्यालय",
    email: "kahkashan.hansraj@live.com",
    image: khaksha,
  },
  {
    name: "डॉ. एकता वर्मा",
    position: "हिंदी विभाग,",
    affiliation: "दिल्ली विश्वविद्यालय",
    email: "everma.edu@gmail.com",
    image: ekta,
  },
  {
    name: "डॉ. सुनील चौधरी",
    position: "सहायक आचार्य,",
    affiliation: "गाँव+पोस्ट - बल्टीकरी, तहसील- महावन, मथुरा, उत्तरप्रदेश- 281308",
    email: "sunilsamay12@gmail.com",
    image: sunil,
  },
  {
    name: "डॉ. सुप्रिया पाठक",
    position: "ऐशोसिएट प्रोफेसर एवं अध्यक्ष, स्त्री अध्ययन विभाग,",
    affiliation: "महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय, वर्धा, महाराष्ट्र",
    email: "supriya_rajj@yahoo.co.in, supriyapathak@hindivishwa.ac.in",
    image: supriya,
  },
  {
    name: "डॉ. रवि कुमार गोंड़",
    position: "सहायक प्रोफेसर, हिन्दी विभाग",
    affiliation: "हंसराज कॉलेज, दिल्ली विश्वविद्यालय, दिल्ली - 110007",
    email: "ravigoan@gmail.com",
    image: ravi,
  },
];

const ExpertCommittee = () => {
  return (
    <SimpleLayout>
      <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto", bgcolor: "#FAD59A", borderRadius: 2 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#C83F12">
          विशेषज्ञ समिति
        </Typography>

        <Divider sx={{ mb: 3, borderColor: "#C83F12" }} />

        <Grid container spacing={3}>
          {committeeMembers.map((member, index) => (
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
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "#210F37",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {member.position}
                    <br />
                    {member.affiliation}
                    <br />
                    <strong>ईमेल:</strong> {member.email}
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

export default ExpertCommittee;
