import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import React from "react";

const ProtectedRoute = () => {
    //here is the core logic that prevents unauthorized access to routes
    //each protected route should have this component as parent

    let token = localStorage.getItem("accessToken")

    return !token || token === "" ?
        (
            <>
                <div style={{width: "100%"}}>
                    <Outlet />
                </div>
            </>
        )
        : <Navigate to="/dashboard" replace />
}

export default ProtectedRoute