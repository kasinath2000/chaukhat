// components/ContactBox.jsx
import React from 'react';
import { Box } from '@mui/material';

const ContactBox = ({ children, reverse = false }) => {
  return (
    <Box className="border rounded-2xl p-6 shadow-md  mx-auto max-w-4xl">
      <Box
        className={`flex flex-col md:flex-row items-center gap-6 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ContactBox;
