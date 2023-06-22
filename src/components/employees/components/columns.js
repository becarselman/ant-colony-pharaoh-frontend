import numeral from 'numeral';
import '../Employees.scss';

export const tableColumns = [
    {
        title: 'First Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Last Name',
        dataIndex: 'surname',
        key: 'surname',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Monthly Salary (BAM)',
        dataIndex: 'salary',
        key: 'salary',
        render: (value) => numeral(value).format('0.00')
    },
    {
        title: 'Tech Stack',
        dataIndex: 'stack',
        key: 'stack',
    }
];