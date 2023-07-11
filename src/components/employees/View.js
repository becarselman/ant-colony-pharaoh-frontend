import React, {useEffect, useRef, useState} from 'react';
import './Employees.scss';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import { setPageData } from './modules/actions';
import AddEmployeesModal from "./components/AddEmployeeModal/index";
import EmployeeReviewModal from "../EmployeeReviewModal/Index"
import EditEmployeeModal from "./components/EditEmployeeModal";


const Employees = ({
  dataSource,
  totalCount,
  addModalActive,
  editModalActive,
  isLoading,
  actions,
}) => {
  const [selectedEmployeeStatus, setSelectedEmployeeStatus] = useState('All Employees');
  const [searchInput, setSearchInput] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isDataModalOpen, setIsDataModalOpen] = useState(null);
  
  const handleCloseDataModal = () => {
    setIsDataModalOpen(false);
    setSelectedEmployeeId(null);
  };

  const clickedEmployeeData = useRef({})

  const handleOpenDataModal = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setIsDataModalOpen(true);
  };

  const handleEmployeeClick = (employee) => {
    clickedEmployeeData.current = employee
    handleOpenDataModal(employee.key);
  };
  const openAddEmployeeModal = () => {
    actions.openAddEmployeeModal()
  }

  const closeAddEmployeeModal = () => {
    actions.closeAddEmployeeModal()
  }

  const closeEditEmployeeModal = () => {
    clickedEmployeeData.current = {}
    actions.closeEditEmployeeModal()
  }

  const handleSearchChange = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    fetchData(1, 10);
  }, [selectedEmployeeStatus, searchInput]);

  const fetchData = (page, pageSize) => {
    if (page && pageSize) {
      actions.setPageAndPageSize(page, pageSize)
    }
    actions.fetchAllEmployees(selectedEmployeeStatus, searchInput);
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
    {isDataModalOpen && (
        <EmployeeReviewModal employeeId={selectedEmployeeId} handleClose={handleCloseDataModal} isOpen={true} parentActions={actions} />
      )}
      {
        addModalActive && (
              <AddEmployeesModal handleClose={closeAddEmployeeModal} isOpen={addModalActive} isLoading={isLoading} actions={actions} />
          )
      }
      {
        editModalActive && (
              <EditEmployeeModal handleClose={closeEditEmployeeModal} isOpen={editModalActive} employeeData={clickedEmployeeData.current} />
          )
      }
    </div>

  );
};

export default Employees;
