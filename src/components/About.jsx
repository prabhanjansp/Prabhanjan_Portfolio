import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import { aboutData } from "../data/AboutData.jsx";
import pp from "../assets/pp2.png";
import resume from "../assets/Prabhanjan.pdf";

const About = ({ darkMode, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Content Section (Left on desktop, Full width on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left px-2 sm:px-0 order-1 lg:order-1"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 md:mb-8"
            >
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                <span className={`block ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {` I'm `}
                </span>
                <span className={`bg-clip-text text-transparent ${darkMode
                  ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500"
                  : "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"
                  }`}>
                  Prabhanjan
                </span>
                <span className={`block mt-1 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                  Puranik
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <p className={`text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold leading-relaxed ${darkMode ? "text-emerald-300" : "text-amber-700"}`}>
                {aboutData.tagline}
              </p>
            </motion.div>

            {/* PHOTO SECTION - Shows after tagline on mobile, hidden on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 lg:hidden"
            >
              <div className={`relative rounded-3xl overflow-hidden p-1 shadow-2xl ${darkMode
                ? "bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600"
                : "bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700"
                }`}>
                <div className={`rounded-3xl overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                  <div className="relative">
                    <img
                      src={pp}
                      alt="Prabhanjan Puranik"
                      className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover object-top"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${darkMode
                      ? "from-gray-900/80 via-gray-900/30 to-transparent"
                      : "from-white/80 via-white/30 to-transparent"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {aboutData.bio}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg ${darkMode
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-xl hover:shadow-teal-500/30"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:shadow-amber-500/30"
                  } transition-all duration-300 flex items-center justify-center gap-3 shadow-lg`}
              >
                <span>View My Work</span>
                <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={resume}
                download
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg border-2 ${darkMode
                  ? "border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:shadow-lg hover:shadow-teal-500/20"
                  : "border-amber-500 text-amber-600 hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-500/20"
                  } transition-all duration-300 flex items-center justify-center gap-3`}
              >
                <FaDownload className="text-lg sm:text-xl" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-2 hidden lg:block"
          >
            {/* Profile Photo Card - Desktop only */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`relative rounded-3xl overflow-hidden p-1 shadow-2xl ${darkMode
                ? "bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600"
                : "bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700"
                }`}
            >
              <div className={`rounded-3xl overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                <div className="relative">
                  <img
                    src={pp}
                    alt="Prabhanjan Puranik"
                    className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[450px] object-cover object-top"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${darkMode
                    ? "from-gray-900/80 via-gray-900/30 to-transparent"
                    : "from-white/80 via-white/30 to-transparent"
                    }`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Call to Action Card - Desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`p-5 sm:p-6 rounded-2xl backdrop-blur-sm border shadow-xl ${darkMode
                ? "bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-emerald-900/30 border-teal-700/40"
                : "bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 border-amber-300"
                }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h3 className={`text-lg sm:text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {`  Let's Collaborate!`}
                  </h3>
                  <p className={`text-sm sm:text-base ${darkMode ? "text-teal-200" : "text-amber-700"}`}>
                    Have a project in mind?
                  </p>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap ${darkMode
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-teal-500/30"
                    : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:shadow-amber-500/30"
                    } transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  <span>Start Conversation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Call to Action - Shows under buttons on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className={`p-5 sm:p-6 rounded-2xl backdrop-blur-sm border shadow-xl lg:hidden order-3 ${darkMode
              ? "bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-emerald-900/30 border-teal-700/40"
              : "bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 border-amber-300"
              }`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <h3 className={`text-lg sm:text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {`  Let's Collaborate!`}
                </h3>
                <p className={`text-sm sm:text-base ${darkMode ? "text-teal-200" : "text-amber-700"}`}>
                  Have a project in mind?
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base ${darkMode
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-teal-500/30"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:shadow-amber-500/30"
                  } transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <span>Start Conversation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default About;