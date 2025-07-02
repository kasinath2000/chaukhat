import React from "react";
import { Box, Typography, Divider, List, ListItem, Paper } from "@mui/material";
import CustomBox from "../components/UI/CustomBox"; // Adjust the path if necessary

const issues = {
  "2025": [
    "प्रवेशांक : अप्रैल से जून",
    "दूसरा अंक : जुलाई से सितंबर",
    "तीसरा अंक : अक्टूबर से दिसंबर",
  ],
  "2026": [
    "जनवरी से अप्रैल",
    "अप्रैल से जून",
    "जुलाई से सितंबर",
    "अक्टूबर से दिसंबर",
  ],
  "2027": [
    "जनवरी से अप्रैल",
    "अप्रैल से जून",
    "जुलाई से सितंबर",
    "अक्टूबर से दिसंबर",
  ],
};

const AllIssue = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <CustomBox sx={{backgroundColor: "#EAA64D",
        overflowY: "auto",
            maxHeight: "90vh",
      }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", color: "#C83F12", mb: 4 }}
      >
        सभी अंक
      </Typography>

      {Object.entries(issues).map(([year, issuesList]) => (
        <Box key={year} sx={{ mb: 4 }}>
          <Typography variant="h5" color="primary" sx={{ mb: 1 }}>
            {year} के अंक
          </Typography>
          <Divider sx={{ borderColor: "#C83F12", mb: 2, width: "150px" }} />
          <List>
            {issuesList.map((issue, idx) => (
              <ListItem
                key={idx}
                sx={{
                  // bgcolor: "#fff",
                  mb: 1,
                  borderRadius: 2,
                  boxShadow: 1,
                  px: 2,
                  py: 1,
                  fontWeight: 500,
                }}
              >
                {issue}
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
      </CustomBox>
    </Box>
  );
};

export default AllIssue;
