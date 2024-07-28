import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="SearchBar">
      <input
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search for Music"
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button id="go" onClick={() => onSearch(searchTerm)}>
        GO!
      </button>
    </div>
  );
}
