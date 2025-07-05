import { NextRequest, NextResponse } from 'next/server';
import { topPlayers } from '@/data/topPlayers';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';
  if (!query || query.length < 2) {
    return NextResponse.json({ players: [] });
  }
  const results = topPlayers.filter((player: any) =>
    player.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 10).map((player: any) => ({
    id: player.id,
    name: player.name,
    club: player.currentClub,
    position: player.position,
    nationality: player.nationality,
    image: player.image,
  }));
  return NextResponse.json({ players: results });
} 