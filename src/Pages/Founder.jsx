import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import SimpleLayout from "../Layout/SimpleLayout";
import p1 from "../../src/assets/founder.jpg"; // Neeraj Chilwar
import p2 from "../../src/assets/founder2.jpg"; // Dr. Tarun Kumar (replace with correct image if needed)

const founders = [
  {
    name: "नीरज छिलवार",
    image: p1,
    title: "प्रधान संपादक एवं संस्थापक : चौखट पत्रिका (2025)",
    role: "संपादक : वर्धा डायरी, मासिक ई पत्रिका प्रवेशांक (2024)",
    desc: "सृजनात्मक रचनाकार, रंगकर्मी, फिल्म निर्माता-निर्देशक",
    address: "म. न : 4033, गली न: 17, अजीत नगर, गांधी नगर, दिल्ली – 110031",
    email: "talk2neeraj92@gmail.com",
    phone: "8929995706 / 9822726080",
  },
  {
    name: "डॉ. तरुण कुमार",
    image: p2,
    title: "संस्थापक - चौखट पत्रिका",
    role: "कार्यरत - जूनियर प्रोजेक्ट फेलो",
    desc: "राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद, दिल्ली",
    email: "talk2tarun89@gmail.com",
    phone: "8178401687 / 9560836978",
  },
];

const Founder = () => {
  return (
    <SimpleLayout>
      <Box sx={{ p: 4, maxWidth: 800, mx: "auto", bgcolor: "#FAD59A", borderRadius: 2 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#C83F12">
          संस्थापक
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#C83F12" }} />

        {founders.map((person, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
              mb: 4,
            }}
          >
            <Avatar
              alt={person.name}
              src={person.image}
              sx={{
                width: 150,
                height: 150,
                borderRadius: 2,
                border: "3px solid #C83F12",
                objectFit: "cover",
              }}
            />

            <Box>
              <Typography variant="h6" fontWeight="bold" color="#210F37">
                {person.name}
              </Typography>

              <Typography sx={{ mt: 1, color: "#3B060A", fontSize: 16, lineHeight: 1.8, whiteSpace: "pre-line" }}>
                {person.title}
                <br />
                {person.role}
                <br />
                {person.desc && <>{person.desc}<br /></>}
                {person.address && <><strong>पता:</strong> {person.address}<br /></>}
                <strong>ईमेल:</strong>{" "}
                <a href={`mailto:${person.email}`} style={{ color: "#C83F12", textDecoration: "underline" }}>
                  {person.email}
                </a>
                <br />
                <strong>संपर्क सूत्र:</strong> {person.phone}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SimpleLayout>
  );
};

export default Founder;
