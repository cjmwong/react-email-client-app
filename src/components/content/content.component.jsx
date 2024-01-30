import React from "react";
import './content.styles.css';

export const Content = ({ email }) => {
    if (email.length === 0) {
        return null;
    }
    const { from, address, time, subject, message } = email;
    return (
    <div className='container'>
        <h2 id='subject'>{subject}</h2>
        <div id='info'>
            <p><b>From:</b>  {from}</p>
            <p><b>Email:</b>  {address}</p>
            <p><b>Sent At:</b>  {time}</p>
        </div>
        <div id='body'>
            <p id='column2'>{message}</p>
        </div>
    </div>
    )};

export default Content
