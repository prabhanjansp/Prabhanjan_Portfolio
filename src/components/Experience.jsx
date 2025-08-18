
import { motion } from 'framer-motion'
import { experienceData } from '../data/ExperienceData'
import { FaBriefcase, FaCalendarAlt, FaChevronRight, FaMapMarkerAlt, FaLaptopCode, FaBuilding, FaUserTie } from 'react-icons/fa'
import { SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiMongodb, } from 'react-icons/si'

const Experience = ({ darkMode, id }) => {
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

  const techIcons = {
    'JavaScript': <SiJavascript />,
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'TypeScript': <SiTypescript />,
    'MongoDB': <SiMongodb />,
    // 'AWS': <SiAws />
  }

  const jobTypeIcons = {
    'Full-time': <FaUserTie />,
    'Part-time': <FaUserTie />,
    'Contract': <FaLaptopCode />,
    'Internship': <FaUserTie />,
    'Freelance': <FaLaptopCode />
  }

  const getJobTypeIcon = (type) => {
    return jobTypeIcons[type] || <FaBriefcase />;
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
          className="mb-16 text-center relative"
        >
          <h2 className={`text-4xl font-bold bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : 'bg-gradient-to-r from-amber-500 to-amber-700'}`}>
            Professional Journey
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-teal-100' : 'text-amber-800'}`}>
            My career path and professional experiences
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          <div className={`absolute left-8 top-0 h-full w-0.5 ${darkMode ? 'bg-teal-700/50' : 'bg-amber-200'}`}></div>

          <div className="space-y-16 pl-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className={`relative rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/70' : 'bg-white/90'} backdrop-blur-sm border ${darkMode ? 'border-teal-800/50' : 'border-amber-200'} shadow-lg ${darkMode ? 'shadow-teal-900/20' : 'shadow-amber-100'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-14 top-6 w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-teal-400' : 'bg-amber-500'} shadow-lg`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'}`}></div>
                </div>

                <div className="p-8">
                  {/* Header with all information */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold ${darkMode ? 'text-teal-100' : 'text-amber-900'}`}>{exp.position}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                        <div className={`inline-flex items-center ${darkMode ? 'text-teal-300' : 'text-amber-600'}`}>
                          <FaBriefcase className="mr-2" />
                          <span>{exp.company}</span>
                        </div>
                        <div className={`inline-flex items-center ${darkMode ? 'text-teal-100/80' : 'text-amber-800/80'}`}>
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className={`inline-flex items-center ${darkMode ? 'text-emerald-300' : 'text-amber-700'}`}>
                          {getJobTypeIcon(exp.type)}
                          <span className="ml-2 capitalize">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`flex items-center ${darkMode ? 'text-teal-100/80' : 'text-amber-800/80'}`}>
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-3 pl-5">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        <div className={`absolute -left-5 top-2 w-2 h-2 rounded-full ${darkMode ? 'bg-teal-400' : 'bg-amber-500'} group-hover:scale-150 transition-transform`}></div>
                        <span className={`${darkMode ? 'text-teal-50' : 'text-amber-900'} group-hover:translate-x-2 transition-transform`}>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technology stack */}
                  {exp.technologies && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mt-8"
                    >
                      <h4 className={`font-medium mb-3 ${darkMode ? 'text-teal-200' : 'text-amber-800'}`}>Tech Stack:</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y: -3, scale: 1.05 }}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${darkMode ? 'bg-teal-900/40 hover:bg-teal-800/60' : 'bg-amber-100 hover:bg-amber-200'}`}
                          >
                            {techIcons[tech] && <span className={`text-sm ${darkMode ? 'text-teal-300' : 'text-amber-600'}`}>{techIcons[tech]}</span>}
                            <span className={`text-sm ${darkMode ? 'text-teal-100' : 'text-amber-800'}`}>{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
