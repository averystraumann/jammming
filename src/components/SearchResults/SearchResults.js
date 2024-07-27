import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist.js";

export default function SearchResults({ searchResultsTracks, addToPlaylist }) {
  return (
    <div className="SearchResults">
      <h1>Search Results</h1>
      <Tracklist tracks={searchResultsTracks} addToPlaylist={addToPlaylist} />
    </div>
  );
}
