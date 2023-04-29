import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// HOC
export const PrivateRoute = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
