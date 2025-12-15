import { useEffect, useState } from "react";
import { fetchRecentlyPlayedTracks, SpotifyTrack } from "@/services/spotify";

export const SpotifyTracks = () => {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTracks = async () => {
      setLoading(true);
      const data = await fetchRecentlyPlayedTracks(6);
      setTracks(data);
      setLoading(false);
    };
    loadTracks();
  }, []);

  if (loading) {
    return (
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mt-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <div className="text-zinc-500 text-sm">Loading recent tracks...</div>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mt-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <div className="text-zinc-500 text-sm">No recent tracks available</div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mt-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      {tracks.map((track) => (
        <div key={track.id} className="box-border caret-transparent blur-0">
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-stone-900 dark:bg-zinc-800 box-border caret-transparent gap-x-2 flex flex-col h-[152px] gap-y-2 w-full pt-3 pb-4 px-4 rounded-xl hover:bg-stone-800 dark:hover:bg-zinc-700 transition-colors block"
          >
            <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5">
              <div className="relative aspect-square box-border caret-transparent block shrink-0 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  alt={track.album.name}
                  src={track.album.images[0]?.url || track.album.images[1]?.url || ''}
                  className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-lg inset-0"
                />
              </div>
              <div className="box-border caret-transparent flex flex-col grow justify-between overflow-hidden pt-6">
                <div className="relative box-border caret-transparent">
                  <div className="relative box-border caret-transparent">
                    <div className="text-white text-sm font-semibold box-border caret-transparent block leading-5 line-clamp-2">
                      {track.name}
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent mt-1">
                    <div className="text-zinc-400 text-sm box-border caret-transparent flow-root leading-5 text-ellipsis overflow-hidden line-clamp-1">
                      {track.artists.map((artist, index) => (
                        <span key={index}>
                          {index > 0 && ', '}
                          {artist.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                alt="Spotify"
                className="box-border caret-transparent h-6 w-6 opacity-80"
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

