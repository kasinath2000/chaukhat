import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    setAnchorEl(null);
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#577B8D' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Dashboard</Typography>
        
        <Avatar
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ cursor: 'pointer', bgcolor: '#FAD59A', color: '#3B060A' }}
        >
          A
        </Avatar>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNav;
