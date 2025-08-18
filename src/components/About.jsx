
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { aboutData } from '../data/AboutData.jsx'
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaCode } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import pp from "../assets/pp2.png"
import resume from "../assets/Prabhanjan.pdf";

const About = ({ darkMode, id }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative py-20 min-h-screen flex items-center overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Grid background for entire app */}
      <div className={`fixed inset-0 -z-50 ${darkMode ? 'opacity-10' : 'opacity-5'}`}>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]"></div>
      </div>

      {/* Animated floating elements */}
      <div className="fixed inset-0 overflow-hidden -z-40">
        {[...Array(8)].map((_, i) => (
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
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(10px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`relative rounded-full p-0.5 ${darkMode ? 'bg-gradient-to-br from-emerald-500 to-teal-500' : 'bg-gradient-to-br from-amber-500 to-amber-600'}`}>
              <div className={`relative w-18 h-18 rounded-full overflow-hidden border-2 ${darkMode ? 'border-gray-900' : 'border-white'}`}>
                <img 
                  src={pp} 
                  alt="Prabhanjan Puranik" 
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="flex items-center gap-2">
                  <FaCode className={`text-lg ${darkMode ? 'text-teal-400' : 'text-amber-500'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Full Stack Developer</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content with animated text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-3/5"
          >
            <div className="mb-8">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <TypeAnimation
                  sequence={[
                    'PRABHANJAN PURANIK',
                    1000,
                    'PURANIK PRABHANJAN',
                    1000
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className={`h-1 w-20 ${darkMode ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : 'bg-gradient-to-r from-amber-500 to-amber-600'}`}></div>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Problem Solver',
                    2000,
                    'Tech Enthusiast',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  className={`text-xl font-medium ${darkMode ? 'text-teal-100' : 'text-amber-700'}`}
                  repeat={Infinity}
                />
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {aboutData.bio}
            </motion.p>

            {/* Interactive details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {aboutData.details.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800/70' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-sm border ${darkMode ? 'border-teal-900/30' : 'border-amber-200'} transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl ${darkMode ? 'text-teal-400' : 'text-amber-500'}`}>
                      {item.icon}
                    </span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons with floating animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                 href={resume}
              target="_blank"
              rel="noopener noreferrer"
                download
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium relative overflow-hidden ${
                  darkMode 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaFileDownload className="text-lg" />
                  Download Resume
                </span>
                <span className={`absolute inset-0 opacity-0 hover:opacity-20 transition-opacity ${darkMode ? 'bg-gray-900' : 'bg-white'}`}></span>
              </motion.a>

              <div className="flex gap-3">
                {[
                  { icon: <FaGithub />, url: aboutData.social.github },
                  { icon: <FaLinkedin />, url: aboutData.social.linkedin },
                  { icon: <FaTwitter />, url: aboutData.social.twitter }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl text-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-teal-100' : 'bg-white hover:bg-amber-50 text-amber-700'} transition-all`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About