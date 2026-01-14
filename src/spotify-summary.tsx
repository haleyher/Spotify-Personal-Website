// src/spotify-summary.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

async function getAccessToken() {
  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });
  const data = await resp.json();
  return data.access_token;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const token = await getAccessToken();

    const topArtistsResp = await fetch(
      'https://api.spotify.com/v1/me/top/artists?limit=4',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const topArtistsData = await topArtistsResp.json();

    const recentResp = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=4',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const recentData = await recentResp.json();

    const topGenres = Array.from(
      new Set(topArtistsData.items.flatMap((artist: any) => artist.genres))
    ).slice(0, 5);

    res.status(200).json({
      topArtists: topArtistsData.items.map((a: any) => ({
        name: a.name,
        image: a.images[0]?.url,
      })),
      recentTracks: recentData.items.map((t: any) => ({
        title: t.track.name,
        artist: t.track.artists.map((a: any) => a.name).join(', '),
        duration: new Date(t.track.duration_ms).toISOString().slice(14, 19),
      })),
      topGenres,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Spotify fetch failed' });
  }
}
