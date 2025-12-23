import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { projectsData } from "../data/ProjectsData";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";

const Projects = ({ darkMode, id }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Expanded tech icons mapping
  const techIcons = {
    JavaScript: <SiJavascript />,
    React: <SiReact />,
    "Next.js": <SiNextdotjs />,
    TypeScript: <SiTypescript />,
    MongoDB: <SiMongodb />,
    TailwindCSS: <SiTailwindcss />,
    "Node.js": <SiNodedotjs />,
    Firebase: <SiFirebase />,
    GraphQL: <SiGraphql />,
  };

  // Get all unique technologies for filtering
  const allTechnologies = ["All", ...new Set(projectsData.flatMap(project => project.technologies))];

  // Filter projects based on selected technology
  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(activeFilter));

  // Card variants for staggered animation
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  // Container variant for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
    >


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title section with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block relative mb-4">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-gray-100" : "text-gray-900"
              }`}>
              Featured <span className={`bg-clip-text text-transparent ${darkMode
                  ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                  : "bg-gradient-to-r from-amber-500 to-amber-600"
                }`}>Projects</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 rounded-full ${darkMode ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-gradient-to-r from-amber-500 to-amber-600"
                }`}
            />
          </div>
          <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            Crafting digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Filter chips for technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {allTechnologies.map((tech, index) => (
            <motion.button
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all flex items-center gap-2 ${activeFilter === tech
                  ? darkMode
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
            >
              {tech === "All" && <FaStar className="text-xs" />}
              {techIcons[tech] && <span>{techIcons[tech]}</span>}
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid with masonry layout on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              custom={index}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`relative group rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/80' : 'bg-white/90'
                } backdrop-blur-sm border ${darkMode ? 'border-teal-800/50' : 'border-amber-200'
                } shadow-xl hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold ${darkMode
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                  }`}>
                  Featured
                </div>
              )}

              {/* Project image with overlay */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredProject === index ? 1.05 : 1 }}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode
                    ? 'from-gray-900/90 via-gray-900/40 to-transparent'
                    : 'from-white/90 via-white/40 to-transparent'
                  }`} />

                {/* Live preview button on hover */}
                {project.live && (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0, y: hoveredProject === index ? 0 : 20 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg font-medium ${darkMode
                        ? 'bg-teal-600 hover:bg-teal-500 text-white'
                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                      } transition-all shadow-lg`}
                  >
                    View Live Demo
                  </motion.a>
                )}
              </div>

              {/* Project content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-teal-100' : 'text-amber-900'
                    }`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${darkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-teal-300'
                            : 'bg-amber-100 hover:bg-amber-200 text-amber-700'
                          } transition-all`}
                        aria-label="GitHub repository"
                      >
                        <FaGithub className="text-lg" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${darkMode
                            ? 'bg-teal-600 hover:bg-teal-500 text-white'
                            : 'bg-amber-500 hover:bg-amber-600 text-white'
                          } transition-all`}
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className={`mb-6 text-sm md:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {project.description}
                </p>

                {/* Technologies with icons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm ${darkMode
                          ? 'bg-teal-900/40 text-teal-300 border border-teal-800/50'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                    >
                      {techIcons[tech] && (
                        <span className="text-sm">
                          {techIcons[tech]}
                        </span>
                      )}
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project stats */}
                {(project.stats || project.status) && (
                  <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-amber-100'
                    }`}>
                    <div className="flex flex-wrap gap-4">
                      {project.stats && (
                        <span className={`text-sm ${darkMode ? 'text-teal-300' : 'text-amber-600'}`}>
                          {project.stats}
                        </span>
                      )}
                      {project.status && (
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${project.status === 'Completed'
                            ? darkMode
                              ? 'bg-emerald-900/30 text-emerald-300'
                              : 'bg-emerald-100 text-emerald-700'
                            : darkMode
                              ? 'bg-amber-900/30 text-amber-300'
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-teal-400/30' : 'border-amber-400/30'
                }`} />
            </motion.article>
          ))}
        </motion.div>

        {/* Empty state for filtered results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className={`text-6xl mb-4 ${darkMode ? 'text-gray-700' : 'text-gray-300'}`}>
              🚀
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              No projects found
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Try selecting a different technology filter
            </p>
          </motion.div>
        )}

        {/* View more indicator for many projects */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${darkMode
                ? 'bg-gray-800 text-teal-300'
                : 'bg-amber-100 text-amber-700'
              }`}>
              <span className="text-sm font-medium">
                Scroll to view more projects
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`text-lg ${darkMode ? 'text-teal-400' : 'text-amber-500'}`}
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Projects;