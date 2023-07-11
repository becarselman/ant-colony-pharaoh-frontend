import React from 'react';
import './Development.scss';

const SpecialCardItem = ({ title, value }) => {
  return (
    <div className="special-card-item">
      <h2 className="special-card-title">{title}</h2>
      <p className="special-card-value">{value}</p>
    </div>
  );
};

export default SpecialCardItem;
