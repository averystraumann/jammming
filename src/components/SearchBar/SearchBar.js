import React, { useState } from "react";

export default function SearchBar(props) {
  return (
    <form>
      <label for="search-input">Search</label>
      <input
        type="search"
        name="search-input"
        id="search-input"
        placeholder="Search for Music"
        onChange={props.setSearchInput}
      ></input>

      <p>{searchInput}</p>

      <input type="submit"></input>
    </form>
  );
}
