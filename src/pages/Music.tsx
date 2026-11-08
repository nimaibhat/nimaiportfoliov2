import { useEffect, useState } from "react";
import { fetchRecentlyPlayedTracks, SpotifyTrack } from "@/services/spotify";

const timeAgo = (iso?: string) => {
  if (!iso) return "";
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 60) return `${minutes}m`;
  if (minutes < 60 * 24) return `${Math.round(minutes / 60)}h`;
  return `${Math.round(minutes / (60 * 24))}d`;
};

export const Music = () => {
  const [tracks, setTracks] = useState<SpotifyTrack[] | null>(null);

  useEffect(() => {
    fetchRecentlyPlayedTracks(20).then(setTracks);
  }, []);

  return (
    <>
      <h1 className="font-medium">Music</h1>
      <p className="muted mb-12">
        I enjoy R&amp;B the most, as well as Hip Hop and Jazz. These are my recents.
      </p>

      {tracks === null ? (
        <p className="muted">Loading…</p>
      ) : tracks.length === 0 ? (
        <p className="muted">Couldn't reach Spotify right now.</p>
      ) : (
        <ol className="flex flex-col gap-3">
          {tracks.map((track, i) => (
            <li key={`${track.id}-${i}`} className="flex items-center gap-3">
              <img
                src={track.album.images[2]?.url || track.album.images[0]?.url}
                alt=""
                className="h-10 w-10 shrink-0 rounded"
              />
              <div className="min-w-0 flex-1">
                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link block truncate"
                >
                  {track.name}
                </a>
                <p className="muted truncate text-sm">
                  {track.artists.map((a) => a.name).join(", ")}
                </p>
              </div>
              <span className="muted shrink-0 text-sm tabular-nums">{timeAgo(track.played_at)}</span>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
