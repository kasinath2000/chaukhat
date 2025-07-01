// components/ContactImgBox.jsx
import React from 'react';
import { Box } from '@mui/material';

const ContactImgBox = ({ src, alt }) => {
  return (
    <Box className="w-[150px] h-[200px]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-xl shadow"
      />
    </Box>
  );
};

export default ContactImgBox;
