// src/pages/AllNotices.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import noticesData from "../data/noticesData";

const AllNotices = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        सभी सूचनाएं
      </Typography>

      {noticesData.map((notice) => (
        <Box key={notice.id} sx={{ mb: 2 }}>
          <Link to={`/notice/${notice.id}`} style={{ textDecoration: "none", color: "#210F37" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              • {notice.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {notice.date}
          </Typography>
          <Divider sx={{ my: 1 }} />
        </Box>
      ))}
    </Box>
  );
};

export default AllNotices;
