import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  liveUrl?: string;
  githubUrl: string;
}

const ProjectCard = ({ project, index, onOpenDemo }: { project: Project; index: number; onOpenDemo: (url: string) => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4500); // Change image slowly (every 4.5 seconds)
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div
      className="bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2 group h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-aos="fade-up"
      data-aos-duration="5000"
    >
      <div className="p-3 sm:p-4 pb-0 flex-shrink-0">
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
          {/* Slider container */}
          <div
            className="absolute top-0 left-0 h-full flex transition-transform duration-[1500ms] ease-in-out"
            style={{ width: "100%", transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {project.images.map((img, idx) => (
              <div key={idx} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={img}
                  alt={`${project.title} - Slide ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${index % 4 === 0
              ? "bg-gradient-to-t from-indigo-900/40 via-purple-900/20 to-transparent"
              : index % 4 === 1
                ? "bg-gradient-to-t from-pink-900/40 via-yellow-900/20 to-transparent"
                : index % 4 === 2
                  ? "bg-gradient-to-t from-green-900/40 via-blue-900/20 to-transparent"
                  : "bg-gradient-to-t from-gray-900/40 via-slate-900/20 to-transparent"
              }`}
          />
        </div>
      </div>

      <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm rounded-full hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 sm:gap-4 mt-2">
          {project.liveUrl ? (
            <button
              onClick={(e) => { e.preventDefault(); onOpenDemo(project.liveUrl!); }}
              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium text-sm md:text-base bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full hover:bg-gray-50 hover:border-indigo-200 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
          ) : (
            <a
              href="#"
              className="flex items-center gap-2 text-gray-400 font-medium text-sm md:text-base bg-gray-50 border border-gray-100 shadow-sm px-4 py-2 rounded-full cursor-not-allowed"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 font-medium text-sm md:text-base bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full hover:bg-gray-50 hover:border-indigo-200"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeDemoUrl, setActiveDemoUrl] = useState<string | null>(null);
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setActiveDemoUrl(null);
        if (fullscreenContainerRef.current) {
          fullscreenContainerRef.current.classList.add('hidden');
          fullscreenContainerRef.current.classList.remove('flex', 'flex-col');
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const openDemoFullscreen = (url: string) => {
    if (fullscreenContainerRef.current) {
      // Unhide synchronously before requesting fullscreen to avoid browser blocking
      fullscreenContainerRef.current.classList.remove('hidden');
      fullscreenContainerRef.current.classList.add('flex', 'flex-col');
      
      fullscreenContainerRef.current.requestFullscreen().then(() => {
        setActiveDemoUrl(url);
      }).catch((err) => {
        console.error("Fullscreen failed:", err);
        setActiveDemoUrl(url); // fallback to standard modal if blocked
      });
    }
  };

  const projects: Project[] = [
    //Real time chat application
    {
      title: "Real-Time Chat Application",
      description:
        "Real-time chat application with user authentication and message history",
      tech: ["Html", "Tailwind CSS", "Express", "Websocket", "MongoDB"],
      images: [
        "Screenshot 2025-06-26 193729.png",
        "Screenshot 2025-06-26 195411.png",
        "Screenshot 2025-06-26 200308.png",
      ],
      githubUrl: "https://github.com/Blue55berry/Task-assignment",
    },
    //Task Assignment System completed
    {
      title: "Task Assignment System",
      description:
        "Task assignment and management system with real-time updates",
      tech: ["Html", "Tailwind CSS", "Php", "Xampp Server", "PhpMyAdmin"],
      images: [
        "task-3.jpg",
        "task-2.jpg",
        "task-3.jpg",
      ],
      githubUrl: "https://github.com/Blue55berry/Task-assignment",
    },
    //Car Showroom completed
    {
      title: "Car Showroom",
      description:
        "Car showroom website with dynamic content and responsive design",
      tech: ["React", "Tailwind CSS", "Express"],
      images: [
        "car-showroom.jpg",
        "car-showroom-2.jpg",
        "car-showroom-3.jpg",
      ],
      liveUrl: "https://car-showroom-0.web.app/",
      githubUrl: "https://github.com/Blue55berry/anime-drive-experience",
    },
    //Personal Finance Tracker completed
    {
      title: "Personal Finance Tracker",
      description:
        "Personal finance tracker with budgeting and expense categorization",
      tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
      images: [
        "finance-1.jpg",
        "finance-2.jpg",
        "finance-3.jpg",
      ],
      githubUrl: "https://github.com/Blue55berry/Finance-Tracker-System",
    },
    //Smart Recipe Generator completed
    {
      title: "Smart Recipe Generator",
      description:
        "smart recipe generator that suggests recipes based on available ingredients",
      tech: ["React", "Tailwind CSS", "Express", "Themealdb API", "MongoDB"],
      images: [
        "meal-1.jpg",
        "meal-2.jpg",
        "meal-3.jpg",
      ],
      githubUrl: "https://github.com/Blue55berry/Recipe-Generator",
    },
    //Apple Store completed
    {
      title: "Apple Store",
      description: "Apple Store product showcase with interactive features",
      tech: ["Html", "Tailwind CSS", "JavaScript", "AOS Library"],
      images: [
        "apple-store-1.jpg",
        "apple-store-2.jpg",
        "apple-store-3.jpg",
      ],
      liveUrl: "https://blue55berry.github.io/apple-Store/",
      githubUrl: "https://github.com/Blue55berry/apple-Store",
    },
    //Coffee Shop completed
    {
      title: "Coffee Shop",
      description: "Coffee shop landing page with modern design",
      tech: ["Html", "Tailwind CSS", "3D model"],
      images: [
        "coffee-3.jpg",
        "coffee-2.jpg",
        "./Screenshot 2025-06-26 200308.png",
      ],
      liveUrl: "https://blue55berry.github.io/Coffee-Shop/",
      githubUrl: "https://github.com/Blue55berry/Coffee-Shop",
    },
    //Movie Booking System completed
    {
      title: "Movie Booking System",
      description: "Movie booking system with real-time updates",
      tech: ["Html", "Tailwind CSS", "Php", "Xampp Server", "PhpMyAdmin"],
      images: [
        "movie-1.jpg",
        "movie-2.jpg",
        "movie-3.jpg",
      ],
      githubUrl: "https://github.com/Blue55berry/Movie-Booking",
    },
    //Domain Based Skill Assessment Portal
    {
      title: "Domain Based Skill Assessment Portal",
      description: "Domain Based Skill Assessment Portal",
      tech: ["React.js", "Tailwind CSS", "Express.js","Monaco Editor","Judge0 API", "MongoDB"],
      images: [
        "domain-1.jpg",
        "domain-2.jpg",
        "domain-3.jpg",
      ],
      githubUrl: "https://github.com/Blue55berry/domain_based_skill",
    },
    //Oncampus Selection Portal
    {
      title: "Oncampus Selection Portal ",
      description: "oncampus selection portal",
      tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
      images: [
        "oncapus-1.jpg",
        "oncapus-2.jpg",
        "oncapus-3.jpg",
      ],
      githubUrl: "https://github.com/kalai66/student-career-portal-16",
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-24 md:pb-12 md:mt-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl mt-4 md:mt-0 sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 sm:mb-12 md:mb-16 transform hover:scale-105 transition-all duration-500 text-gray-900">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} onOpenDemo={openDemoFullscreen} />
          ))}
        </div>
      </div>

      <div ref={fullscreenContainerRef} className="fixed inset-0 z-[100] bg-black hidden animate-fade-in">
        {activeDemoUrl && (
          <div className="flex flex-col h-full w-full">
            <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-900 text-white shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium text-gray-300 truncate max-w-[150px] sm:max-w-md">{activeDemoUrl}</span>
              </div>
              <button 
                onClick={() => {
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    setActiveDemoUrl(null);
                    if (fullscreenContainerRef.current) {
                      fullscreenContainerRef.current.classList.add('hidden');
                      fullscreenContainerRef.current.classList.remove('flex', 'flex-col');
                    }
                  }
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
              >
                Exit Fullscreen
              </button>
            </div>
            <iframe 
              src={activeDemoUrl} 
              className="w-full flex-grow border-none bg-white"
              title="Live Demo Preview"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
