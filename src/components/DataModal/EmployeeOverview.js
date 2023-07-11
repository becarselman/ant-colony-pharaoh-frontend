import React, { useEffect, useState } from 'react';
import "./ProjectOverview.scss";
import { LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import InfoCard from './InfoCard';
import data from './EmployeeData';
import ReactPortal from '../modal/Portal';
import {openEditEmployeeModal} from "../employees/modules/actions";


const EmployeeOverview = ({ handleClose, isOpen, items, deleteEmployee, parentActions }) => {

  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    document.body.style.overflow = "hidden"
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
      document.body.style.overflow = "scroll"
    };
  }, [handleClose]);


  useEffect(() => {
    if (items) {
      const initials = `${items.firstName.charAt(0)}${items.lastName.charAt(0)}`;
      setUserAvatar(initials);
    }
  }, [items]);

  if (!isOpen) return null;

  const EmployeeAvatar = items ? (
    <Avatar size={64}>{userAvatar}</Avatar>
  ) : null;

  const InfoItems = items ? (
    data?.map((item) => {
      const value = items[item?.key];
      if (item.key !== 'projects')
      return (
        <InfoCard
          key={item?.title}
          title={item?.title}
          value={value}
          render={item?.render}
        />
      );
    })
  ) : null;

  const getEmploymentTypeClass = (employmentType) => {
    if (employmentType) {
      return 'employment-type-full-time';
    } else if (employmentType === 'part-time') {
      return 'employment-type-part-time';
    } else {
      return 'employment-type';
    }
  };

  const EmploymentType = (employmentType) => {
    if (employmentType) {
      return 'Full time';
    }
    else if (employmentType === 'part-time') {
      return 'Part time';
    }
  }

  const ProjectItems = items ? (
    data?.map((item, index) => {
      let value;
      if (item?.key === 'projects') {
        const projectValues = items?.projects?.map((project, projectIndex) => ( 
          <div key={`${item.key}-${projectIndex}`} className='projects'>
            <div className='employee-projects-name'>{project.name}</div>
            <div className={getEmploymentTypeClass(project.employmentType)}>
              {EmploymentType(project.employmentType)}
            </div>
          </div>
        ));
        value = projectValues;
      }
      return value;
    })
  ) : null;
  

  const closeOverviewAndOpenEditModal = () => {
    handleClose()
    parentActions.openEditEmployeeModal()
  }
  
    
  return (
    <div className='modal-container'>
      <div className='modal'>
      <div className='info-container'>
        <div className='back-arrow' onClick={handleClose}>
          <LeftOutlined />
          Back
        </div>
        <div className='project-title'>
          <div className='profile-image'>
            {EmployeeAvatar}
          </div>
          <div className='employee-info'>
            <div className='employee-name'>
              {items?.firstName} {items?.lastName}
            </div>
            <div className='employee-department'>
              {items?.department}
            </div>
          </div>
        </div>
        <div className='project-info'>
          {InfoItems}
        </div>
        <div className='employee-projects'>
          <div className='assigned'>Assigned to projects</div>
          <div className='project-items'>{ProjectItems}</div>
        </div>
      </div>
        <div className='button-container'>
          <div className='delete-button' onClick={deleteEmployee} >Delete Employee</div>
          <div className='edit-button' onClick={closeOverviewAndOpenEditModal}>Edit Employee</div>
        </div>
        </div>
    </div>
  );
};

export default EmployeeOverview;
