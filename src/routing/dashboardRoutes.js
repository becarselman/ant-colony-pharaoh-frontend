import ProtectedRoutes from "./protectedRoutes";
import {Route} from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

const DashboardRoutes = () => {
  return (
    <>
      <ProtectedRoutes>
        <Route index element={<Dashboard />}/>
      </ProtectedRoutes>
    </>
  )
}

export default DashboardRoutes