import { useState } from 'react';
import './Navbar.scss';
import classnames from 'classnames';

import NavLink from './Navlink';

const Navbar = ({ navLabels, handlePageSelect }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClick = (index, label) => {
    handlePageSelect(index + 1, label);
    setSelectedPage(index + 1);
  };

  const navLinks = navLabels.map((label, index) => {
    const linkClass = classnames({
      'active-link': selectedPage === index + 1,
      'first-link': index === 0,
      'last-link': index === navLabels.length - 1
    });

    const onClick = () => handleClick(index, label);


    return (
      <NavLink
        key={index}
        label={label}
        onClick={onClick} 
        className={linkClass}
      />
    );
  });

  return (
    <div className="navbar-container">
      <div className="navbar-links">{navLinks}</div>
    </div>
  );
};

export default Navbar;
