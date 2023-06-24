import { Navigate } from "react-router-dom";
import { logout } from "./modules/service";

const Logout = () => {
  logout()

  return (
    <Navigate to="/login" />
  );
};

export default Logout;
