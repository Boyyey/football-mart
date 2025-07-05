"use client";

import { useState, useEffect } from "react";
import { Star, MapPin, Users, Sparkles, Zap, Trophy } from "lucide-react";

interface SearchPlayer {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  image?: string;
}

export default function TrendingPlayers() {
  const [players, setPlayers] = useState<SearchPlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredPlayer, setHoveredPlayer] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/trending-players")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setPlayers(data.players);
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to load trending players.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="player-card animate-pulse">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-600 rounded"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-600 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-2 md:px-0">
      {players.map((player, index) => (
        <div
          key={player.id}
          onClick={() => window.location.href = `/player/${player.id}`}
          onMouseEnter={() => setHoveredPlayer(player.id)}
          onMouseLeave={() => setHoveredPlayer(null)}
          className="player-card group shadow-xl hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0" />
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center gap-4 mb-6">
              {player.image ? (
                <img src={player.image} alt={player.name} className="player-avatar object-cover shadow-md" />
              ) : (
                <div className="player-avatar group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-xl group-hover:text-blue-400 transition-colors duration-300 mb-1 truncate">
                  {player.name}
                </h3>
                <p className="text-gray-300 text-sm truncate">{player.position}</p>
                {hoveredPlayer === player.id && (
                  <div className="flex items-center gap-1 mt-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-xs text-yellow-400">Click to view details</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm group/item">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-blue-500/30 transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 truncate">{player.club}</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm group/item">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-emerald-500/30 transition-colors duration-200">
                  <Users className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 truncate">{player.nationality}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-200">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 font-semibold text-sm">View Profile</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-purple-400" />
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-10" />
        </div>
      ))}
    </div>
  );
} 