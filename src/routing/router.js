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
import Plan from "../components/home/Plan2023/plan2023.js";
import {NotFound} from "../components/notFound/NotFound";


function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute />} >
          <Route exact path="home" element={<Navigate to="performance" />} />
          <Route index element={<Navigate to="home/performance" />} />
          <Route exact path="home/performance" element={<Performance />} />
          <Route exact path="home/development" element={<Development />} />
          <Route exact path="home/plan2023" element={<Plan />} />
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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;