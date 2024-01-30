import React from "react";
import mailIcon from './icons/mail.svg';
import './inbox.styles.css'

export const Inbox = ({onClick}) => {
    const handleClick = () => {
        onClick('inbox');
    }
    return (
        <img
        className="inbox"
        onClick={handleClick}
        src={mailIcon} alt="inbox-icon"/>
    )
}

export default Inbox
