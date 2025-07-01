import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'; // adjust path based on location

const Sidebar = () => {
  const items = [
    { label: "Overview", to: "/dashboard" },
    { label: "Users", to: "/dashboard/users" },
    // Add more as needed
  ];

  return (
    <Box
      sx={{
        width: '20%',
        minWidth: 200,
        bgcolor: '#577B8D',
        height: '100vh',
        p: 2,
        borderRight: '1px solid #ccc',
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <img
          src={logo}
          alt="Admin Logo"
          style={{
            height: 40,
            width: 40,
            borderRadius: '50%',
            backgroundColor: '#000',
          }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Admin</span>
      </Box>

      {/* Menu List */}
      <List>
        {items.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton component={NavLink} to={item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
