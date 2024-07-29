import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist.js";
import "./Playlist.css";

export default function Playlist({
  playlistName,
  onNameChange,
  playlistTracks,
  removeFromPlaylist,
  onSave,
  setPlaylistName,
}) {
  return (
    <div className="Playlist">
      <input
        defaultValue={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />

      <Tracklist
        tracks={playlistTracks}
        removeFromPlaylist={removeFromPlaylist}
      />
      <button id="save" onClick={onSave}>
        Save to Spotify
      </button>
    </div>
  );
}
