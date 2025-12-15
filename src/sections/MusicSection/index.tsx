import { useEffect, useState } from "react";
import { SpotifyTracks } from "@/sections/MusicSection/components/SpotifyTracks";
import { fetchCurrentlyPlaying } from "@/services/spotify";

export const MusicSection = () => {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Poll for currently playing status every 5 seconds
    const checkPlayingStatus = async () => {
      const playing = await fetchCurrentlyPlaying();
      setIsPlaying(playing);
    };

    // Check immediately
    checkPlayingStatus();

    // Then poll every 5 seconds
    const interval = setInterval(checkPlayingStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatLastUpdated = (date: Date | null): string => {
    if (!date) return "Never";
    
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="box-border caret-transparent blur-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
        <div>
          <div className="text-lg font-medium box-border caret-transparent leading-7">
            Music
          </div>
          <p className="text-zinc-500 box-border caret-transparent">
            I enjoy R&B the most, as well as Hip Hop and Jazz. This are my recents!
          </p>
        </div>
        <div className="flex items-center gap-2 text-zinc-400 text-sm whitespace-nowrap">
          <div className="relative">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                isPlaying
                  ? "bg-green-500 animate-pulse"
                  : "bg-zinc-600"
              }`}
              style={
                isPlaying
                  ? {
                      boxShadow: "0 0 10px rgba(34, 197, 94, 1), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)",
                    }
                  : {}
              }
            />
          </div>
          <span className="text-xs sm:text-sm">Last updated: {formatLastUpdated(lastUpdated)}</span>
        </div>
      </div>
      <SpotifyTracks onTracksLoaded={setLastUpdated} />
    </div>
  );
};
