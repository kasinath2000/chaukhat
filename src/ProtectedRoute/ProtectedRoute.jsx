// src/utils/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("admin-auth") === "true";
  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;
