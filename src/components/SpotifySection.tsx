import { useEffect, useState } from 'react';
import { Music, Headphones, Heart, ExternalLink, Loader2 } from 'lucide-react';

interface Artist {
  name: string;
  image: string;
  url: string;
}

interface Track {
  title: string;
  artist: string;
  duration: string;
  image: string;
  url: string;
}

interface SpotifyData {
  topArtists: Artist[];
  recentTracks: Track[];
  topGenres: string[];
}

const SpotifySection = () => {
  const spotifyProfileUrl = 'https://open.spotify.com/user/31p4agq7cwrgwuzws2cijavlriim';

  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Dynamically import supabase to handle cases where env vars aren't ready
        const { supabase } = await import('@/integrations/supabase/client');
        
        const { data: responseData, error: invokeError } = await supabase.functions.invoke('spotify-summary');
        
        if (invokeError) {
          throw new Error(invokeError.message);
        }
        
        if (responseData?.error) {
          throw new Error(responseData.error);
        }
        
        setData(responseData);
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load Spotify data');
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  if (loading) {
    return (
      <section id="spotify" className="py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#1DB954]" />
          <p className="text-muted-foreground">Loading Spotify data...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="spotify" className="py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load Spotify data: {error}</p>
        </div>
      </section>
    );
  }

  const { topArtists = [], recentTracks = [], topGenres = [] } = data || {};

  return (
    <section id="spotify" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center">
            <Music className="w-6 h-6 text-black" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">My Spotify</h2>
            <p className="text-muted-foreground text-sm">What I'm listening to</p>
          </div>
          <a
            href={spotifyProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 bg-[#1DB954] text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#1ed760] transition-colors"
          >
            <span>Follow on Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Artists */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[#1DB954]" />
              <h3 className="font-semibold">Top Artists</h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              {topArtists.map((artist, index) => (
                <a
                  key={index}
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 group"
                >
                  {artist.image ? (
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#1DB954]/30 group-hover:border-[#1DB954] transition-colors"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#1DB954]/20 flex items-center justify-center">
                      <Music className="w-6 h-6 text-[#1DB954]" />
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground group-hover:text-[#1DB954] truncate max-w-[60px] transition-colors">
                    {artist.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Recent Tracks */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="w-5 h-5 text-[#1DB954]" />
              <h3 className="font-semibold">Recently Played</h3>
            </div>
            <div className="space-y-3">
              {recentTracks.map((track, index) => (
                <a
                  key={index}
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-muted-foreground text-sm w-4">{index + 1}</span>
                  {track.image && (
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate group-hover:text-[#1DB954] transition-colors">
                      {track.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{track.duration}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Top Genres */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-[#1DB954]" />
              <h3 className="font-semibold">Top Genres</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {topGenres.length > 0 ? (
                topGenres.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No genre data available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
