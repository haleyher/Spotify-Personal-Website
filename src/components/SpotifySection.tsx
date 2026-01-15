import { Music, Headphones, Heart, ExternalLink } from 'lucide-react';

const SpotifySection = () => {
  const spotifyProfileUrl = 'https://open.spotify.com/user/31p4agq7cwrgwuzws2cijavlriim';

  // Static placeholder data - update these with your actual favorites!
  const topArtists = [
    { name: 'Artist 1', emoji: '🎵' },
    { name: 'Artist 2', emoji: '🎸' },
    { name: 'Artist 3', emoji: '🎤' },
    { name: 'Artist 4', emoji: '🎹' },
  ];

  const topGenres = ['Pop', 'Hip-Hop', 'R&B', 'Indie', 'Electronic'];

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
          {/* Spotify Embed - Replace with your playlist/profile embed */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="w-5 h-5 text-[#1DB954]" />
              <h3 className="font-semibold">Now Playing</h3>
            </div>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Replace this with your own playlist embed from Spotify
            </p>
          </div>

          {/* Top Genres */}
          <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[#1DB954]" />
              <h3 className="font-semibold">Favorite Genres</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {topGenres.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded-full text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Music className="w-5 h-5 text-[#1DB954]" />
                <h3 className="font-semibold">Top Artists</h3>
              </div>
              <div className="space-y-2">
                {topArtists.map((artist, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <span className="text-xl">{artist.emoji}</span>
                    <span className="text-sm font-medium group-hover:text-[#1DB954] transition-colors">
                      {artist.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          💡 Tip: Update the playlist embed above with your own Spotify playlist URL!
        </p>
      </div>
    </section>
  );
};

export default SpotifySection;
