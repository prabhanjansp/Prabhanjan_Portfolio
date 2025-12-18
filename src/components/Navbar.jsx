
import PropTypes from "prop-types";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaUser,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const sectionRefs = useRef({});

  const navItems = [
    { name: "about", label: "About", icon: <FaUser /> },
    { name: "experience", label: "Experience", icon: <FaBriefcase /> },
    { name: "projects", label: "Projects", icon: <FaCode /> },
    { name: "skills", label: "Skills", icon: <FaRocket /> },
    { name: "education", label: "Education", icon: <FaGraduationCap /> },
    { name: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  // Calculate navbar height dynamically
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        setNavbarHeight(height);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [mobileMenuOpen]);

  // Initialize section refs
  useEffect(() => {
    navItems.forEach(item => {
      const element = document.getElementById(item.name);
      if (element) {
        sectionRefs.current[item.name] = element;
      }
    });
  }, []);

  // Enhanced section detection with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${navbarHeight}px 0px -70% 0px`,
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          window.history.replaceState(null, null, `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [navbarHeight]);

  // Handle scroll for navbar transparency and scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle initial hash on page load
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId, true);
      }, 300); // Increased delay for page load
    }
  }, [location]);

  // Enhanced scroll to section function with better mobile handling
  const scrollToSection = useCallback((sectionId, isInitialLoad = false) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate dynamic offset based on current navbar state
      let offset = navbarHeight;
      
      // For mobile, we need additional offset when menu is open
      if (window.innerWidth < 1024 && mobileMenuOpen) {
        // Add extra offset for mobile menu height
        offset += 50;
      }

      // Get accurate position
      const elementPosition = element.getBoundingClientRect().top;
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = elementPosition + currentScrollPosition - offset;

      // Smooth scroll with requestAnimationFrame for better performance
      const startPosition = currentScrollPosition;
      const distance = targetPosition - startPosition;
      const duration = 600;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth scrolling
        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const easeProgress = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          // Ensure final position is accurate
          window.scrollTo(0, targetPosition);
        }
      };

      requestAnimationFrame(animateScroll);

      // Set active section immediately
      setActiveSection(sectionId);
      
      // Update URL without causing scroll
      if (!isInitialLoad) {
        window.history.replaceState(null, null, `#${sectionId}`);
      }

      // Close mobile menu after successful scroll
      if (mobileMenuOpen) {
        scrollTimeoutRef.current = setTimeout(() => {
          setMobileMenuOpen(false);
        }, 300);
      }
    }
  }, [mobileMenuOpen, navbarHeight]);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
    setActiveSection("");
    window.history.replaceState(null, null, "#");
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const menuButton = document.querySelector('[data-menu-button]');
        if (!menuButton || !menuButton.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Handle mobile nav click
  const handleMobileNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  // Handle desktop nav click
  const handleDesktopNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, #10b981, #2dd4bf, #0ea5e9)"
            : "linear-gradient(90deg, #f59e0b, #fbbf24, #f97316)",
        }}
      />

      {/* Main Navbar */}
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl"
              : "bg-white/95 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              onClick={scrollToTop}
            >
              <div
                className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-300 ${
                  darkMode ? "bg-teal-500/30" : "bg-amber-500/30"
                } group-hover:opacity-100 opacity-0`}
              />
              <div
                className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-xl ${
                  darkMode
                    ? "bg-gray-800/80 text-white border border-teal-800/50"
                    : "bg-white/90 text-gray-900 border border-amber-200"
                } backdrop-blur-sm`}
              >
                <span
                  className={`text-2xl ${
                    darkMode ? "text-teal-400" : "text-amber-600"
                  }`}
                >
                  {"</>"}
                </span>
                <span className="hidden sm:inline-block">Prabhanjan</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    darkMode
                      ? "bg-teal-900/40 text-teal-300"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  Dev
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  <a
                    href={`#${item.name}`}
                    onClick={(e) => handleDesktopNavClick(e, item.name)}
                    className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.name
                        ? darkMode
                          ? "text-teal-300 bg-teal-900/20"
                          : "text-amber-600 bg-amber-100"
                        : darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-amber-50"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                    
                    {/* Active indicator */}
                    {activeSection === item.name && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full ${
                          darkMode
                            ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                            : "bg-gradient-to-r from-amber-500 to-amber-600"
                        }`}
                      />
                    )}
                  </a>

                  {/* Hover effect */}
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="hoverEffect"
                      className={`absolute inset-0 rounded-xl -z-10 ${
                        darkMode
                          ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
                          : "bg-gradient-to-r from-amber-500/10 to-amber-600/10"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="ml-2 relative"
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleDarkMode}
                  className={`relative p-3 rounded-xl overflow-hidden ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 text-amber-300"
                      : "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600"
                  } border ${
                    darkMode
                      ? "border-teal-800/50 shadow-lg shadow-teal-900/20"
                      : "border-amber-200 shadow-lg shadow-amber-200/30"
                  }`}
                >
                  <div className="relative z-10">
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      scale: darkMode ? 1 : 0,
                    }}
                    className={`absolute inset-0 ${
                      darkMode
                        ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20"
                        : "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
                    }`}
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Theme Toggle - Mobile */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-lg ${
                  darkMode
                    ? "bg-gray-800 text-amber-300"
                    : "bg-amber-100 text-amber-600"
                }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                data-menu-button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-lg relative ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-amber-100 text-gray-800"
                }`}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                {!mobileMenuOpen && (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                      darkMode ? "bg-teal-400" : "bg-amber-500"
                    }`}
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className={`lg:hidden rounded-2xl overflow-hidden ${
                  darkMode
                    ? "bg-gray-900/95 backdrop-blur-xl"
                    : "bg-white/95 backdrop-blur-xl"
                } shadow-2xl`}
              >
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      type="button"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleMobileNavClick(item.name)}
                      className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-left font-medium transition-all ${
                        activeSection === item.name
                          ? darkMode
                            ? "bg-gradient-to-r from-emerald-900/30 to-teal-900/30 text-teal-300 border border-teal-800/50"
                            : "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-600 border border-amber-200"
                          : darkMode
                          ? "text-gray-300 hover:bg-gray-800/50"
                          : "text-gray-700 hover:bg-amber-50"
                      }`}
                    >
                      <span
                        className={`text-lg ${
                          activeSection === item.name
                            ? darkMode
                              ? "text-teal-400"
                              : "text-amber-600"
                            : darkMode
                            ? "text-gray-400"
                            : "text-gray-500"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left">{item.label}</span>
                      {activeSection === item.name && (
                        <motion.div
                          layoutId="mobileActive"
                          className={`ml-auto w-2 h-2 rounded-full ${
                            darkMode ? "bg-teal-400" : "bg-amber-500"
                          }`}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Scroll Down Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`flex flex-col items-center gap-2 ${
                darkMode ? "text-teal-300" : "text-amber-600"
              }`}
            >
              <span className="text-xs font-medium">Scroll</span>
              <FaChevronDown className="text-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-30 p-3 rounded-full shadow-xl ${
              darkMode
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                : "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
            }`}
          >
            <FaChevronDown className="rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;