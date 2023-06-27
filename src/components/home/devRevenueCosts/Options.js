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
  },
};

export const RevenueCostsMonth = {
  data: RevenueCostsM,
  isGroup: true,
  seriesField: 'name',
  xField: 'projectName',
  yField: 'value',
  yAxis: {
    min: 0,
    max: 260000,
  },
  minColumnWidth: 20,
  maxColumnWidth: 20,
  dodgePadding: 6,
  color: ({ name }) => {
    if (name === 'Grand Total Planned Revenue') {
      return '#FF9F5A';
    } else if (name === 'Grand Total Actual Revenue') {
      return '#7BB99F';
    } else if (name === 'Grand Total Total Expenses (Planned)') {
      return '#1890FF';
    } else if (name === 'Grand Total Total Expenses (Actual)') {
      return '#FADB14';
    }
    return '#7BB99F';
  },
  legend: {
    position: 'bottom',
    layout: 'vertical',
  },
};

export default {
  RevenueCostsActual,
  RevenueCostsMonth,
};
