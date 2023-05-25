import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Home.scss';
import { ReactComponent as YearText } from '../../images/home/year-text.svg'
import { ReactComponent as HomeText } from '../../images/home/home-text.svg';
import { DownOutlined } from "@ant-design/icons";
import { ReactComponent as ProjNumber } from '../../images/home/no-of-proj.svg';
import { ReactComponent as TotValue } from '../../images/home/tot-proj-val.svg';
import { ReactComponent as HourPrice } from '../../images/home/hourly-price.svg';
import { ReactComponent as Deadline } from '../../images/home/deadline.svg';
import { ReactComponent as AvgVelocity } from '../../images/home/avg-vel.svg';
import { ReactComponent as AvgTeam } from '../../images/home/avg-team-size.svg';
import { ReactComponent as AvgValue} from '../../images/home/avg-proj-val.svg';
import { ReactComponent as AvgLeadClosing } from '../../images/home/avg-lead-closing.svg';
import { Pie, Bar, Column } from '@ant-design/plots';
import CardItem from './CardItem';

const Home = () => {

    const data = [
        {
            title: 'Number of projects',
            value: '9',
            iconComponent:<ProjNumber/>,
        },
        {
            title: 'Total project value',
            value: '1,605,003.00KM',
            iconComponent: <TotValue/>,
        },
        {
            title: 'Avg. project value',
            value: '178,434,89',
            iconComponent: <AvgValue/>,
        },
        {
            title: 'Avg. lead closing (d)',
            value: '12',
            iconComponent: <AvgLeadClosing/>,
        },
        {
            title: 'Avg. team size',
            value: '2.2',
            iconComponent: <AvgTeam/>,
        },
        {
            title: 'Avg. velocity',
            value: '64',
            iconComponent: <AvgVelocity/>,
        },
        {
            title: 'Weeks over deadline',
            value: '7',
            iconComponent: <Deadline/>,
        },
        {
            title: 'Avg. hourly price',
            value: '$35',
            iconComponent: <HourPrice/>,
        },
    ]
    const salesChannelsData = [
        { value: 335, type: 'Direct' },
        { value: 310, type: 'Email' },
        { value: 234, type: 'Ads' },
        { value: 135, type: 'Social Media' },
        { value: 1548, type: 'Search Engine' },
      ];

    const PieOptions = {
        data: salesChannelsData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-active' }],
    };
      
    const projectScopeData = [
        { value: 3.75, type: 'Fixed' },
        { value: 5, type: 'On-going' },
    ]

    const BarOptions = {
        data: projectScopeData,
        xField: 'value',
        yField: 'type',
        seriesField: 'type',
        legend: {
          position: 'top-left',
        },
      };
      
    const HoursOverviewData = [
        {
            name: 'grandTotalHoursAvailableName',
            date: '2023-01-01',
            value: 5000,
        },
        {
            name: 'grandTotalHoursBilledName',
            date: '2023-01-01',
            value: 4000,
        },
        {
            name: 'grandTotalHoursBilledName',
            date: '2023-03-01',
            value: 4500,
          },
        {
            name: 'grandTotalHoursAvailableName',
          date: '2023-03-01',
          value: 5500,
        },
        {
            name: 'grandTotalHoursBilledName',
            date: '2023-05-01',
            value: 5200,
        },
        {
            name: 'grandTotalHoursAvailableName',
            date: '2023-05-01',
            value: 6000,
          },
        {
            name: 'grandTotalHoursBilledName',
          date: '2023-07-01',
          value: 4700,
        },
        {
            name: 'grandTotalHoursAvailableName',
            date: '2023-07-01',
            value: 5700,
        },
        {
            name: 'grandTotalHoursBilledName',
          date: '2023-09-01',
          value: 4800,
        },
        {
            name: 'grandTotalHoursAvailableName',
            date: '2023-09-01',
            value: 5500,
        },
        {
            name: 'grandTotalHoursBilledName',
          date: '2023-11-01',
          value: 4300,
        },
        {
            name: 'grandTotalHoursAvailableName',
            date: '2023-11-01',
            value: 5200,
        },
      ];

      const ColumnOptions = {
        data: HoursOverviewData,
        isGroup: true,
        seriesField: 'name',
        xField: 'date',
        yField: 'value',
        yAxis: {
          min: 0,
          max: 6000,
        },
      };
      

  return (
    <div className='container'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='right-side'>
            <HomeText className='home-text'/>
            <div className='selections'>
                <div className='selection-options'>
                    <div className='selection1'>2023 Performance</div>
                    <div className='selection2'>Development & Revenue Costs</div>
                    <div className='selection3'>2023 Plan</div>
                </div>
                <div className='year-selection'>
                    <YearText className='year-text'/>
                    <div className='year'>
                        2023
                        <DownOutlined className='drop-down-arrow'/>
                    </div>
                </div>
            </div>
            <div className='cards'>
                {data.map((item) => (
                    <CardItem 
                        key={item.title}
                        title={item.title}
                        value={item.value}
                        iconComponent={item.iconComponent}
                        />
                ))}
            </div>
            <div className='middle-stats'>
                <div className='chart'>
                    <div className='stats-title'>
                        Sales channels
                    </div>
                <Pie {...PieOptions}/>
                </div>
                <div className='chart'>
                    <div className='stats-title'>
                        Project scope
                    </div>
                    <Bar {...BarOptions}/>
                </div>
            </div>
            <div className='bottom-chart'>
                <div className='stats-title'>
                    Hours Overview
                </div>
                <Column {...ColumnOptions}/>
            </div>
        </div>
    </div>
  );
}

export default Home;
