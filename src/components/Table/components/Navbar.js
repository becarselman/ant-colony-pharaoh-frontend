import { useState } from 'react';
import './Navbar.scss';

import NavLink from './Navlink';

const Navbar = ({ navLabels, handlePageSelect }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClick = (index, label) => {
    handlePageSelect(index + 1, label);
    setSelectedPage(index + 1);
  };

  const navLinks = navLabels.map((label, index) => (
    <NavLink
      key={index}
      label={label}
      onClick={() => handleClick(index, label)}
      className={`${selectedPage === index + 1 ? 'active-link' : ''} ${
        index === 0 ? 'first-link' : ''
      } ${index === navLabels.length - 1 ? 'last-link' : ''}`}
    />
  ));

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        {navLinks}
      </div>
    </div>
  );
};

export default Navbar;
