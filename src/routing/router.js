import React from "react";
import LoginForm from '../components/loginform/modules/index.js';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import ProtectedRoute from "./protectedRoute";
import Performance from "../components/home/Performance/Performance.js";
import ForgotPassword from "../components/forgotpassword/modules/index.js";
import ResetPassword from "../components/resetpassword/modules/index.js";
import Projects from "../components/projects/index.js"
import Employees from "../components/employees/index.js"
import Logout from "../components/logout/Logout";
import PublicRoute from "./publicRoute";
import EmployeeOverview from "../components/DataModal/EmployeeOverview.js";
import Development from "../components/home/devRevenueCosts/Development.js";


function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute />} >
          <Route index element={<Navigate to="performance" />} />
          <Route exact path="performance" element={<Performance />} />
          <Route exact path="development" element={<Development />} />
          <Route exact path = "projects" element={<Projects />} />
          <Route exact path="employees" element={ <Employees /> } />
          <Route exact path="logout" element={ <Logout /> } />
        </Route>

        <Route path="/" element={ <PublicRoute /> } >
          <Route index element={ <LoginForm /> } />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/forgot-password" element={<ForgotPassword/>} />
          <Route exact path="reset-password/:token" element={<ResetPassword/>} />
        </Route>
        <Route path="/overview" element={<EmployeeOverview/>}></Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;