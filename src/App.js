import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar.js";
import Tracklist from "./components/Tracklist/Tracklist.js";
import SearchResults from "./components/SearchResults/SearchResults.js";
import Playlist from "./components/Playlist/Playlist.js";

function App() {
  const searchTracks = [
    {
      name: "Art School",
      artist: "Remo Drive",
      id: 1,
    },
    {
      name: "Let Down",
      artist: "Radiohead",
      id: 2,
    },
    {
      name: "Moby Octopad",
      artist: "Yo La Tengo",
      id: 3,
    },
  ];

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (track) => {
    if (!playlist.some((item) => item.id === track.id)) {
      setPlaylist([...playlist, track]);
    } else {
      alert("This song is already in the playlist!");
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylist(playlist.filter((t) => t.id !== track.id));
  };

  return (
    <div className="App">
      <SearchBar />
      <SearchResults
        searchResultsTracks={searchTracks}
        addToPlaylist={addToPlaylist}
      />
      <Playlist
        playlistTitle="Avo's Playlist"
        playlistTracks={playlist}
        removeFromPlaylist={removeFromPlaylist}
      />
    </div>
  );
}

export default App;
