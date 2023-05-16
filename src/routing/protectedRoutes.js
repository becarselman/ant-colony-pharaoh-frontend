import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import React from "react";

const ProtectedRoutes = () => {
  //here is the core logic that prevents unauthorized access to routes
  //each protected route should have this component as parent

  let token = localStorage.getItem("accessToken")

  return token && token !== "" ?
    (
      <>
        <Sidebar />
        <Outlet />
      </>
    )
  : <Navigate to="/login" />
}

export default ProtectedRoutes