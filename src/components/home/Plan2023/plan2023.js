import React from 'react';
import { useState } from 'react';
import './Plan.scss';
import { Select, Table } from 'antd';
import { dataSource, columns, expensesColumns, expensesData } from './Data';
import { useNavigate } from "react-router-dom"

const { Option } = Select;

const Plan = () => {
  const [selectedOption, setSelectedOption] = useState('2023 Plan');

  const handleChange = (value) => {
    setSelectedOption(value);
  };
  
  const navigate = useNavigate();
    
  const planClick = () => {
    handleChange('2023 Plan');
  };
  const developmentClick = () => {
    handleChange('Development & Revenue Costs');
    navigate('/dashboard/home/development')
  };
  const performanceClick = () => {
    handleChange('2023 Plan');
    navigate('/dashboard/home/performance')
  };

  const rowClassName = (record, index) => {
    if (record.category === 'NET PROFIT 2023' || record.category === 'TOTAL EXPENSES') {
      return 'sum-row no-hover';
    }
    return '';
  };

  const selectElement = (
    <Select defaultValue='2023' onChange={handleChange}>
      <Option value='2023'>2023</Option>
      <Option value='2024'>2024</Option>
      <Option value='2025'>2025</Option>
    </Select>
  );

  const RevenueTableElement = (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      rowClassName={rowClassName}
    />
  );

  const expensesTable = (
    <Table
      dataSource={expensesData}
      columns={expensesColumns}
      pagination={false}
      rowClassName={rowClassName}
    />
  );

  return (
    <div className='container'>
      <div className='sidebar'></div>
      <div className='right-side'>
        <div className='home-text'>Home</div>
        <div className='selections'>
          <div className='selection-options'>
            <div
              className={`selection1 ${
                selectedOption === '2023 Performance' ? 'highlight' : ''
              }`}
              onClick={performanceClick}
            >
              2023 Performance
            </div>
            <div
              className={`selection2 ${
                selectedOption === 'Development & Revenue Costs'
                  ? 'highlight'
                  : ''
              }`}
              onClick={developmentClick}
            >
              Development & Revenue Costs
            </div>
            <div
              className={`selection3 ${
                selectedOption === '2023 Plan' ? 'highlight' : ''
              }`}
              onClick={planClick}
            >
              2023 Plan
            </div>
          </div>
          <div className='year-selection'>
            <div className='year-text'>Year:</div>
            {selectElement}
          </div>
        </div>
        <div className='table-container'>
          {RevenueTableElement}
        </div>
        <div className='table-container'>
        {expensesTable}
        </div>
      </div>
    </div>
  );
};

export default Plan;
