import React from 'react'
import './card.css';
const Card = ({ icon, heading, detail }) => {
    return (
        <div className='card'>
            {icon}
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    );
}
export default Card
