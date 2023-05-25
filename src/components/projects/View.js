import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomTable from '../Table/CustomTable';
import { tableColumns } from './components/columns';
import PaginationComponent from '../Table/components/Pagination';

const View = () => {
  const [dataSource, setDataSource] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchData();
  }, [skip, limit]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/projects?skip=${skip}&limit=${limit}`);
      const projects = response.data;

      const formattedData = projects.map((project, index) => {
        const developers = project.developers.map((developer) => developer.user);
        const fullTime = project.developers.map((developer) => developer.fullTime);
        const startDateString = new Date(project.duration.from).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
         });
         
         const endDateString = new Date(project.duration.to).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
         });
         
         return {
          key: project._id || index.toString(),
          name: project.name || '',
          description: project.description || '',
          duration: `${startDateString} - ${endDateString}`,
          developers: developers.join(', ') || '',
          fullTime: fullTime.join(', ') || '',
          hourlyRate: project.hourlyRate || 0,
          projectValue: project.projectValue || 0,
          status: project.projectStatus || '',
         };
         
      });

      setDataSource(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <CustomTable
        data={dataSource}
        columns={tableColumns}
        paginationComponent={PaginationComponent}
        skip={skip}
        limit={limit}
        onSkipChange={setSkip}
        onLimitChange={setLimit}
      />
    </div>
  );
};

export default View;
