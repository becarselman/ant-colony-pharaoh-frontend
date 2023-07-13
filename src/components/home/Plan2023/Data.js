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
