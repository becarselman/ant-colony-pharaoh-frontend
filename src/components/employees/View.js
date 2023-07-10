import React, { useEffect, useState } from 'react';
import './Employees.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';
import AddEmployeesModal from "./components/AddEmployeeModal/index";
import EmployeeReviewModal from "../EmployeeReviewModal/Index"

const Employees = ({
  dataSource,
  totalCount,
  isLoading,
  actions,
}) => {
  const [selectedEmployeeStatus, setSelectedEmployeeStatus] = useState('All Employees');
  const [searchInput, setSearchInput] = useState('');
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false)
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  
  const handleCloseDataModal = () => {
    setIsDataModalOpen(false);
    setSelectedEmployeeId(null);
  };


  const handleOpenDataModal = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setIsDataModalOpen(true);
  };

  const handleEmployeeClick = (employee) => {
    handleOpenDataModal(employee.key);
  };
  const openAddEmployeeModal = () => {
    setAddEmployeeModalOpen(true)
  }

  const closeAddEmployeeModal = () => {
    setAddEmployeeModalOpen(false)
  }

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    fetchData(1, 10);
  }, [selectedEmployeeStatus, searchInput]);

  const fetchData = (page, pageSize) => {
    actions.fetchAllEmployees(page, pageSize, selectedEmployeeStatus, searchInput);
    setPageData(null);
  };

  const handleNavSelect = (label) => {
    setSelectedEmployeeStatus(label);
    fetchData(1, 10);
  };

  return (
    <div>
      <div className="page-header">
        <h2 className="employees-title">Employees</h2>
        <button className="create-employee-button" onClick={openAddEmployeeModal}>Create New Employee</button>
      </div>
      <CustomTable
        data={dataSource}
        columns={tableColumns}
        totalCount={totalCount}
        fetchData={fetchData}
        isLoading={isLoading}
        navLabels={['All Employees', 'Current', 'Past']}
        selectedNavLabel={selectedEmployeeStatus}
        onNavSelect={handleNavSelect}
        onSearchChange={handleSearchChange}
        title="All Employees"
        showText="Employees"
        onProjectClick={handleEmployeeClick}
      />
      <AddEmployeesModal handleClose={closeAddEmployeeModal} isOpen={addEmployeeModalOpen} isLoading={isLoading} actions={actions} />
      {isDataModalOpen && (
        <EmployeeReviewModal employeeId={selectedEmployeeId} handleClose={handleCloseDataModal} isOpen={true} />
      )}
    </div>

  );
};

export default Employees;
