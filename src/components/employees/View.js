import React, { useEffect, useState } from 'react';
import './Employees.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';

const Employees = ({
  dataSource,
  totalCount,
  isLoading,
  actions,
}) => {
  const [selectedEmployeeStatus, setSelectedEmployeeStatus] = useState('All Employees');
  const [searchInput, setSearchInput] = useState('');

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
        <button className="create-employee-button">Create New Employee</button>
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
      />
    </div>
  );
};

export default Employees;
