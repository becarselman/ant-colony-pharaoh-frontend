import React from "react";
import LoginForm from '../components/loginform/modules/index.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//FIXME: something tells me I shouldn't import sidebar like this!?
import Sidebar from "../components/sidebar/Sidebar";
import ProtectedRoutes from "./protectedRoutes";
import Dashboard from "../components/dashboard/Dashboard";
import DashboardRoutes from "./dashboardRoutes";
import OpenModalButton from "../components/_addEmployeeModal/index";
import Projects from "../components/projects/index.js"
import Employees from "../components/employees/index.js"

function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/employees" element={ <OpenModalButton /> } />
        <Route path="*" element={<Navigate to="/dashboard" />} />

        <Route path = "/dashboard/*" element={<DashboardRoutes />} />
        <Route path = "/dashboard/projects" element={<Projects />} />
        <Route path = "/dashboard/employees" element={<Employees />} />

      </Routes>
    </Router>
  )
}

export default CustomRouter;