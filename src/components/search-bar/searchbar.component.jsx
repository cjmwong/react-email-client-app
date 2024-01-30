import React from "react";
import "./searchbar.styles.css";

/**
 * SearchBar component used to filter emails based on their subject.
 * Filtering event triggered when enter key is pressed
 *
 * @param {string} placeholder placeholder text to hint on searchbar usage
 * @param {onKeyDown} function Captures event when the user presses a key on the keyboard
 * @return {ReactNode} A React element that renders a search bar
 */
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
