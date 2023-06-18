import React from "react";
import LoginForm from '../components/loginform/modules/index.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//FIXME: something tells me I shouldn't import sidebar like this!?
import Sidebar from "../components/sidebar/Sidebar";
import ProtectedRoutes from "./protectedRoutes";
import DashboardRoutes from "./dashboardRoutes";
import Home from "../components/home/Home.js";
import ForgotPassword from "../components/forgotpassword/modules/index.js";
import ResetPassword from "../components/resetpassword/modules/index.js";
import OpenModalButton from "../components/_addEmployeeModal/index";
import Projects from "../components/projects/index.js"


function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="reset-password/:token" element={<ResetPassword/>} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/employees" element={ <OpenModalButton /> } />
        <Route path="*" element={<Navigate to="/dashboard" />} />

        <Route path = "/dashboard/*" element={<DashboardRoutes />} />
        <Route path = "/dashboard/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;