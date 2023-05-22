import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import React from "react";

const ProtectedRoutes = () => {
  const storedOption = localStorage.getItem("selectedOption");

  return storedOption && storedOption !== "" ? (
    <>
      <Sidebar />
      <Dashboard selectedOption={storedOption} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
