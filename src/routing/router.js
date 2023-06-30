import React from "react";
import LoginForm from '../components/loginform/modules/index.js';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import ProtectedRoute from "./protectedRoute";
import Home from "../components/home/Home.js";
import ForgotPassword from "../components/forgotpassword/modules/index.js";
import ResetPassword from "../components/resetpassword/modules/index.js";
import Projects from "../components/projects/index.js"
import Employees from "../components/employees/index.js"
import Logout from "../components/logout/Logout";
import PublicRoute from "./publicRoute";


function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute />} >
          <Route index element={<Navigate to="home" />}  />
          <Route exact path="home" element={<Home />}/>
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
          
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;