"use client";

import React, { useState, useEffect } from "react";

export default function ProfileSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  
  const slides = [
    { image: "work", text: "Senior Insights Manager @ C.H. Robinson" },
    { image: "coding", text: "Vibe Coding Applications" },
    { image: "dallas", text: "Living in Dallas" },
    { image: "travel", text: "Publishing a Weekly AI Newsletter" },
    { image: "parks", text: "Traveling to National Parks" },
    { image: "vikings", text: "Waiting on a Vikings Super Bowl" }
  ];

  const nextSlide = () => {
    setIsManualControl(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsManualControl(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-rotate carousel every 3 seconds (only if not manual control)
  useEffect(() => {
    if (!isManualControl) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [slides.length, isManualControl]);

  return (
    <section id="home" className="w-full pt-24 pb-24 px-6 bg-gradient-to-br from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Half - Profile Photo */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="flex flex-col items-center mt-16">
              {/* Greeting above profile picture */}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-semibold text-white">Hi, I'm Aryan!</h1>
              </div>
              <div className="w-80 h-80 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src="/pfp.png" 
                  alt="Aryan Shah - Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {/* LinkedIn Icon - 25% larger */}
                <a href="https://www.linkedin.com/in/aryan-shah/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="LinkedIn">
                  <svg className="w-7.5 h-7.5 text-white/80 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.842 18.083V9.667h-2.7v8.416h2.7zM7.492 8.617c.942 0 1.529-.627 1.529-1.408-.017-.8-.587-1.408-1.512-1.408S5.98 6.409 5.98 7.208c0 .781.587 1.409 1.512 1.409h.017zM18.79 18.083v-4.775c0-2.566-1.371-3.759-3.2-3.759-1.475 0-2.135.811-2.5 1.381V9.667h-2.7c.035.746 0 8.416 0 8.416h2.7v-4.7c0-.243.018-.486.09-.659.197-.486.647-1 1.404-1 .99 0 1.386.756 1.386 1.864v4.495h2.7z"/>
                  </svg>
                </a>
                
                {/* GitHub Icon */}
                <a href="https://github.com/AryanShah2000" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="GitHub">
                  <svg className="w-6 h-6 text-white/80 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                
                {/* Substack Icon */}
                <a href="https://shaharyan.substack.com/?utm_campaign=profile_chips" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Substack">
                  <svg className="w-6 h-6 text-white/80 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Half - Currently I am section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl flex flex-col mt-16">
              <h2 className="text-3xl font-semibold text-white mb-6 text-center">Currently I am:</h2>
              
              {/* Carousel Container */}
              <div className="relative overflow-hidden flex-grow flex flex-col justify-center">
                {/* Left Arrow - aligned with middle of image */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/3 transform translate-y-1/4 z-10 glass p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow - aligned with middle of image */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/3 transform translate-y-1/4 z-10 glass p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="p-6 text-center">
                        {/* Image - Show actual images for specific slides, placeholder for others */}
                        <div className="w-full h-80 mx-auto mb-2 bg-white/10 border-2 border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                          {slide.image === "dallas" ? (
                            <img 
                              src="/dallas.png" 
                              alt="Living in Dallas" 
                              className="w-full h-full object-cover"
                            />
                          ) : slide.image === "work" ? (
                            <img 
                              src="/CHR.jpg" 
                              alt="C.H. Robinson workplace" 
                              className="w-full h-full object-cover"
                            />
                          ) : slide.image === "coding" ? (
                            <img 
                              src="/vibecode.png" 
                              alt="Vibe coding applications" 
                              className="w-full h-full object-cover"
                            />
                          ) : slide.image === "travel" ? (
                            <img 
                              src="/newsletter.png" 
                              alt="Publishing a Weekly AI Newsletter" 
                              className="w-full h-full object-cover"
                            />
                          ) : slide.image === "parks" ? (
                            <img 
                              src="/traveling.png" 
                              alt="Traveling to National Parks" 
                              className="w-full h-full object-contain"
                            />
                          ) : slide.image === "vikings" ? (
                            <img 
                              src="/vikesSB.png" 
                              alt="Waiting on a Vikings Super Bowl" 
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="text-white/60 text-center">
                              <svg 
                                className="w-20 h-20 mx-auto mb-2" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                              </svg>
                              <p className="text-xs">{slide.image}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Text moved to where dots were */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-white mb-3">{slides[currentSlide].text}</h3>
                  
                  {/* Carousel Indicators moved under text */}
                  <div className="flex justify-center space-x-2">
                    {slides.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-opacity ${
                          index === currentSlide ? 'bg-white/60' : 'bg-white/20'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}