"use client";

import { useState, useEffect } from "react";
import { Search, TrendingUp, Users, Trophy, Star, Sparkles, Zap, Target, Award } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import TrendingPlayers from "@/components/TrendingPlayers";
import Header from "@/components/Header";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-emerald-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl pulse-glow">
                F
              </div>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text floating-animation">FootMart</span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the world's most comprehensive football player database. 
            <span className="text-blue-400 font-semibold"> Search, explore, and dive deep</span> into player statistics, 
            career achievements, and market values.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search for any football player..."
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400">
                Try: "Messi", "Ronaldo", "Haaland"
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Search</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Find any player instantly with our intelligent search system and real-time suggestions</p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Career Stats</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Complete career statistics, achievements, and detailed performance metrics</p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Market Value</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Real-time market values, transfer information, and financial insights</p>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Club Info</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Current club details, transfer history, and team information</p>
          </div>
        </div>

        {/* Enhanced Trending Players */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trending Players</h2>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <TrendingPlayers />
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Explore?</h3>
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Start searching for your favorite players and discover comprehensive information about their careers, 
              achievements, and current status in the football world.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>1000+ Players</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Real-time Data</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
