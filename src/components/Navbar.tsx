import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass px-6 py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-xl font-semibold text-white">
            Aryan Shah
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">
              Home
            </a>
            <a href="#experience" className="text-white/90 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-white/90 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white/90 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}