export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
  played_at?: string;
}

export interface SpotifyRecentlyPlayedResponse {
  items: Array<{
    track: SpotifyTrack;
    played_at: string;
  }>;
}

export interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack | null;
}

export const fetchRecentlyPlayedTracks = async (limit: number = 6): Promise<SpotifyTrack[]> => {
  try {
    const response = await fetch(`/api/spotify/recently-played?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recently played tracks');
    }
    const data: SpotifyRecentlyPlayedResponse = await response.json();
    return data.items.map(item => ({
      ...item.track,
      played_at: item.played_at,
    }));
  } catch (error) {
    console.error('Error fetching Spotify tracks:', error);
    return [];
  }
};

export const fetchCurrentlyPlaying = async (): Promise<boolean> => {
  try {
    const response = await fetch(`/api/spotify/currently-playing`);
    if (!response.ok) {
      throw new Error('Failed to fetch currently playing status');
    }
    const data: SpotifyCurrentlyPlayingResponse = await response.json();
    return data.is_playing || false;
  } catch (error) {
    console.error('Error fetching currently playing status:', error);
    return false;
  }
};

