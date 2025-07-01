import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ Simulate login (you can add real logic here)
    localStorage.setItem("admin-auth", "true");
    navigate("/dashboard");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" mb={3}>Admin Login</Typography>
      <TextField fullWidth label="Username" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
