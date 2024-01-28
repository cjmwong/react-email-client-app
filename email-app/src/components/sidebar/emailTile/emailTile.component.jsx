import React from "react";
import './emailTile.styles.css';

export const Tile = ({ email, onClick }) => {

    const {id, from, address, time, subject } = email;

    const handleClick = () => {
        onClick(id);
    };
    return (
        <div className='email-tile' onClick={handleClick}>
            <h2 id='header'>{from}</h2>
            <p>{subject}</p>
            <p>{address}</p>
            <p>{time}</p>
        </div>
    )};
