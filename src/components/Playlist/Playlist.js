import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist.js";

export default function Playlist({ playlistTracks, removeFromPlaylist }) {
  const [playlistName, setPlaylistName] = useState("My Playlist");

  return (
    <div className="Playlist">
      <input
        type="text"
        name="playlistName"
        id="playlistName"
        placeholder={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />

      <Tracklist
        tracks={playlistTracks}
        removeFromPlaylist={removeFromPlaylist}
      />
      <button>Save to Spotify</button>
    </div>
  );
}
