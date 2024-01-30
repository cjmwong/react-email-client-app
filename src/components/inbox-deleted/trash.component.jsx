import React from "react";
import trashIcon from './icons/trash.svg';
import './trash.styles.css'

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
