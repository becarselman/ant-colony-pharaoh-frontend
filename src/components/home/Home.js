import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Home.scss';
import { ReactComponent as YearText } from '../../images/home/year-text.svg'
import { ReactComponent as HomeText } from '../../images/home/home-text.svg';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { Pie, Bar, Column } from '@ant-design/plots';
import CardItem from './CardItem';
import { data, items } from './Data';
import { PieOptions, BarOptions, ColumnOptions } from './Options';

const Home = () => {
     
  return (
    <div className='container'>
        <div className='sidebar'>
            
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
                    <Dropdown menu={{items,}} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                            <div className='year'>
                                2023
                                <DownOutlined className='drop-down-arrow'/>
                            </div>
                            </Space>
                        </a>
                    </Dropdown>
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
