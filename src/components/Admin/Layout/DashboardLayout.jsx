// src/components/Admin/Layout/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../AdminSideBar/AdminSideBar';
import AdminNav from '../AdminNav/AdminNav';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <Box sx={{ flex: 1, bgcolor: '#577B8D' }}>
        <AdminNav />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
