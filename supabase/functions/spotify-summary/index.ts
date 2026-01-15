import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function getAccessToken() {
  const clientId = Deno.env.get('SPOTIFY_CLIENT_ID');
  const clientSecret = Deno.env.get('SPOTIFY_CLIENT_SECRET');
  const refreshToken = Deno.env.get('SPOTIFY_REFRESH_TOKEN');

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify credentials');
  }

  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  const data = await resp.json();
  
  if (!data.access_token) {
    console.error('Spotify token response:', data);
    throw new Error('Failed to get access token');
  }
  
  return data.access_token;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Getting Spotify access token...');
    const token = await getAccessToken();
    console.log('Got access token, fetching data...');

    // Fetch top artists
    const topArtistsResp = await fetch(
      'https://api.spotify.com/v1/me/top/artists?limit=4&time_range=short_term',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const topArtistsData = await topArtistsResp.json();
    console.log('Top artists response status:', topArtistsResp.status);

    // Fetch recently played
    const recentResp = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=5',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const recentData = await recentResp.json();
    console.log('Recent tracks response status:', recentResp.status);

    // Extract top genres from artists
    const topGenres = topArtistsData.items 
      ? Array.from(
          new Set(topArtistsData.items.flatMap((artist: any) => artist.genres))
        ).slice(0, 5)
      : [];

    const response = {
      topArtists: topArtistsData.items?.map((a: any) => ({
        name: a.name,
        image: a.images[0]?.url || '',
        url: a.external_urls?.spotify || '',
      })) || [],
      recentTracks: recentData.items?.map((t: any) => ({
        title: t.track.name,
        artist: t.track.artists.map((a: any) => a.name).join(', '),
        duration: formatDuration(t.track.duration_ms),
        image: t.track.album.images[2]?.url || t.track.album.images[0]?.url || '',
        url: t.track.external_urls?.spotify || '',
      })) || [],
      topGenres,
    };

    console.log('Returning response with', response.topArtists.length, 'artists and', response.recentTracks.length, 'tracks');

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in spotify-summary function:', errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
