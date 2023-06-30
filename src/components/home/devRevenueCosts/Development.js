import React from 'react';
import { useState } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './Development.scss';
import { Select } from 'antd';
import CardItem from './CardItem';
import SpecialCardItem from './SpecialCardItem';
import { data, items, actualGrossProfit, RevenueCostsM, RevenueGap } from './Data';
import { RevenueCostsActual, RevenueCostsMonth } from './Options';
import { Row, Col } from 'antd';
import { Column } from '@ant-design/plots';

const Development = () => {
  const [selectedOption, setSelectedOption] = useState('Development & Revenue Costs');
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

  const performanceClick = () => {
    handleChange('2023 Performance');
    window.location.href = '/dashboard/performance';
  };
  const developmentClick = () => {
    handleChange('Development & Revenue Costs');
  };
  const planClick = () => {
    handleChange('2023 Plan');
  };

  const cardItems = [
    ...data.map((item) => (
      <CardItem
        key={item.title}
        title={item.title}
        value={item.value}
        iconComponent={item.iconComponent}
        cardStyle={item.cardStyle}
      />
    )),
    <SpecialCardItem
      key={actualGrossProfit.title}
      title={actualGrossProfit.title}
      value={actualGrossProfit.value}
      className={actualGrossProfit.className}
    />,
  ];

  const greyCard = cardItems.splice(4, 1)[0];
  const topCards = cardItems.slice(0, 2);
  const bottomCards = cardItems.slice(2, 4);

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
        <div className='cards'>
      <div className='other-cards'>
        {topCards}
      </div>
      <div className='other-cards'>
        {bottomCards}
      </div>
      <div className='grey-card '>{greyCard}</div>
    </div>
        <div className='middle-stats'>
        </div>
        <div className='bottom-chart'>
       <div className='stats-titles'>Revenue & costs (per project) - plan 
       <a href='#' className='stats-details'>
                See details
              </a> </div>
              <Column {...RevenueCostsActual} />
        </div>
        <div className='bottom-chart'>
        <div className='stats-titles-m'>Revenue & costs (per project) - per month 
        <a href='#' className='stats-details'>
                See details
              </a>
              </div>
              <Row gutter={[16, 16]}>
  {RevenueCostsM.map((project, index) => (
    <Col span={8}>
      <div className='chart-container'>
        <div className='chart-title'></div>
        <Column
          {...RevenueCostsMonth}
          data={project}
          yAxis={
            index === 1 || index === 2
              ? { ...RevenueCostsMonth.yAxis, label: null }
              : RevenueCostsMonth.yAxis
          }
        />
      </div>
    </Col>
  ))}
</Row>
</div>
          <div>
          <Row gutter={[16, 16]}>
  {RevenueGap.map((project) => (
    <Col span={8} key={project.data[0].title}>
      <SpecialCardItem 
        key={project.data[0].title}
        title={project.data[0].title}
        value={project.data[0].value}
        className="revenue-gap"
      />
    </Col>
  ))}
</Row>

           </div>
        </div>
      </div>
  );
};

export default Development;