import React from "react";
import './ProjectOverview.scss';

const InfoCard = ({ title, value, render }) => {
    const renderedValue = render ? render(value) : value;

    const displayValue = typeof renderedValue === 'string' ? renderedValue.replace(/"/g, '') : renderedValue;

    return(
        <div className='info'>
            <div className='info-title'>
                {title}
            </div>
            <div className="info-description">
                {displayValue}
            </div>
        </div>
    )
}

export default InfoCard;