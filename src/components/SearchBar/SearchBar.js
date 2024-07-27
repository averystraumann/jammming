import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="searchBar">
      <label for="search-input">Search</label>
      <input
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search for Music"
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <p>{searchTerm}</p>

      <button onClick={() => onSearch(searchTerm)}>GO!</button>
    </div>
  );
}
