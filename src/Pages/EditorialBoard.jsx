import React from "react";
import { Box, Typography, Avatar, Divider, Grid } from "@mui/material";
import p3 from "../../src/assets/p3.jpg"; // Update the path as needed
import SimpleLayout from "../Layout/SimpleLayout";

const boardMembers = [
  {
    name: "डॉ. कल्पना पाठक",
    role: "संपादक चौखट पत्रिका",
    position: "सहायक प्राध्यापक, हिन्दी विभाग",
    college: "बी. एन. कॉलेज (स्वायत्त), धुबरी, असम",
    email:
      "kalpanapathak@bncollege.co.in / jupitarapathak2014@gmail.com",
    image: p3,
  },
  // Add more members here if needed
];

const EditorialBoard = () => {
  return (
    <SimpleLayout>
<Box sx={{ p: 4, maxWidth: 1000, mx: "auto", bgcolor: "#FAD59A", borderRadius: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#C83F12">
        संपादक मण्डल
      </Typography>

      <Divider sx={{ mb: 3, borderColor: "#C83F12" }} />

      <Grid container spacing={4}>
        {boardMembers.map((member, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                p: 2,
                border: "2px solid white",
                borderRadius: 2,
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                bgcolor: "#fff",
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 100, height: 100, borderRadius: 2, border: "2px solid #C83F12" }}
              />

              <Box>
                <Typography variant="h6" fontWeight="bold" color="#210F37">
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: 14, color: "#3B060A" }}>
                  {member.role}
                  <br />
                  {member.position}
                  <br />
                  {member.college}
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

export default EditorialBoard;
