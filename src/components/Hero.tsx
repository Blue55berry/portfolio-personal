import React, { useRef } from "react";
import pees from "assets/peeps-avatar-alpha.png";
import { Loader } from "lucide-react";
import styled from "styled-components";

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

const Hero = ({ setCurrentSection }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    setCurrentSection("about");
    if (heroRef.current) {
      const elem = heroRef.current as HTMLElement & {
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
      };
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen w-full flex items-center justify-center relative px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32"
    >
      {/* Main Image/Card */}
      <div className="relative">
        <div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 cursor-pointer transform hover:scale-105 transition-all duration-700 relative overflow-hidden group rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900"
          onClick={handleCardClick}
        >
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white/10 rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-2 border-white/20 rounded-full"></div>
          </div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-1 md:mb-2">
                AP
              </div>
              <div className="text-xs sm:text-sm md:text-base tracking-widest opacity-80">
                Click Here
              </div>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        </div>
      </div>

      {/* Floating Educations text */}
      <div
        className="fixed left-4 md:left-3 font-bold top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-sm md:text-base lg:text-xl cursor-pointer hover:text-gray-400 transition-colors duration-200 z-20"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)" }}
        onClick={() => setCurrentSection("education")}
      >
        Educations
      </div>

      {/* Navigation buttons aligned to the bottom of the card */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 md:gap-12 lg:gap-16"
        style={{ bottom: "6rem" }}
      >
        <button
          onClick={() => setCurrentSection("skills")}
          className="text-md font-bold text-gray-400 sm:text-sm md:text-lg lg:text-xl hover:text-gray-900 transition-all duration-300 hover:scale-105"
          aria-label="Navigate to Skills section"
        >
          My Skills
        </button>
      </div>
    </div>
  );
};

export default Hero;
