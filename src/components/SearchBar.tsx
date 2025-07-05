"use client";

import { useState, useEffect } from "react";
import { Search, Loader2, Sparkles, Zap } from "lucide-react";

interface SearchPlayer {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  image?: string;
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search for any football player..." }: SearchBarProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchPlayer[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (value.length > 2) {
      setIsLoading(true);
      setError(null);
      fetch(`/api/search-players?q=${encodeURIComponent(value)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) setError(data.error);
          else setSuggestions(data.players);
          setIsLoading(false);
          setShowSuggestions(true);
        })
        .catch(() => {
          setError("Failed to load suggestions.");
          setIsLoading(false);
        });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [value]);

  const handlePlayerSelect = (player: SearchPlayer) => {
    onChange(player.name);
    setShowSuggestions(false);
    // Navigate to player page
    window.location.href = `/player/${player.id}`;
  };

  return (
    <div className="relative">
      <div className="relative group shadow-lg rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 focus-within:shadow-blue-500/30 transition-all duration-300">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 transition-all duration-300 group-hover:text-blue-400">
          <Search className="w-6 h-6" />
        </div>
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          placeholder={placeholder}
          className="search-input pl-16 pr-16 py-5 md:py-4 text-lg md:text-base"
        />
        
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {isLoading && (
            <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
          )}
          {isFocused && !isLoading && (
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          )}
        </div>
        
        {/* Animated border effect */}
        <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 ${
          isFocused ? 'ring-4 ring-blue-500/40 shadow-xl' : 'ring-0 shadow-none'
        }`}></div>
      </div>

      {/* Enhanced Suggestions Dropdown */}
      {showSuggestions && (
        <div className="search-suggestions slide-in">
          {error && (
            <div className="p-6 text-center text-red-400">{error}</div>
          )}
          {!error && suggestions.length > 0 && suggestions.map((player, index) => (
            <div
              key={player.id}
              onClick={() => handlePlayerSelect(player)}
              className="suggestion-item flex items-center gap-4 md:gap-4 py-5 md:py-4 cursor-pointer hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-emerald-500/10 transition-all duration-200 rounded-xl mb-1 last:mb-0"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {player.image ? (
                <img src={player.image} alt={player.name} className="w-12 h-12 md:w-10 md:h-10 rounded-full object-cover shadow-md" />
              ) : (
                <div className="w-12 h-12 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 via-emerald-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-sm shadow-md">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-lg truncate">{player.name}</div>
                <div className="text-sm text-gray-300 truncate">{player.club} • {player.position}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                  {player.nationality}
                </div>
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
          ))}
          {!error && suggestions.length === 0 && value.length > 2 && !isLoading && (
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-400">No players found</p>
              <p className="text-sm text-gray-500 mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 