import React from "react";
import LoginForm from '../components/loginform/modules/index.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//FIXME: something tells me I shouldn't import sidebar like this!?
import Sidebar from "../components/sidebar/Sidebar";

function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;
