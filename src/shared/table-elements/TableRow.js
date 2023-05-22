import React from 'react';
import './TableRow.scss';

const TableRow = ({ project, avatars, startDateString, endDateString, projectValue, projectStatus }) => {
  return (
    <tr className="table-row">
      <td className="table-cell name-cell">{project.name}</td>
      <td className="table-cell description-cell">{project.description}</td>
      <td className="table-cell date-cell">
        {startDateString} - {endDateString}
      </td>
      <td className="table-cell avatars-cell">{avatars}</td>
      <td className="hourly-rate-cell">${project.hourlyRate}</td>
      <td className="table-cell value-cell">${projectValue} KM</td>
      <td className="status-cell">
        <div className={`status-dot ${projectStatus === 'Active' ? 'bg-green' : projectStatus === 'Inactive' ? 'bg-gray' : projectStatus === 'On-hold' ? 'bg-orange' : projectStatus === 'Completed' ? 'bg-blue' : ''}`} />
        <div className="status-text">{projectStatus}</div>
      </td>
    </tr>
  );
};

export default TableRow;
