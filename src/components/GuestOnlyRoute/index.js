import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GuestOnlyRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  if (token) return <Navigate to="/" replace={true} />;
  return children || <Outlet />;
};

export default GuestOnlyRoute