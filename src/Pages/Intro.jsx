import React from 'react';
import { Box, Typography } from '@mui/material';
import introData from '../data/introData'; // adjust path if needed

const Intro = () => {
  return (
    <Box className="p-6 max-w-4xl mx-auto rounded-xl border border-white">
      <Typography variant="h5" className="mb-4 font-bold text-black">
        {introData.title}
      </Typography>

      <Typography variant="body1" className="mb-5 whitespace-pre-line text-[#37195c] leading-relaxed">
        {introData.content}
      </Typography>

      <Typography variant="subtitle1" className="mt-6 font-semibold text-blue-900">
        - {introData.author} <br />
        {introData.designation}
      </Typography>
    </Box>
  );
};

export default Intro;
