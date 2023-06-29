import numeral from 'numeral';
import '../projects/Projects.scss';
import classnames from 'classnames';

export const data = [
    {
        title: 'Name',
        key: 'name',
    },
    {
        title: 'Description',
        key: 'description',
    },
    {
        title: 'Duration',
        key: 'duration',
    },
    {
        title: 'Team Members',
        key: 'developers',
    },
    {
        title: 'Hourly Rate (USD)',
        key: 'hourlyRate',
    },
    {
        title: 'Project Value (BAM)',
        key: 'projectValue',
              render: (value) => {
        const formattedValue = numeral(value).format('0,0.00');      
          return `${formattedValue} KM`;
      },
    },
    {
        title: 'Status',
        key: 'projectStatus',
        render: (projectStatus) => (
        <span>
          <span
            className={classnames('status-dot', {
              'bg-green': projectStatus === 'Active',
              'bg-gray': projectStatus === 'Inactive',
              'bg-orange': projectStatus === 'On-hold',
              'bg-blue': projectStatus === 'Completed',
            })}
          />
          {projectStatus}
        </span>
      ),
    },
];

export default data;