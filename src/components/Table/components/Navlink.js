import React from 'react';
import './Navlink.scss';

const NavLink = ({ label, onClick, className }) => {
  return (
    <div className={`nav-link ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default NavLink;
