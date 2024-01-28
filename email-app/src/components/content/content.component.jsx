import React from "react";
import './content.styles.css';

export const Content = ({ email }) => {
    const { from, address, time, subject, message } = email;

    return (
    <div>
    <h2>{from}</h2>
    <p>{subject}</p>
    <p>{address}</p>
    <p>{time}</p>
    <p>{message}</p>
    </div>
    )};

export default Content
