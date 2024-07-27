import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick() {
    alert(`you searched for ${searchTerm}`);
  }

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

      <button onClick={handleClick}>GO!</button>
    </div>
  );
}
