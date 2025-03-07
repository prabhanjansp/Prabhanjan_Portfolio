import React from 'react'
import { motion } from "framer-motion";
import LinkIcon from "@mui/icons-material/Link";
import { Card } from '@mui/material';



const Projects = ({ isDarkMode }) => {
    const projects = [
      {
        title: "Blog Application",
        description: "A full-stack blog application built with MERN",
        technologies: [
          "React.js",
          "Redux Toolkit",
          "Firebase",
          "Nodejs",
          "Express",
          "Mongo Db",
          "Tailwind",
          "FlowBit",
        ],
        link: "https://github.com/prabhanjansp/MeenBlogApp",
      },
      {
        title: "Namma Mart Application",
        description:
          "Namma Mart is a React Native quick commerce app designed for fast and convenient shopping, delivering essentials right to your doorstep.",
        technologies: [
          "React.Native",
          "React Native Elements",
          "React NativeFirebase",
          "React Native Paper",
        ],
        link: "https://github.com/Raorakshith/NammaMartNew",
      },
  
      {
        title: "YouTube Clone Application",
        description:
          "This is a YouTube Clone built using modern web technologies. It allows users to browse and search YouTube videos seamlessly using the YouTube v3 API from Rapid API.",
        technologies: [
          "Reactjs",
          "Material UI",
          "Axios",
          "Rapid API",
          "YouTube API",
        ],
        link: "https://github.com/prabhanjansp/youtubeclone/tree/main/youtubeclone",
      },
      {
        title: "Mock Test Platform",
        description: "Comprehensive platform for online testing and assessment",
        technologies: [
          "React",
          "React Native",
          "Redux",
          "Echarts",
          "REST API",
          "Axios",
        ],
        link: "https://samai.scontiapp.com/online-mocktest",
      },
      {
        title: "Sconti Admin Dashboard",
        description: "Advanced quiz management system with role-based access",
        technologies: [
          "React.js",
          "Material-UI",
          "Firebase",
          "Spreadsheet API",
          "Axios",
          "Rest API",
          "Axios",
        ],
        link: "https://scontiadmin.web.app/",
      },
      {
        title: "Scontinent Corporate Website",
        description: "Company's official website with optimized SEO",
        technologies: [
          "React.js",
          "Firebase",
          "Google Tag Manager",
          "Echarts",
          "Youtube API",
          "React Helmet",
          "Framer Motion",
        ],
        link: "https://www.scontinent.com/",
      },
      {
        title: "Sconti Web Application",
        description:
          "Sconti is a socio-educational web application that connects students with professionals to enhance their career growth. It facilitates mentorship, skill development, and networking, empowering students to explore opportunities and achieve their career goals.",
        technologies: ["Reactjs", "Material UI", "Firebase", "GraphQl"],
        link: "https://github.com/scontinent/ScontiConnectWeb",
      },
    ];
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 1.0 }}
        className="min-h-screen pt-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-8 `}
          >
             <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
             Featured Projects
            </span>
        
          </h2>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} whileHover={{ scale: 1.08 }}>
                <div
                  className={` ${
                    isDarkMode
                    ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                    : "bg-gradient-to-bl from-gray-50 to-blue-200"
                  } p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform h-full flex flex-col`}
                >
                  <h3 className="text-xl font-bold text-[#E84C3D] mb-2 flex items-center justify-between">
                    {project.title}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E84C3D]"
                      >
                        <LinkIcon
                          size={20}
                          color={isDarkMode ? "#f2f2f2" : "#262626"}
                        />
                      </a>
                    )}
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-[#fefefe]" : "text-[#262626]"
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                     <Card elevation={5} style={{borderRadius: "32px"}}>
                       <span
                        key={i}
                        className={`${
                          isDarkMode
                          ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                          : "bg-gradient-to-bl from-gray-50 to-blue-200"
                        } px-3 py-1 text-sm text-[#E84C3D]  ` }
                      >
                        {tech}
                      </span>
                     </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

export default Projects