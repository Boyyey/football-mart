"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Star, MapPin, Users, Calendar, Trophy, Target, TrendingUp, Award, Flag, Sparkles, Zap, Heart, Share2 } from "lucide-react";
import Header from "@/components/Header";

interface Player {
  id: number;
  name: string;
  fullName: string;
  age: number;
  dateOfBirth: string;
  nationality: string;
  height: string;
  position: string;
  currentClub: string;
  image?: string;
}

export default function PlayerPage({ params }: { params: { id: string } }) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/player/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setPlayer(data);
        setLoading(false);
        setTimeout(() => setIsLoaded(true), 100);
      })
      .catch(() => {
        setError("Failed to load player data.");
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="glass-effect rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <div className="text-2xl font-bold gradient-text">Loading player information</div>
              <div className="loading-dots"></div>
            </div>
            <p className="text-gray-300">Gathering comprehensive player data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !player) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="glass-effect rounded-3xl p-12 text-center">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-red-400 mb-4">Player Not Found</h2>
            <p className="text-gray-300">{error || "The player you're looking for doesn't exist in our database."}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <Header />
      
      <main className="container mx-auto px-2 md:px-4 py-8 flex flex-col items-center w-full">
        {/* Enhanced Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 mb-8 group"
        >
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium">Back to Search</span>
        </button>

        {/* Enhanced Player Header */}
        <div className={`glass-effect rounded-3xl p-6 md:p-10 mb-10 w-full max-w-5xl shadow-xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            {player.image ? (
              <img src={player.image} alt={player.name} className="player-avatar object-cover shadow-lg" />
            ) : (
              <div className="player-avatar group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {player.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 gradient-text truncate">{player.name}</h1>
              <p className="text-xl text-gray-300 mb-6 truncate">{player.fullName}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Current Club</p>
                    <p className="text-white font-semibold truncate">{player.currentClub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-200">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Nationality</p>
                    <p className="text-white font-semibold truncate">{player.nationality}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-200">
                    <Calendar className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Age</p>
                    <p className="text-white font-semibold">{player.age} years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-200">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Position</p>
                    <p className="text-white font-semibold truncate">{player.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Enhanced Personal Information */}
          <div className="lg:col-span-1">
            <div className={`glass-effect rounded-3xl p-8 mb-8 shadow-lg transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                Personal Information
              </h2>
              <div className="space-y-4">
                {[ 
                  { label: "Full Name", value: player.fullName },
                  { label: "Date of Birth", value: new Date(player.dateOfBirth).toLocaleDateString() },
                  { label: "Nationality", value: player.nationality },
                  { label: "Height", value: player.height },
                  { label: "Position", value: player.position },
                ].map((item, index) => (
                  <div key={index} className="stat-item group">
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{item.label}</span>
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200 truncate">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Add more sections or stats here in the future */}
        </div>
      </main>
    </div>
  );
} 