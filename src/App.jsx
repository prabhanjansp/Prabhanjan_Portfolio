
// export default App;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a nav item
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
   <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        scrolled={scrolled}
      />
      
      <main className="container mx-auto px-4 pt-24">
        <About darkMode={darkMode} id="about" />
        <Experience darkMode={darkMode} id="experience" />
        <Projects darkMode={darkMode} id="projects" />
        <Skills darkMode={darkMode} id="skills" />
        <Education darkMode={darkMode} id="education" />
        <Contact darkMode={darkMode} id="contact" />
      </main>

      <ScrollToTop darkMode={darkMode} />
    </div>
  );
}

export default App;

