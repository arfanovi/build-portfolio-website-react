import React from 'react';

const Timeline = ({title , date , description}) => {
    return (
        <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>{title}</h4>
            <span className='timeline-text'>{date}</span>
            <p className='timeline-text'>{description}</p>
        </li>
    );
};

export default Timeline;