import React from 'react';
import './TableHead.scss';

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr className="table-row">
        {columns.map((column, index) => (
          <th key={index} className="table-header-cell">
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
