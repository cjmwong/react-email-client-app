import React from "react";
import mailIcon from './icons/mail.svg';
import './inbox.styles.css'

/**
 * Inbox component that acts as a button to update sidebar email tiles to only show
 * emails with the tag 'inbox'
 *
 * @param {onClick} function Captures event when the user clicks on icon
 * @return {ReactNode} A React element that renders a icon button
 */
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
