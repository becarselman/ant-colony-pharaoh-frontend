import React, { useEffect } from 'react';
import "./DataInfo.scss";
import { LeftOutlined } from '@ant-design/icons';
import InfoCard from './InfoCard';
import data from './Data';

const DataInfo = ({ handleClose, isOpen, items, employees }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  const InfoItems = items ? (
    data.map((item) => (
      <InfoCard
        key={item.title}
        title={item.title}
        value={JSON.stringify(items[item.key])}
        render={item.render}
      />
    ))
  ) : null;

  return (
    <div className='modal-container'>
      <div className='info-container'>
        <div className='back-arrow' onClick={handleClose}>
          <LeftOutlined />
          Back
        </div>
        <div className='project-title'>
          {items.name}
        </div>
        <div className='project-info'>
          {InfoItems}
        </div>
        <div className='button-container'>
          <div className='delete-button'>Delete Project</div>
          <div className='edit-button'>Edit Project</div>
        </div>
      </div>
    </div>
  );
};

export default DataInfo;
