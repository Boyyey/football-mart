"use client";

import { Menu, X, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-effect sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-emerald-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg pulse-glow group-hover:scale-110 transition-transform duration-300">
              F
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">FootMart</span>
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                <Zap className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="nav-link">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Home
              </span>
            </a>
            <a href="/players" className="nav-link">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                Players
              </span>
            </a>
            <a href="/clubs" className="nav-link">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Clubs
              </span>
            </a>
            <a href="/about" className="nav-link">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                About
              </span>
            </a>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="animate-spin" />
            ) : (
              <Menu size={24} className="animate-pulse" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 slide-in">
            <nav className="flex flex-col gap-4">
              {[
                { href: "/", label: "Home", color: "blue" },
                { href: "/players", label: "Players", color: "emerald" },
                { href: "/clubs", label: "Clubs", color: "purple" },
                { href: "/about", label: "About", color: "yellow" }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-3 h-3 bg-${item.color}-400 rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                  <span className="font-medium">{item.label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </div>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 