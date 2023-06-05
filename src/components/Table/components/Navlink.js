import React from 'react';
import './Navlink.scss';

const NavLink = ({ label, onClick, className }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={`nav-link ${className}`} onClick={handleClick}>
      {label}
    </div>
  );
};

export default NavLink;
