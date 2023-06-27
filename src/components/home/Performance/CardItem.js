import React from 'react';
import './Performance.scss';

const CardItem = ({ title, value, iconComponent}) => {
    return(
        <div className='card'>
            <div className='card-info'>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-value'>
                    {value}
                </div>
            </div>
            <div className='card-icon'>
                {iconComponent}
            </div>
        </div>
    );
}

export default CardItem;