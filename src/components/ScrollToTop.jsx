import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import logo from '../assets/logo.png'

const ScrollToTop = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ 
            scale: 1.15,
            rotate: 360,
            transition: { duration: 0.6, type: "spring", stiffness: 200 }
          }}
          whileTap={{ scale: 0.85 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-30 group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Outer Glow Ring */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              darkMode ? 'bg-orange-500/20' : 'bg-orange-400/20'
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          
          {/* Pulsing Ring */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              darkMode ? 'border-2 border-orange-500' : 'border-2 border-orange-400'
            }`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          
          {/* Logo Image */}
          <motion.div
            className={`relative rounded-full overflow-hidden shadow-xl w-12 h-12 ${
              darkMode 
                ? 'shadow-orange-900/50 ring-2 ring-orange-500/50' 
                : 'shadow-orange-600/30 ring-2 ring-orange-400/50'
            }`}
            whileHover={{
              boxShadow: darkMode 
                ? '0 0 25px rgba(249, 115, 22, 0.6)' 
                : '0 0 25px rgba(245, 158, 11, 0.5)'
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
            
            {/* Floating particles effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    darkMode ? 'bg-orange-400' : 'bg-orange-500'
                  }`}
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                  }}
                  animate={{
                    x: [
                      "50%",
                      `${50 + (i % 3 === 0 ? -40 : 40)}%`,
                      `${50 + (i % 2 === 0 ? -30 : 30)}%`,
                    ],
                    y: [
                      "50%",
                      `${50 - 40 - (i * 5)}%`,
                      `${50 - 20 - (i * 3)}%`,
                    ],
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Tooltip on hover */}
          <motion.div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap flex items-center gap-2 ${
              darkMode
                ? 'bg-gray-800 text-orange-300 border border-orange-700'
                : 'bg-white text-orange-600 border border-orange-200 shadow-md'
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="Logo" className="w-3 h-3 rounded-full" />
            Back to Top
            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
              darkMode ? 'bg-gray-800 border-r border-b border-orange-700' : 'bg-white border-r border-b border-orange-200'
            }`} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

ScrollToTop.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

export default ScrollToTop