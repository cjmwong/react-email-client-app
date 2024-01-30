import React from "react";
import trashIcon from './icons/trash.svg';
import './trash.styles.css'

/**
 * Inbox component that acts as a button to update sidebar email tiles to only show
 * emails with the tag 'trash'
 *
 * @param {onClick} function Captures event when the user clicks on icon
 * @return {ReactNode} A React element that renders a icon button
 */
export const Trash = ({onClick}) => {
    const handleClick = () => {
        onClick('trash');
    }
    return (
        <img
        className='trash'
        onClick={handleClick}
        src={trashIcon} alt="trash-icon"/>
    )
}

export default Trash;
