import { salesChannelsData, projectScopeData, HoursOverviewData } from './Data';

export const PieOptions = {
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
    color: ({ name }) => {
        return name === 'Grand Total Hours Available' ? '#FF9F5A' : '#7BB99F';
      },
  };

export default {
    PieOptions,
    BarOptions,
    ColumnOptions,
}