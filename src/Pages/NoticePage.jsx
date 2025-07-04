// src/pages/NoticePage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import noticesData from "../data/noticesData";

const NoticePage = () => {
  const { id } = useParams();
  const notice = noticesData.find((n) => n.id === id);

  if (!notice) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="error">
          सूचना नहीं मिली।
        </Typography>
        <Button variant="outlined" component={Link} to="/all-notices" sx={{ mt: 2 }}>
          सभी सूचनाएं देखें
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {notice.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        प्रकाशित: {notice.date}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 2 }}>
        {notice.content}
      </Typography>

      <Button variant="contained" component={Link} to="/all-notices" sx={{ mt: 4 }}>
        ← सभी सूचनाएं
      </Button>
    </Box>
  );
};

export default NoticePage;
