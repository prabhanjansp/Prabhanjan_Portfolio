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
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-zinc-900" : "bg-zinc-50"}`}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl ${darkMode ? "bg-orange-500/5" : "bg-orange-200/20"}`} />
        <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl ${darkMode ? "bg-amber-500/5" : "bg-amber-200/20"}`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-3">
            <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
              Featured{" "}
              <span className={`bg-clip-text text-transparent ${darkMode
                ? "bg-gradient-to-r from-orange-400 to-orange-500"
                : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}>
                Projects
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`h-0.5 mx-auto rounded-full mt-2 ${darkMode ? "bg-gradient-to-r from-orange-400 to-orange-500" : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}
            />
          </div>
          <p className={`mt-2 text-sm md:text-base max-w-2xl mx-auto ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Crafting digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Compact Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {allTechnologies.map((tech, index) => (
            <motion.button
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tech)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${activeFilter === tech
                  ? darkMode
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : darkMode
                    ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 shadow-sm'
                }`}
            >
              {tech === "All" && <FaStar className="text-[10px]" />}
              {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - More Compact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={`relative group rounded-xl overflow-hidden ${darkMode ? 'bg-zinc-800/80' : 'bg-white'
                } backdrop-blur-sm border ${darkMode ? 'border-zinc-700/50' : 'border-orange-100'
                } shadow-md hover:shadow-xl transition-all duration-300`}
            >
              {/* Compact Featured Badge */}
              {project.featured && (
                <div className={`absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${darkMode
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                  } shadow-lg`}>
                  Featured
                </div>
              )}

              {/* Project Image - Smaller */}
              <div className="relative h-40 md:h-44 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredProject === index ? 1.05 : 1 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode
                  ? 'from-zinc-900/80 via-zinc-900/30 to-transparent'
                  : 'from-white/80 via-white/30 to-transparent'
                  }`} />

                {/* Live preview button - smaller */}
                {project.live && (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0, y: hoveredProject === index ? 0 : 10 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-lg text-xs font-medium ${darkMode
                      ? 'bg-orange-600 hover:bg-orange-500 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                      } transition-all shadow-md`}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>

              {/* Project Content - Compact */}
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className={`text-base md:text-lg font-bold leading-tight ${darkMode ? 'text-orange-100' : 'text-orange-900'
                    }`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-lg ${darkMode
                          ? 'bg-zinc-700 hover:bg-zinc-600 text-orange-300'
                          : 'bg-orange-50 hover:bg-orange-100 text-orange-600'
                          } transition-all`}
                        aria-label="GitHub repository"
                      >
                        <FaGithub className="text-sm" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-lg ${darkMode
                          ? 'bg-orange-600 hover:bg-orange-500 text-white'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                          } transition-all`}
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className={`mb-3 text-xs md:text-sm leading-relaxed line-clamp-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                  {project.description}
                </p>

                {/* Technologies - Compact */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      viewport={{ once: true }}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] ${darkMode
                        ? 'bg-orange-900/30 text-orange-300 border border-orange-800/30'
                        : 'bg-orange-50 text-orange-700 border border-orange-200'
                        }`}
                    >
                      {techIcons[tech] && (
                        <span className="text-[10px]">
                          {techIcons[tech]}
                        </span>
                      )}
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${darkMode
                      ? 'bg-zinc-700 text-zinc-400'
                      : 'bg-zinc-100 text-zinc-600'
                      }`}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Stats - Compact */}
                {(project.stats || project.status) && (
                  <div className={`pt-2 border-t ${darkMode ? 'border-zinc-700/50' : 'border-orange-100/50'
                    }`}>
                    <div className="flex items-center justify-between">
                      {project.stats && (
                        <span className={`text-[10px] font-medium ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                          {project.stats}
                        </span>
                      )}
                      {project.status && (
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${project.status === 'Completed'
                          ? darkMode
                            ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-800/30'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : darkMode
                            ? 'bg-orange-900/30 text-orange-300 border border-orange-800/30'
                            : 'bg-orange-50 text-orange-700 border border-orange-200'
                          }`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Subtle hover border */}
              <div className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-orange-400/20' : 'border-orange-400/20'
                }`} />
            </motion.article>
          ))}
        </motion.div>

        {/* Empty state - compact */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className={`text-4xl mb-3 ${darkMode ? 'text-zinc-700' : 'text-zinc-300'}`}>
              🚀
            </div>
            <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              No projects found
            </h3>
            <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Try selecting a different technology filter
            </p>
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