import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../pages/Home";
import Projects from "../components/projects/View";
import Employees from "../pages/Employees";
import FinancialOverview from "../pages/FinancialOverview";
import ProjectReporting from "../pages/ProjectReporting";
import Invoicing from "../pages/Invoicing";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard/home" element={<Home />} />
      <Route path="/dashboard/projects" element={<Projects />} />
      <Route path="/dashboard/employees" element={<Employees />} />
      <Route path="/dashboard/financial" element={<FinancialOverview />} />
      <Route path="/dashboard/reporting" element={<ProjectReporting />} />
      <Route path="/dashboard/invoicing" element={<Invoicing />} />
    </Routes>
  );
};

export default DashboardRoutes;
