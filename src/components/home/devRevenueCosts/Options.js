import { RevenueCostsA, RevenueCostsM } from './Data';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colorMapA = {};
const colorMapM = {};

const getColor = (name, colorMap) => {
  if (!colorMap.hasOwnProperty(name)) {
    colorMap[name] = generateRandomColor();
  }
  return colorMap[name];
};

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
  color: ({ name }) => getColor(name, colorMapA),
  legend: {
    position: 'top-right',
    layout: 'horizontal',
    marker: {
      symbol: 'circle',
      r: 5,
      fill: 'transparent',
      stroke: ({ name }) => getColor(name, colorMapA),
      lineWidth: 2,
    },
  },
};

export const RevenueCostsMonth = {
  data: RevenueCostsM.flat(),
  isGroup: true,
  seriesField: 'name',
  xField: 'name',
  yField: 'value',
  groupField: 'name',
  yAxis: {
    min: 0,
    max: 260000,
  },
  minColumnWidth: 35,
  maxColumnWidth: 35,
  dodgePadding: 6,
  color: ({ name }) => getColor(name, colorMapM),
  legend: {
    position: 'bottom',
    layout: 'vertical',
    marker: {
      symbol: 'circle',
      r: 5,
      lineWidth: 2,
    },
    offsetX: 35,
    offsetY: 5,
  },
};

export default {
  RevenueCostsActual,
  RevenueCostsMonth,
};
