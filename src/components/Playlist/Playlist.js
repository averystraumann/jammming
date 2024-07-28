import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist.js";
import "./Playlist.css";

export default function Playlist({
  playlistName,
  onNameChange,
  playlistTracks,
  removeFromPlaylist,
  onSave,
}) {
  return (
    <div className="Playlist">
      <input
        defaultValue={playlistName}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <Tracklist
        tracks={playlistTracks}
        removeFromPlaylist={removeFromPlaylist}
      />
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}
