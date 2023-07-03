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
    const colorMap = {
      'Grand Total Costs': '#FF9F5A',
    };
    return colorMap[name] || '#7BB99F';
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
    const colorMap = {
      'Grand Total Planned Revenue': '#FF9F5A',
      'Grand Total Actual Revenue': '#7BB99F',
      'Grand Total Total Expenses (Planned)': '#1890FF',
      'Grand Total Total Expenses (Actual)': '#FADB14',
    };
    return colorMap[type] || '#7BB99F';
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