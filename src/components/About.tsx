import React, { useState } from "react";
import Skills from "./Skills";
import Educations from "./Educations";

const About = () => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  // Scroll to section by id
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 pb-24 md:pb-8">
      {/* Navigation */}
      <div className="fixed bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 md:gap-12 lg:gap-16 z-50">
        <button
          className="text-xs sm:text-sm md:text-lg lg:text-xl font-light text-gray-900 border-b-2 border-gray-900 focus:outline-none"
          onClick={() => scrollToSection("about")}
          type="button"
        >
          About
        </button>
      </div>

      {/* About Section */}
      <div id="about" className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-stretch mt-16 md:mt-12">
        {/* Text Section */}
        <div className="md:col-span-7 bg-gradient-to-br from-gray-900 to-black text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-2xl order-2 md:order-1 transform hover:scale-105 transition-all duration-500 w-full h-full flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight libre-baskerville-regular">
            Hi,
            <br />
            I'm <span className="text-blue-400 sacramento-regular tracking-wider"> Abi!</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sacramento-regular">
            I'm a Full Stack Developer passionate about building robust and user-friendly web applications. I focus on writing clean, maintainable code and optimizing performance across the stack—from front-end interfaces to back-end logic.
          </p>
        </div>

        {/* Avatar Section */}
        <div className="md:col-span-5 relative flex items-center justify-center order-1 md:order-2 transform hover:scale-105 transition-all duration-500 w-full aspect-[4/5] sm:aspect-[4/5] md:aspect-auto md:h-full">
          <div className="relative text-center flex justify-center w-full h-full">
            <img
              src="/portfolio-photo.jpg"
              alt="Abi's Avatar"
              className="w-full h-full object-cover rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500 border-4 border-white/80"
              onClick={() => setIsPhotoOpen(true)}
            />
            {/* AP Logo in bottom right of avatar card */}
            <div className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white text-black rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-200">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold font-serif tracking-widest">AP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Photo Modal */}
      {isPhotoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setIsPhotoOpen(false)}
        >
          <img 
            src="/portfolio-photo.jpg" 
            alt="Abi's Full Avatar" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 flex items-center justify-center focus:outline-none transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsPhotoOpen(false); }}
            aria-label="Close photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

    </div>
  );
};

export default About;
