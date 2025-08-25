

// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
// import { useLocation } from 'react-router-dom'

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState('')
//   const location = useLocation()

//   const navItems = [
//     { name: 'about', label: 'About' },
//     { name: 'experience', label: 'Experience' },
//     { name: 'projects', label: 'Projects' },
//     { name: 'skills', label: 'Skills' },
//     { name: 'education', label: 'Education' },
//     { name: 'contact', label: 'Contact' }
//   ]

//   // Handle scroll for navbar transparency and active section
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
      
//       // Update active section based on scroll position
//       const sections = navItems.map(item => document.getElementById(item.name))
//       const scrollPosition = window.scrollY + 100
      
//       sections.forEach(section => {
//         if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
//           setActiveSection(section.id)
//         }
//       })
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [location])

//   // Scroll to section with offset
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       const offset = 80
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
//       window.scrollTo({
//         top: elementPosition - offset,
//         behavior: 'smooth'
//       })
//       setActiveSection(sectionId)
//       setMobileMenuOpen(false)
//     }
//   }

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md') : 'bg-transparent'} shadow-md`}>
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="flex items-center cursor-pointer"
//           >
//             {/* <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> */}
//             <span className={`text-xl font-bold  isDarkMode ? "text-[#ffffff]" : "text-[#101828]"
//              } ${
//                   darkMode 
//                     ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
//                     : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white'
//                 } rounded-full p-3`}>{"{Ps}"}</span>
          
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <motion.div
//                 key={item.name}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative"
//               >
//                 <button
//                   onClick={() => scrollToSection(item.name)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden ${
//                     activeSection === item.name 
//                       ? (darkMode ? 'text-cyan-400' : 'text-amber-500')
//                       : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
//                   }`}
//                 >
//                   {item.label}
//                   {/* Gradient underline for active item */}
//                   {activeSection === item.name && (
//                     <motion.span
//                       layoutId="navUnderline"
//                       className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                         darkMode ? 'bg-gradient-to-r from-purple-400 to-cyan-400' : 'bg-gradient-to-r from-amber-400 to-pink-400'
//                       }`}
//                       transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                     />
//                   )}
//                 </button>
//               </motion.div>
//             ))}

//             {/* Dark Mode Toggle */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleDarkMode}
//               className={`ml-4 p-2 rounded-full ${
//                 darkMode ? 'bg-gray-800 text-amber-300' : 'bg-amber-100 text-amber-600'
//               }`}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className={`p-2 rounded-full ${
//                 darkMode ? 'bg-gray-800 text-white' : 'bg-amber-100 text-gray-800'
//               }`}
//             >
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className={`md:hidden mt-4 rounded-lg shadow-lg ${
//               darkMode ? 'bg-gray-800/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
//             }`}
//           >
//             <div className="px-2 pt-2 pb-4 space-y-1">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.name}
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection(item.name)}
//                   className={`block w-full px-4 py-3 rounded-md text-left font-medium ${
//                     activeSection === item.name
//                       ? (darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-amber-100 text-amber-600')
//                       : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-amber-50')
//                   }`}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//               <div className="px-4 py-3">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={toggleDarkMode}
//                   className={`flex items-center gap-2 w-full p-2 rounded-md ${
//                     darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-amber-100 hover:bg-amber-200'
//                   }`}
//                 >
//                   {darkMode ? (
//                     <>
//                       <FaSun className="text-amber-300" />
//                       <span>Light Mode</span>
//                     </>
//                   ) : (
//                     <>
//                       <FaMoon className="text-amber-600" />
//                       <span>Dark Mode</span>
//                     </>
//                   )}
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useLocation, Link } from 'react-router-dom'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  const navItems = [
    { name: 'about', label: 'About' },
    { name: 'experience', label: 'Experience' },
    { name: 'projects', label: 'Projects' },
    { name: 'skills', label: 'Skills' },
    { name: 'education', label: 'Education' },
    { name: 'contact', label: 'Contact' }
  ]

  // Handle scroll for navbar transparency and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.name))
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id)
          // Update URL without causing a page reload
          window.history.replaceState(null, null, `#${section.id}`)
        }
      })
    }

    // Check for hash in URL on initial load
    if (location.hash) {
      const sectionId = location.hash.replace('#', '')
      setActiveSection(sectionId)
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  // Scroll to section with offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
      // Update URL to include the section hash
      window.history.pushState(null, null, `#${sectionId}`)
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md') : 'bg-transparent'} shadow-md`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo - Now a proper link to homepage with ID */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="/"
            id="home"
            className="flex items-center cursor-pointer"
          >
            <span className={`text-xl font-bold ${
                  darkMode 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white'
                } rounded-full p-3`}>{"{Ps}"}</span>
          </motion.a>

          {/* Desktop Navigation - Using anchor tags instead of buttons */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <a
                  href={`#${item.name}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.name)
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden ${
                    activeSection === item.name 
                      ? (darkMode ? 'text-cyan-400' : 'text-amber-500')
                      : (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
                  }`}
                >
                  {item.label}
                  {/* Gradient underline for active item */}
                  {activeSection === item.name && (
                    <motion.span
                      layoutId="navUnderline"
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        darkMode ? 'bg-gradient-to-r from-purple-400 to-cyan-400' : 'bg-gradient-to-r from-amber-400 to-pink-400'
                      }`}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-amber-300' : 'bg-amber-100 text-amber-600'
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-amber-100 text-gray-800'
              }`}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Using anchor tags instead of buttons */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden mt-4 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-800/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name}`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.name)
                  }}
                  className={`block w-full px-4 py-3 rounded-md text-left font-medium ${
                    activeSection === item.name
                      ? (darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-amber-100 text-amber-600')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-amber-50')
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="px-4 py-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`flex items-center gap-2 w-full p-2 rounded-md ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-amber-100 hover:bg-amber-200'
                  }`}
                >
                  {darkMode ? (
                    <>
                      <FaSun className="text-amber-300" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="text-amber-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar