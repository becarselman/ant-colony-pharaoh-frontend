import { useState } from 'react';
import './Navbar.scss';

import NavLink from './Navlink';

const Navbar = ({ navLabels, handlePageSelect }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        {navLabels.map((label, index) => (
          <NavLink
            key={index}
            label={label}
            onClick={() => {
              handlePageSelect(index + 1, label);
              setSelectedPage(index + 1);
            }}
            className={`${selectedPage === index + 1 ? 'active-link' : ''} ${
              index === 0 ? 'first-link' : ''
            } ${index === navLabels.length - 1 ? 'last-link' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};


export default Navbar;