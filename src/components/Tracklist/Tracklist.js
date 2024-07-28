import Track from "../Track/Track.js";
import styles from "../Tracklist/Tracklist.module.css";

export default function Tracklist({
  tracks,
  addToPlaylist,
  removeFromPlaylist,
}) {
  return (
    <div class="Tracklist">
      {tracks?.map((track) => {
        return (
          <div class="searchResultTrack">
            <Track title={track.name} artist={track.artist} />
            {addToPlaylist && (
              <button onClick={() => addToPlaylist(track)}>
                Add to playlist
              </button>
            )}
            {removeFromPlaylist && (
              <button onClick={() => removeFromPlaylist(track)}>
                Remove From Playlist
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
