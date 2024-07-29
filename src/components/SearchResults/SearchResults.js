import React from "react";
import Tracklist from "../Tracklist/Tracklist.js";
import "./SearchResults.css";

export default function SearchResults({ searchResultsTracks, addToPlaylist }) {
  return (
    <div className="SearchResults">
      <Tracklist tracks={searchResultsTracks} addToPlaylist={addToPlaylist} />
    </div>
  );
}
