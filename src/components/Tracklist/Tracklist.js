import Track from "../Track/Track.js";
import "../Track/Track.css";

export default function Tracklist({
  tracks,
  addToPlaylist,
  removeFromPlaylist,
}) {
  return (
    <div class="Tracklist">
      {tracks?.map((track) => {
        return (
          <div className="Track">
            <Track title={track.name} artist={track.artist} />
            {addToPlaylist && (
              <button id="add" onClick={() => addToPlaylist(track)}>
                +
              </button>
            )}
            {removeFromPlaylist && (
              <button id="remove" onClick={() => removeFromPlaylist(track)}>
                -
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
