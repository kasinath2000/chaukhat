import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import sidebarItems from '../../../data/SidebarItems';

const Sidebar = () => {
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
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>Admin</span>
      </Box>

      {/* Menu List */}
      <List>
        {sidebarItems.map((item, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.to}
              sx={{
                '&.active': {
                  bgcolor: '#FAD59A',
                  color: '#210F37',
                  fontWeight: 'bold',
                },
                color: '#fff',
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
