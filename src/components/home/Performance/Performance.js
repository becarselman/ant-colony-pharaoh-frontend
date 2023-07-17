import React from 'react';
import { useState } from 'react';
import './Performance.scss';
import { Select, Space } from 'antd';
import { Pie, Bar, Column } from '@ant-design/plots';
import CardItem from './CardItem';
import { data, items } from './Data';
import { PieOptions, BarOptions, ColumnOptions } from './Options';
import { useNavigate } from "react-router-dom";

const Performance = () => {
  const [selectedOption, setSelectedOption] = useState('2023 Performance');
  const [highlightPerformance, setHighlightPerformance] = useState(false);
  const [highlightDevelopment, setHighlightDevelopment] = useState(false);
  const [highlightPlan, setHighlightPlan] = useState(false);

  const handleChange = (value) => {
    setSelectedOption(value);

    setHighlightPerformance(false);
    setHighlightDevelopment(false);
    setHighlightPlan(false);

    if (value === '2023 Performance') {
      setHighlightPerformance(true);
    } else if (value === 'Development & Revenue Costs') {
      setHighlightDevelopment(true);
    } else if (value === '2023 Plan') {
      setHighlightPlan(true);
    }
  };

  const navigate = useNavigate();
    
  const performanceClick = () => {
    handleChange('2023 Performance');
  };
  const developmentClick = () => {
    handleChange('Development & Revenue Costs');
    navigate('/dashboard/home/development')
  };
  const planClick = () => {
    handleChange('2023 Plan');
    navigate('/dashboard/home/plan2023')
  };

  const cardItems = data.map((item) => (
    <CardItem
      key={item.title}
      title={item.title}
      value={item.value}
      iconComponent={item.iconComponent}
    />
  ));

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
            <Select defaultValue='2023' options={items} onChange={handleChange} />
          </div>
        </div>
        <div className='cards'>{cardItems}</div>
        <div className='middle-stats'>
          <div className='chart'>
            <div className='stats-title'>Sales channels</div>
            <Pie {...PieOptions} />
          </div>
          <div className='chart'>
            <div className='stats-title'>Project scope</div>
            <Bar {...BarOptions} />
          </div>
        </div>
        <div className='bottom-chart'>
          <div className='stats-title'>
            Hours Overview
            <div className='stats-details'>
              <a href='#' className='stats-details'>
                See details
              </a>
            </div>
          </div>
          <Column {...ColumnOptions} />
        </div>
      </div>
    </div>
  );
};

export default Performance;
