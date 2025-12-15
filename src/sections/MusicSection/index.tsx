import { useState } from "react";
import { SpotifyTracks } from "@/sections/MusicSection/components/SpotifyTracks";

export const MusicSection = () => {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

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
        <div className="text-zinc-400 text-sm whitespace-nowrap">
          <span className="text-xs sm:text-sm">Last updated: {formatLastUpdated(lastUpdated)}</span>
        </div>
      </div>
      <SpotifyTracks onTracksLoaded={setLastUpdated} />
    </div>
  );
};
