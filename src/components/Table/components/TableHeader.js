import { useState } from 'react';
import './TableHeader.scss';
import { Input } from 'antd';
import searchIcon from '../../../images/svg/searchIcon.svg';

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
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch(input);
        }}
      >
        <Input
          className="search-input"
          placeholder="Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          prefix={<img src={searchIcon} alt="Search" />}
        />
      </form>
    </div>
  );
};

export default TableHeader;
