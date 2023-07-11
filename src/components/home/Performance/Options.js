import { salesChannelsData, projectScopeData, HoursOverviewData } from './Data';
import './Performance.scss';

export const PieOptions = {
    data: salesChannelsData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    legend: {
      position: 'right',
      itemWidth: 'null',
      style: {
        className: "pie-text"
      },
    },
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        className: 'pie-text',
      },
    },
    interactions: [{ type: 'element-active' }],
};
  

export const BarOptions = {
    data: projectScopeData,
    xField: 'value',
    yField: 'type',
    seriesField: 'type',
    legend: {
      position: 'top-left',
    },
    minBarWidth: 32,
    maxBarWidth: 32,
    color: ({ type }) => {
        return type === 'Fixed' ? '#7BB99F' : '#DFE3E1';
      },
  };

export const ColumnOptions = {
    data: HoursOverviewData,
    isGroup: true,
    seriesField: 'name',
    xField: 'date',
    yField: 'value',
    yAxis: {
      min: 0,
      max: 6000,
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
    dodgePadding: 6,
    color: ({ name }) => {
        return name === 'Grand Total Hours Available' ? '#FF9F5A' : '#7BB99F';
      },
  };

export default {
    PieOptions,
    BarOptions,
    ColumnOptions,
}