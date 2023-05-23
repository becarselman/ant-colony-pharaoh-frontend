import React from "react";
import LoginForm from "../components/loginform/modules/index.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import DashboardRoutes from "./dashboardRoutes";
import Dashboard from "../components/dashboard/Dashboard.js";
import Home from "../components/home/Home.js";

function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />}/>
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoutes>
              <Dashboard />
              <DashboardRoutes />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard/home" />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;
