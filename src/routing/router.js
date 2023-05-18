import React from "react";
import LoginForm from '../components/loginform/modules/index.js';
import ForgotPassword from '../components/forgotpassword/modules/index.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ResetPassword from "../components/resetpassword/modules/index.js";
//FIXME: something tells me I shouldn't import sidebar like this!?
import Sidebar from "../components/sidebar/Sidebar";
import ProtectedRoutes from "./protectedRoutes";
import Dashboard from "../components/dashboard/Dashboard";
import DashboardRoutes from "./dashboardRoutes";

function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path = "/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </Router>
  )
}

export default CustomRouter;
