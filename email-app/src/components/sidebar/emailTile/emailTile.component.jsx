import React from "react";
import './emailTile.styles.css';

export const Tile = ({ email }) => {
    const { from, address, time, subject } = email;

    return (
    <div className='email-tile'>
    <h2 id='header'>{from}</h2>
    <p>{subject}</p>
    <p>{address}</p>
    <p>{time}</p>
    </div>
    )};
