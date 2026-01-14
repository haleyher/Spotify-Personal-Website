import { useEffect, useState } from 'react';
import { Music, Headphones, Heart, ExternalLink } from 'lucide-react';

interface Artist {
  name: string;
  image: string;
}
interface Track {
  title: string;
  artist: string;
  duration: string;
}

const SpotifySection = () => {
  const spotifyProfileUrl = 'https://open.spotify.com/user/31p4agq7cwrgwuzws2cijavlriim';

  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);
  const [topGenres, setTopGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/spotify-summary') // <--- call your serverless endpoint
      .then((res) => res.json())
      .then((data) => {
        setTopArtists(data.topArtists);
        setRecentTracks(data.recentTracks);
        setTopGenres(data.topGenres);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-20 text-muted-foreground">Loading Spotify data…</p>;

  return (
    <section id="spotify" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-spotify flex items-center justify-center">
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
            className="ml-auto flex items-center gap-2 bg-spotify text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-spotify-light transition-colors"
          >
            <span>Follow on Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Artists */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-spotify" />
              <h3 className="font-semibold">Top Artists</h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              {topArtists.map((artist, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-spotify/30"
                  />
                  <span className="text-xs text-muted-foreground truncate max-w-[60px]">{artist.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tracks */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="w-5 h-5 text-spotify" />
              <h3 className="font-semibold">Recently Played</h3>
            </div>
            <div className="space-y-3">
              {recentTracks.map((track, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <span className="text-muted-foreground text-sm w-4">{index + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate group-hover:text-spotify transition-colors">
                      {track.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Genres */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-spotify" />
              <h3 className="font-semibold">Top Genres</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {topGenres.map((genre, index) => (
                <span key={index} className="px-3 py-1 bg-spotify/20 text-spotify rounded-full text-sm font-medium">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
