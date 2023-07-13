export const columns = [
  {
    title: 'Revenues & costs (per project) - per month',
    dataIndex: 'category',
    key: 'category',
    className: 'revenue-column',
  },
  {
    title: '',
    dataIndex: 'value',
    key: 'value',
    className: 'value-column',
    align: 'right',
  },
];

export const expensesColumns = [
  {
    title: 'Expenses',
    dataIndex: 'category',
    key: 'category',
    className: 'revenue-column',
  },
  {
    title: '',
    dataIndex: 'value',
    key: 'value',
    className: 'value-column',
    align: 'right',
  },
];

export const dataSource = [
  {
    key: '1',
    category: 'Development',
    value: 2400000,
  },
  {
    key: '2',
    category: 'Design',
    value: 7800000,
  },
  {
    key: '3',
    category: 'Other',
    value: 45900000,
  },
  {
    key: '4',
    category: 'Total revenue',
    value: 2400000,
  },
  {
    key: '5',
    category: 'NET PROFIT 2023',
    value: 91800000,
  },
].map(item => ({
  ...item,
  value: (item.value).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' KM',
}));

export const expensesData = [
  {
    key: '1',
    category: 'Direct',
    value: 2400000,
  },
  {
    key: '2',
    category: 'Indirect',
    value: 7800000,
  },
  {
    key: '3',
    category: 'Marketing',
    value: 8400000,
  },
  {
    key: '4',
    category: 'HR costs',
    value: 400000,
  },
  {
    key: '5',
    category: 'Office costs',
    value: 100000,
  },
  {
    key: '6',
    category: 'Sales costs',
    value: 50000,
  },
  {
    key: '7',
    category: 'Other costs',
    value: 800,
  },
  {
    key: '8',
    category: 'TOTAL EXPENSES',
    value: 91800000,
  },
].map(item => ({
  ...item,
  value: (item.value).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' KM',
}));