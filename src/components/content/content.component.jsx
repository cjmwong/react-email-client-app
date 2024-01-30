import React from "react";
import './content.styles.css';

/**
 * Content component to be used for displaying the contents of an email
 *
 * @param {email} object email object that contains information about the email sent
 * @return {ReactNode} A React element that renders the contents contained about the email
 */
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
