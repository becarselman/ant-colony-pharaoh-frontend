import { useState } from 'react';
import './TableHeader.scss';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const TableHeader = ({ totalCount, handleSearch }) => {
  const [input, setInput] = useState('');

  return (
    <div className="table-header">
      <div className="header-content">
        <h2 className="header-title">All Projects</h2>
        <div className="project-count">{totalCount} total</div>
      </div>
      <form
        className="search-form"
        onSubmit={event => {
          event.preventDefault();
          handleSearch(input);
        }}
      >
        <Input
          className="search-input"
          placeholder="Search"
          value={input}
          onChange={event => setInput(event.target.value)}
          prefix={<SearchOutlined />}
        />
      </form>
    </div>
  );
};

export default TableHeader;