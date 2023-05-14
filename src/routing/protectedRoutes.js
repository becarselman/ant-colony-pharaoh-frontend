import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  let token = localStorage.getItem("accessToken")
  return token && token !== "" ? <Outlet /> : <Navigate to="/login" />;
}