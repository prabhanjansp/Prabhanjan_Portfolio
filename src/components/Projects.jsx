
import { motion } from 'framer-motion'
import { projectsData } from '../data/ProjectsData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiMongodb,  } from 'react-icons/si'

const Projects = ({ darkMode, id }) => {
  const techIcons = {
    'JavaScript': <SiJavascript />,
    'React': <SiReact />,
    'Node.js': <SiNextdotjs />,
    'TypeScript': <SiTypescript />,
    'MongoDB': <SiMongodb />,
    // 'AWS': <SiAws />
  }

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            className={`absolute rounded-full ${darkMode ? 'bg-teal-900/20' : 'bg-amber-400/20'}`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(12px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className={`text-4xl font-bold bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : 'bg-gradient-to-r from-amber-500 to-amber-700'}`}>
            My Projects
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-teal-100' : 'text-amber-800'}`}>
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: darkMode 
                  ? '0 10px 25px -5px rgba(45, 212, 191, 0.2)' 
                  : '0 10px 25px -5px rgba(245, 158, 11, 0.2)'
              }}
              className={`relative rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/70' : 'bg-white/90'} backdrop-blur-sm border ${darkMode ? 'border-teal-800/50' : 'border-amber-200'} shadow-lg`}
            >
              {/* Project image */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-48 overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </motion.div>

              {/* Project content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-teal-100' : 'text-amber-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${darkMode ? 'bg-teal-900/40 hover:bg-teal-800/60' : 'bg-amber-100 hover:bg-amber-200'}`}
                    >
                      {techIcons[tech] && <span className={`text-sm ${darkMode ? 'text-teal-300' : 'text-amber-600'}`}>{techIcons[tech]}</span>}
                      <span className={`text-sm font-medium ${darkMode ? 'text-teal-100' : 'text-amber-800'}`}>{tech}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700/30">
                  {project.github && (
                    <motion.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-teal-300' : 'bg-amber-100 hover:bg-amber-200 text-amber-700'} transition-all`}
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-teal-600 hover:bg-teal-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white'} transition-all`}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects