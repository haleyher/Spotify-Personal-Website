import { Music, Headphones, Heart, ExternalLink } from 'lucide-react';

const SpotifySection = () => {
  const spotifyProfileUrl = "https://open.spotify.com/user/31p4agq7cwrgwuzws2cijavlriim";
  
  // Placeholder data - would be fetched from Spotify API with proper OAuth
  const topArtists = [
    { name: "Artist 1", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" },
    { name: "Artist 2", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop" },
    { name: "Artist 3", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop" },
    { name: "Artist 4", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop" },
  ];

  const recentTracks = [
    { title: "Track Name", artist: "Artist Name", duration: "3:24" },
    { title: "Another Song", artist: "Another Artist", duration: "4:12" },
    { title: "Great Track", artist: "Cool Artist", duration: "2:58" },
    { title: "Favorite Tune", artist: "Best Artist", duration: "3:45" },
  ];

  const topGenres = ["Pop", "Indie", "Electronic", "Hip-Hop", "R&B"];

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
            <p className="text-xs text-muted-foreground mt-4 italic">
              *Connect Spotify API to show real data
            </p>
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
            <p className="text-xs text-muted-foreground mt-4 italic">
              *Connect Spotify API to show real data
            </p>
          </div>

          {/* Top Genres & Stats */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-spotify" />
              <h3 className="font-semibold">Top Genres</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {topGenres.map((genre, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-spotify/20 text-spotify rounded-full text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            {/* Spotify Embed Placeholder */}
            <div className="bg-background/50 rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-2">🎵 Favorite Playlist</p>
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Note about integration */}
        <p className="text-center text-muted-foreground text-xs mt-6">
          Want to see my real listening stats? Full Spotify API integration coming soon!
        </p>
      </div>
    </section>
  );
};

export default SpotifySection;
