import numeral from 'numeral';

export const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Duration (from-to)',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Developers',
      dataIndex: 'developers',
      key: 'developers',
    },
    {
      title: 'Hourly rate',
      dataIndex: 'hourlyRate',
      key: 'hourlyRate',
      render: (value) => `$${value}`,
    },
    {
      title: 'Project value in BAM',
      dataIndex: 'projectValue',
      key: 'projectValue',
      render: (value) => {
        const formattedValue = numeral(value).format('0,0.00');      
          return `${formattedValue} BAM`;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];