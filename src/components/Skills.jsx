

import { motion } from 'framer-motion'
import { skillsData } from '../data/SkillsData'
import { FaCode, FaServer, FaDatabase, FaMobile, FaTools, FaPalette } from 'react-icons/fa'
import Lottie from "lottie-react";
import anime from "../assets/animations/anime.json";

const Skills = ({ darkMode, id }) => {
  const categoryIcons = {
    'Frontend': <FaCode />,
    'Backend': <FaServer />,
    'Database': <FaDatabase />,
    'Mobile': <FaMobile />,
    'DevOps': <FaTools />,
    'Design': <FaPalette />
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
            My Skills
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-teal-100' : 'text-amber-800'}`}>
            Technologies I've worked with and mastered
          </p>
        </motion.div>
        <div className="flex justify-center items-center">
           <Lottie animationData={anime} loop className="w-44 md:w-64" />
         </div>

        {/* Skills categories */}
        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-teal-900/40' : 'bg-amber-100'}`}>
                  {categoryIcons[category.category] || <FaCode className={`text-2xl ${darkMode ? 'text-teal-300' : 'text-amber-600'}`} />}
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-teal-100' : 'text-amber-900'}`}>
                  {category.category}
                </h3>
                <div className={`h-0.5 flex-1 mx-4 ${darkMode ? 'bg-teal-800/50' : 'bg-amber-200'}`}></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      boxShadow: darkMode 
                        ? '0 10px 25px -5px rgba(45, 212, 191, 0.2)' 
                        : '0 10px 25px -5px rgba(245, 158, 11, 0.2)'
                    }}
                    className={`relative rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/70' : 'bg-white/90'} backdrop-blur-sm border ${darkMode ? 'border-teal-800/50' : 'border-amber-200'} shadow-lg`}
                  >
                    <div className="p-6 flex flex-col items-center">
                      <div className={`text-4xl mb-3 ${darkMode ? 'text-teal-300' : 'text-amber-500'}`}>
                        {skill.icon}
                      </div>
                      <span className={`text-sm font-medium ${darkMode ? 'text-teal-100' : 'text-amber-900'}`}>
                        {skill.name}
                      </span>
                      {skill.level && (
                        <div className="w-full mt-3">
                          <div className={`h-1 w-full rounded-full ${darkMode ? 'bg-teal-900/40' : 'bg-amber-100'}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                              viewport={{ once: true }}
                              className={`h-full rounded-full ${darkMode ? 'bg-teal-400' : 'bg-amber-500'}`}
                            ></motion.div>
                          </div>
                          <span className={`text-xs mt-1 ${darkMode ? 'text-teal-300/80' : 'text-amber-600/80'}`}>
                            {skill.level}% proficiency
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-teal-500/10' : 'bg-amber-400/10'}`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-20 p-8 rounded-2xl ${darkMode ? 'bg-gray-800/70' : 'bg-white/90'} backdrop-blur-sm border ${darkMode ? 'border-teal-800/50' : 'border-amber-200'} shadow-xl`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-teal-900/40' : 'bg-amber-100'}`}>
              <FaTools className={`text-4xl ${darkMode ? 'text-teal-300' : 'text-amber-600'}`} />
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-teal-100' : 'text-amber-900'}`}>
                Continuous Learning
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm constantly expanding my skill set through online courses, personal projects, 
                and staying updated with the latest industry trends. My learning journey never stops!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
