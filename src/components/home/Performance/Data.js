import { ReactComponent as ProjNumber } from '../../../images/home/no-of-proj.svg';
import { ReactComponent as TotValue } from '../../../images/home/tot-proj-val.svg';
import { ReactComponent as HourPrice } from '../../../images/home/hourly-price.svg';
import { ReactComponent as Deadline } from '../../../images/home/deadline.svg';
import { ReactComponent as AvgVelocity } from '../../../images/home/avg-vel.svg';
import { ReactComponent as AvgTeam } from '../../../images/home/avg-team-size.svg';
import { ReactComponent as AvgValue} from '../../../images/home/avg-proj-val.svg';
import { ReactComponent as AvgLeadClosing } from '../../../images/home/avg-lead-closing.svg';
import { ReactComponent as Percentage } from '../../../images/home/percentage.svg';


export const data = [
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
        iconComponent: <Percentage/>,
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

export const salesChannelsData = [
    { value: 335, type: 'Direct' },
    { value: 310, type: 'Email' },
    { value: 234, type: 'Ads' },
    { value: 135, type: 'Social Media' },
    { value: 1548, type: 'Search Engine' },
  ];

export const projectScopeData = [
    { value: 3.75, type: 'Fixed' },
    { value: 5, type: 'On-going' },
]

export const HoursOverviewData = [
    {
        name: 'Grand Total Hours Available',
        date: '2023-01-01',
        value: 5000,
    },
    {
        name: 'Grand Total Hours Billed',
        date: '2023-01-01',
        value: 4000,
    },
    {
        name: 'Grand Total Hours Billed',
        date: '2023-03-01',
        value: 4500,
      },
    {
        name: 'Grand Total Hours Available',
      date: '2023-03-01',
      value: 5500,
    },
    {
        name: 'Grand Total Hours Billed',
        date: '2023-05-01',
        value: 5200,
    },
    {
        name: 'Grand Total Hours Available',
        date: '2023-05-01',
        value: 6000,
      },
    {
        name: 'Grand Total Hours Billed',
      date: '2023-07-01',
      value: 4700,
    },
    {
        name: 'Grand Total Hours Available',
        date: '2023-07-01',
        value: 5700,
    },
    {
        name: 'Grand Total Hours Billed',
      date: '2023-09-01',
      value: 4800,
    },
    {
        name: 'Grand Total Hours Available',
        date: '2023-09-01',
        value: 5500,
    },
    {
        name: 'Grand Total Hours Billed',
      date: '2023-11-01',
      value: 4300,
    },
    {
        name: 'Grand Total Hours Available',
        date: '2023-11-01',
        value: 5200,
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
    salesChannelsData,
    projectScopeData,
    HoursOverviewData,
    items,
}
