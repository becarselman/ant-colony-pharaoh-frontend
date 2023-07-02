import React, {useEffect, useRef, useState} from 'react';
import './Employees.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';
import AddEmployeesModal from "./components/AddEmployeeModal/index";
import EditEmployeeModal from "./components/EditEmployeeModal";

const Employees = ({
  dataSource,
  totalCount,
  isLoading,
  actions,
}) => {
  const [selectedEmployeeStatus, setSelectedEmployeeStatus] = useState('All Employees');
  const [searchInput, setSearchInput] = useState('');
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false)
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false)
  const clickedEmployeeData = useRef({})

  const openAddEmployeeModal = () => {
    setAddEmployeeModalOpen(true)
  }

  const openEditEmployeeModal = () => {
    setEditEmployeeModalOpen(true)
  }

  const closeAddEmployeeModal = () => {
    setAddEmployeeModalOpen(false)
  }

  const closeEditEmployeeModal = () => {
    clickedEmployeeData.current = {}
    setEditEmployeeModalOpen(false)
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

  const onRowClick = (employeeData) => {
    clickedEmployeeData.current = employeeData
    openEditEmployeeModal()
  }

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
        onRowClick={onRowClick}
        title="All Employees"
        showText="Employees"
      />
      <AddEmployeesModal handleClose={closeAddEmployeeModal} isOpen={addEmployeeModalOpen} isLoading={isLoading} actions={actions} />
      <EditEmployeeModal handleClose={closeEditEmployeeModal} isOpen={editEmployeeModalOpen} employeeData={clickedEmployeeData.current} />
    </div>

  );
};

export default Employees;
