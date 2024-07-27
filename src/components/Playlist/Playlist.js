import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist.js";

export default function Playlist({
  playlistTracks,
  playlistTitle,
  removeFromPlaylist,
}) {
  return (
    <div className="Playlist">
      <h1>{playlistTitle}</h1>
      <Tracklist
        tracks={playlistTracks}
        removeFromPlaylist={removeFromPlaylist}
      />
      <button>Save to Spotify</button>
    </div>
  );
}
