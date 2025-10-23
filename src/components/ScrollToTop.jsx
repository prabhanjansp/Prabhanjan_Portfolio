
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

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
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-xl transition-all ${
        darkMode 
          ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-900/50' 
          : 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-600/30'
      }`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: darkMode 
          ? '0 0 20px rgba(13, 148, 136, 0.7)' 
          : '0 0 20px rgba(245, 158, 11, 0.5)'
      }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </motion.button>
  )
}

export default ScrollToTop