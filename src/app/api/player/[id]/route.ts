import { NextRequest, NextResponse } from 'next/server';
import { topPlayers } from '@/data/topPlayers';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  if (!id) return NextResponse.json({ error: 'Invalid player ID' }, { status: 400 });
  const player = topPlayers.find((p: any) => p.id === id);
  if (!player) return NextResponse.json({ error: 'Player not found' }, { status: 404 });
  return NextResponse.json(player);
} 