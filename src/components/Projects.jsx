import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import LinkIcon from "@mui/icons-material/Link";

// Memoized ProjectCard Component
const ProjectCard = React.memo(({ project, isDarkMode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden shadow-lg rounded-2xl transition-transform duration-300 transform ${
        isDarkMode
          ? "bg-gradient-to-bl from-zinc-900 to-blue-900 text-white"
          : "bg-gradient-to-bl from-gray-50 to-blue-200 text-gray-900"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-semibold flex items-center justify-between min-h-[3rem]">
          {project.title}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E84C3D]  hover:scale-110 transition"
            >
              <LinkIcon fontSize="small"  />
            </a>
          )}
        </h3>
        <p className="mt-2 text-sm opacity-80">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

const Projects = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = useMemo(
    () => [
      {
        title: "Blog Application",
        description: "A full-stack blog application built with MERN",
        technologies: [
          "React.js",
          "Redux Toolkit",
          "Firebase",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind",
          "FlowBit",
        ],
        link: "https://github.com/prabhanjansp/MeenBlogApp",
      },
      {
        title: "Namma Mart Application",
        description:
          "A quick commerce app designed for fast and convenient shopping, delivering essentials to your doorstep.",
        technologies: [
          "React Native",
          "React Native Elements",
          "React Native Firebase",
          "React Native Paper",
        ],
        link: "https://github.com/Raorakshith/NammaMartNew",
      },
      {
        title: "YouTube Clone Application",
        description:
          "A YouTube Clone built using modern web technologies with seamless video browsing and searching.",
        technologies: ["React.js", "Material UI", "Axios", "YouTube API"],
        link: "https://github.com/prabhanjansp/youtubeclone/tree/main/youtubeclone",
      },
      {
        title: "Movie Explorer📽️",
        description:
          "Movie Explorer is a modern, responsive web application built with React that allows users to discover trending movies, TV shows, and actors. Powered by the TMDB API, it offers a sleek interface with dark/light mode, search functionality, and personalized watchlists.",
        technologies: [
          "React.js",
          "Material UI",
          "Axios",
          "LocalStorage ",
          "TMBD API",
          "Context API","debouncing", "react-multi-carousel"
        ],
        link: "https://github.com/prabhanjansp/movieapp",
      },
      {
        title: "CryptoPulse",
        description:
          "CryptoPulse is a modern, responsive cryptocurrency dashboard built using React (with Vite) and Material UI. It offers real-time market data, intuitive charts, and advanced filtering options to help users stay up-to-date with the latest crypto trends. Designed for performance and user experience, CryptoPulse is a sleek and powerful tool for crypto enthusiasts and investors alike.",
        technologies: [
          "React.js",
          "Material UI",
          "Axios",
          "LocalStorage ",
          "Crypto API",
          "News API",
          "Context API",
          "React-Echarts",
        ],
        link: "https://github.com/prabhanjansp/crypto-dashboard",
      },
      {
        title: "ClimaVue🌦️",
        description:
          "ClimaVue is a sleek, responsive weather application that delivers real-time weather data, detailed forecasts, and weather-related news in an intuitive interface. Built with React, Material-UI, and powered by OpenWeatherMap API, it offers",
        technologies: [
          "React.js",
          "Material UI",
          "Axios",
          "LocalStorage ",
          "OpenWeatherMap API",
          "React-Echarts",
          "Context API",
        ],
        link: "https://github.com/prabhanjansp/weather-app",
      },
      {
        title: "PrepWise",
        description:
          "PrepWise is an AI-powered mock interview platform designed to help job seekers prepare for interviews with a voice-based AI assistant. The platform simulates real interview scenarios by generating and asking industry-specific questions, evaluating responses, and providing instant feedback.",
        technologies: [
          "NextJS",
          "TypeScript",
          "VAPI",
          "Gemini",
          "ShadCN",
          "Firebase",
          "Vercel",
        ],
        link: "https://mockinterviewapp-15es.vercel.app/",
      },
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pt-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
