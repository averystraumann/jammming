import "./App.css";
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
    if (trackUris.length !== 0) {
      Spotify.save(playlistName, trackUris).then(() => {
        setPlaylist([]);
        setPlaylistName("New Playlist");
      });
    } else {
      alert("No songs in playlist!");
    }
  };

  return (
    <div className="App">
      <header>jammming</header>
      <main>
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
            setPlaylistName={setPlaylistName}
            playlistTracks={playlist}
            removeFromPlaylist={removeFromPlaylist}
            onSave={savePlaylist}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
