import { ReactComponent as TotValue } from '../../../images/home/tot-proj-val.svg';
import { ReactComponent as AvgValue} from '../../../images/home/avg-proj-val.svg';
import { ReactComponent as Percentage } from '../../../images/home/percentage.svg';
import { ReactComponent as PieIcon } from '../../../images/home/pie-icon.svg';

export const data = [
    {
        title: 'Actual revenue',
        value: '1,615,341.00 KM',
        iconComponent:<AvgValue/>,
    },
    {
      title: 'Actual margin %',
      value: '40%',
      iconComponent: <Percentage/>,
  },
    {
        title: 'Planned direct costs',
        value: '1,890,000.00 KM',
        iconComponent: <TotValue/>,
    },
    {
        title: 'Actual avg. margin',
        value: '102,382,00 KM',
        iconComponent: <PieIcon/>,
    },
]

export const actualGrossProfit = {
  title: 'Actual gross profit',
  value: '-284,086,00 KM',
};

export const RevenueCostsA = [
    {
        name: 'Grand Total Total Billed',
        projectName: 'AlphaBid',
        value: 70000,
    },
    {
        name: 'Grand Total Costs',
        projectName: 'AlphaBid',
        value: 290000,
    },
    {
        name: 'Grand Total Total Billed',
        projectName: 'Audiowolf',
        value: 260000,
      },
    {
        name: 'Grand Total Costs',
      projectName: 'Audiowolf',
      value: 570000,
    },
    {
        name: 'Grand Total Total Billed',
        projectName: 'GIZ',
        value: 5200,
    },
    {
        name: 'Grand Total Costs',
        projectName: 'GIZ',
        value: 260000,
      },
    {
        name: 'Grand Total Total Billed',
      projectName: 'HUB71',
      value: 240000,
    },
    {
        name: 'Grand Total Costs',
        projectName: 'HUB71',
        value: 260000,
    },
    {
        name: 'Grand Total Total Billed',
      projectName: 'Kutuby',
      value: 240000,
    },
    {
        name: 'Grand Total Costs',
        projectName: 'Kutuby',
        value: 5500,
    },
    {
        name: 'Grand Total Total Billed',
      projectName: 'Travelspot',
      value: 40000,
    },
    {
        name: 'Grand Total Costs',
        projectName: 'Travelspot',
        value: 50000,
    },
    {
      name: 'Grand Total Total Billed',
    projectName: 'Virgin Pulse',
    value: 460000,
  },
  {
      name: 'Grand Total Costs',
      projectName: 'Virgin Pulse',
      value: 370000,
  },
  {
    name: 'Grand Total Total Billed',
  projectName: 'Zeppelin (CAT)',
  value: 460000,
},
{
    name: 'Grand Total Costs',
    projectName: 'Zeppelin (CAT)',
    value: 370000,
},
  ];

  
export const RevenueCostsM = [
  {
      name: 'Grand Total Planned Revenue',
      projectName: 'January: 1/1/2023',
      value: 70000,
  },
  {
      name: 'Grand Total Actual Revenue',
      projectName: 'January: 1/1/2023',
      value: 290000,
  },
  {
    name: 'Grand Total Total Expenses (Planned)',
    projectName: 'January: 1/1/2023',
    value: 70000,
},
{
    name: 'Grand Total Total Expenses (Actual)',
    projectName: 'January: 1/1/2023',
    value: 290000,
},
{
  name: 'Grand Total Planned Revenue',
  projectName: 'February: 1/2/2023',
  value: 70000,
},
{
  name: 'Grand Total Actual Revenue',
  projectName: 'February: 1/2/2023',
  value: 290000,
},
{
name: 'Grand Total Total Expenses (Planned)',
projectName: 'February: 1/2/2023',
value: 70000,
},
{
name: 'Grand Total Total Expenses (Actual)',
projectName: 'February: 1/2/2023',
value: 290000,
},
{
  name: 'Grand Total Planned Revenue',
  projectName: 'March: 1/3/2023',
  value: 70000,
},
{
  name: 'Grand Total Actual Revenue',
  projectName: 'March: 1/3/2023',
  value: 290000,
},
{
name: 'Grand Total Total Expenses (Planned)',
projectName: 'March: 1/3/2023',
value: 70000,
},
{
name: 'Grand Total Total Expenses (Actual)',
projectName: 'March: 1/3/2023',
value: 290000,
},
];

export const items = [
    {
      value: '2022',
      label: '2022',
    },
    {
      value: '2023',
      label: '2023',
    },
    {
      value: '2024',
      label: '2024',
    },
    {
      value: '2025',
      label: '2025',
    },
  ];


export default {
    data,
    RevenueCostsA,
    RevenueCostsM,
    items,
}
