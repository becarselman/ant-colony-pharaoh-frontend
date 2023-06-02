import { useState, useEffect } from 'react';
import { Input } from 'antd';
import './TableHeader.scss';
import searchIcon from '../../../images/svg/searchIcon.svg';

const TableHeader = ({ totalCount, searchValue, handleSearch, handleSearchValueChange }) => {
  const [input, setInput] = useState('');
  const [countChanged, setCountChanged] = useState(false);

  useEffect(() => {
    setInput(searchValue);
  }, [searchValue]);

  useEffect(() => {
    setCountChanged(true);
    const timeout = setTimeout(() => {
      setCountChanged(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [totalCount]);

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
        <h2 className="header-title">All Projects</h2>
        <div className={`project-count ${countChanged ? 'changed' : ''}`}>{totalCount} total</div>
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
