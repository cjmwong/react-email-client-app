import React from "react";
import "./searchbar.styles.css";


export const SearchBar = ({ placeholder, onKeyDown }) => {
    const handleKeyDown = (event) => {
        onKeyDown(event);
    }
    return (
<input
    className="searchbar"
    type="search"
    placeholder={placeholder}
    onKeyDown={handleKeyDown}
    />
)};

export default SearchBar
