import React from 'react';
import './Development.scss';

const CardItem = ({ title, value, iconComponent }) => {
  return (
    <div className='carditems'>
      <div className='card-content'>
        <div className="card-text">
          <div className="card-title">{title}</div>
          <div className="card-value-container">
            <div className="card-value">{value}</div>
          </div>
        </div>
        {iconComponent && <div className="card-icon">{iconComponent}</div>}
      </div>
    </div>
  );
};

export default CardItem;
