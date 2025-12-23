import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

// 🔹 Lazy imports
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on nav click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
        scrolled={scrolled}
      />

      <main className="container mx-auto px-4 pt-24">
        {/* 🔹 Suspense wrapper */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20 text-sm opacity-70">
              Loading content...
            </div>
          }
        >
          <About darkMode={darkMode} id="about" />
          <Experience darkMode={darkMode} id="experience" />
          <Projects darkMode={darkMode} id="projects" />
          <Skills darkMode={darkMode} id="skills" />
          <Education darkMode={darkMode} id="education" />
          <Contact darkMode={darkMode} id="contact" />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
