// components/ContactInfoBox.jsx
import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { Email, Phone, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

const ContactInfoBox = ({ name, role, phone, email, socials }) => {
  return (
    <Box>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2" className="mb-2 text-gray-600">{role}</Typography>
      <Typography><Phone fontSize="small" /> {phone}</Typography>
      <Typography><Email fontSize="small" /> {email}</Typography>
      <Stack direction="row" spacing={1} className="mt-2">
        {socials?.linkedin && <IconButton href={socials.linkedin}><LinkedIn /></IconButton>}
        {socials?.instagram && <IconButton href={socials.instagram}><Instagram /></IconButton>}
        {socials?.twitter && <IconButton href={socials.twitter}><Twitter /></IconButton>}
      </Stack>
    </Box>
  );
};

export default ContactInfoBox;
