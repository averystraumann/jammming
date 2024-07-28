import styles from "./App.css";
import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import Spotify from "../../util/Spotify.js";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const [searchResults, setSearchResults] = useState([]);

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

  const onSearch = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const savePlaylist = () => {
    const trackUris = playlist.map((track) => track.uri);
    Spotify.save(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylist([]);
    });
  };

  return (
    <div className="App">
      <div className="SearchSection">
        <SearchBar onSearch={onSearch} />
        <SearchResults
          searchResultsTracks={searchResults}
          addToPlaylist={addToPlaylist}
        />
      </div>

      <div className="Divider"></div>

      <div className="PlaylistSection">
        <Playlist
          playlistName={playlistName}
          onNameChange={setPlaylistName}
          playlistTracks={playlist}
          removeFromPlaylist={removeFromPlaylist}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
