import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectRoute = ({ roles }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const userRole = user?.role;

  if (!roles.includes(userRole)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectRoute;
