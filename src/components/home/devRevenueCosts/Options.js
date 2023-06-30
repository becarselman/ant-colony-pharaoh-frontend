import { RevenueCostsA, RevenueCostsM } from './Data';

export const RevenueCostsActual = {
  data: RevenueCostsA,
  isGroup: true,
  seriesField: 'name',
  xField: 'projectName',
  yField: 'value',
  yAxis: {
    min: 0,
    max: 600000,
  },
  minColumnWidth: 20,
  maxColumnWidth: 20,
  dodgePadding: 6,
  color: ({ name }) => {
    return name === 'Grand Total Costs' ? '#FF9F5A' : '#7BB99F';
  },
  legend: {
    position: 'top-right',
    layout: 'horizontal',
    marker: {
      symbol: 'circle',
      r: 5,
      lineWidth: 2,
      strokeColor: ({ color }) => color, 
      fill: 'transparent',
    },
    },
};

export const RevenueCostsMonth = {
  data: RevenueCostsM.flat(),
  isGroup: true,
  seriesField: 'type',
  xField: 'type', 
  yField: 'value',
  groupField: 'name',
  yAxis: {
    min: 0,
    max: 260000,
  },
  minColumnWidth: 20,
  maxColumnWidth: 20,
  dodgePadding: 6,
  color: ({ type }) => {
    if (type === 'Grand Total Planned Revenue') {
      return '#FF9F5A';
    } else if (type === 'Grand Total Actual Revenue') {
      return '#7BB99F';
    } else if (type === 'Grand Total Total Expenses (Planned)') {
      return '#1890FF';
    } else if (type === 'Grand Total Total Expenses (Actual)') {
      return '#FADB14';
    }
    return '#7BB99F';
  },
  legend: {
    position: 'bottom',
    layout: 'vertical',
    marker: {
      symbol: 'circle',
      r: 5,
      lineWidth: 2,
      strokeColor: ({ color }) => color, 
      fill: 'transparent',
    },
  },
};

export default {
  RevenueCostsActual,
  RevenueCostsMonth,
};