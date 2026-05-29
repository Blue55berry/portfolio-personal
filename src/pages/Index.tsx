import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Educations from "../components/Educations";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 w-full h-full">
        <iframe
          src="https://lottie.host/embed/4500503b-6ea5-4b30-9808-8e90194e32dd/GIT4YfuWDx.lottie"
          style={{
            width: 220,
            height: 220,
            border: "none",
            background: "transparent",
          }}
          title="Loading animation"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex overflow-x-hidden">
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <main className="flex-1 min-w-0 min-h-screen ml-0 md:ml-10 lg:ml-12 transition-all duration-500 flex flex-col">
        <section
          className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out ${currentSection === "hero"
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none absolute"
            }`}
        >
          {currentSection === "hero" && (
            <Hero setCurrentSection={setCurrentSection} />
          )}
        </section>
        <section
          className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out ${currentSection === "about"
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none absolute"
            }`}
        >
          {currentSection === "about" && <About />}
        </section>
        <section
          className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out ${currentSection === "skills"
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none absolute"
            }`}
        >
          {currentSection === "skills" && <Skills />}
        </section>
        <section
          className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out ${currentSection === "projects"
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none absolute"
            }`}
        >
          {currentSection === "projects" && <Projects />}
        </section>
        <section
          className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out ${currentSection === "education"
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none absolute"
            }`}
        >
          {currentSection === "education" && <Educations />}
        </section>
      </main>

      {currentSection !== "hero" && (
        <button
          onClick={() => setCurrentSection("hero")}
          className="fixed top-3 md:top-10 left-1/2 transform  -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
        >
          <ArrowLeft className="w-4 h-4 md:w-9 md:h-9 cursor-pointer text-gray-700" />
        </button>
      )}

      <div className="fixed top-3 md:top-6 left-5 tracking-wide md:right-6 text-gray-600 font-light md:text-4xl  text-xl z-50 libre-baskerville-regular">
        Portfolio
      </div>
    </div>
  );
};

export default Index;
