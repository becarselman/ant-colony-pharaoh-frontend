import React from "react";
import { useOutlet, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Projects from "../projects/index.js";
import Employees from "../../pages/Employees";
import FinancialOverview from "../../pages/FinancialOverview";
import ProjectReporting from "../../pages/ProjectReporting";
import Invoicing from "../../pages/Invoicing";
import "./Dashboard.scss";
import Sidebar from "../sidebar/Sidebar";


const Dashboard = () => {
  const outlet = useOutlet();
  const location = useLocation();

  const renderPage = () => {
    switch (location.pathname) {
      case "/dashboard/home":
        return <Home />;
      case "/dashboard/projects":
        return <Projects />;
      case "/dashboard/employees":
        return <Employees />;
      case "/dashboard/financial":
        return <FinancialOverview />;
      case "/dashboard/reporting":
        return <ProjectReporting />;
      case "/dashboard/invoicing":
        return <Invoicing />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-content">{outlet || renderPage()}</div>
    </div>
  );
};

export default Dashboard;
