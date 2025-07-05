import { NextRequest, NextResponse } from 'next/server';
import { topPlayers } from '@/data/topPlayers';

export async function GET(req: NextRequest) {
  // For demo, just return the first 4 players as trending
  const players = topPlayers.slice(0, 4).map((player: any) => ({
    id: player.id,
    name: player.name,
    club: player.currentClub,
    position: player.position,
    nationality: player.nationality,
    image: player.image,
  }));
  return NextResponse.json({ players });
} 