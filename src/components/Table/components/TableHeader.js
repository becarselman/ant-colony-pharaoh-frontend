import { useState, useEffect } from 'react';
import { Input } from 'antd';
import './TableHeader.scss';
import searchIcon from '../../../images/svg/searchIcon.svg';

const TableHeader = ({ totalCount, searchValue, handleSearch, handleSearchValueChange, title }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(searchValue);
  }, [searchValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    handleSearchValueChange(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <div className="table-header">
      <div className="header-content">
        <h2 className="header-title">{title}</h2>
        <div className="project-count">{totalCount} total</div>
      </div>
      <div className="search-input-container">
        <form onSubmit={handleSearchSubmit}>
          <Input
            className="search-input"
            placeholder="Search"
            value={input}
            onChange={handleInputChange}
            prefix={<img src={searchIcon} alt="Search" />}
          />
        </form>
      </div>
    </div>
  );
};

export default TableHeader;
