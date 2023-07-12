export const dataSource = [
    {
      key: '1',
      category: 'Development',
      value: 1000000,
    },
    {
      key: '2',
      category: 'Design',
      value: 1000000,
    },
    {
      key: '3',
      category: 'Other',
      value: 1000000,
    },
    {
      key: '4',
      category: 'Total revenue',
      value: 1000000,
    },
    {
      key: '5',
      category: 'NET PROFIT 2023',
      value: 1000000,
    },
  ].map(item => ({
    ...item,
    value: item.value.toLocaleString('en') + ' KM',
  }));
  