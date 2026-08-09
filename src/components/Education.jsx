import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaMapMarkerAlt,
  FaBookOpen,

} from "react-icons/fa";
import { educationData, certificationsData } from "../data/EducationData";

const Education = ({ darkMode, id }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-zinc-900" : "bg-zinc-50"}`}
    >
      {/* Subtle Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${darkMode ? "bg-orange-500/5" : "bg-orange-200/15"}`} />
        <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl ${darkMode ? "bg-amber-500/5" : "bg-amber-200/15"}`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-2">
            <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
              Education{" "}
              <span className={`bg-clip-text text-transparent ${darkMode
                ? "bg-gradient-to-r from-orange-400 to-orange-500"
                : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}>
                Journey
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`h-0.5 mx-auto rounded-full mt-2 ${darkMode ? "bg-gradient-to-r from-orange-400 to-orange-500" : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}
            />
          </div>
          <p className={`mt-2 text-sm md:text-base max-w-2xl mx-auto ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            My academic foundation and professional certifications that shape my expertise
          </p>
        </motion.div>

        {/* Education Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Section Header - Compact */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                <FaGraduationCap className="text-lg" />
              </div>
              <h2 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                Academic Background
              </h2>
            </div>
            <div className={`text-xs px-2.5 py-1 rounded-full ${darkMode
              ? 'bg-orange-900/40 text-orange-300'
              : 'bg-orange-100 text-orange-700'
              }`}>
              {educationData.length}
            </div>
          </div>

          {/* Education Cards - Compact */}
          <div className="grid grid-cols-1 gap-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(`edu-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group rounded-xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${darkMode
                  ? 'bg-zinc-800/60 border-zinc-700/50 hover:border-orange-500/30'
                  : 'bg-white/90 border-orange-100 hover:border-orange-300'
                  } ${hoveredCard === `edu-${index}` ? 'shadow-lg' : 'shadow-sm'}`}
              >
                <div className="p-4 md:p-5">
                  <div className="flex flex-wrap items-start gap-3">
                    {/* Icon */}
                    <div className={`p-2 rounded-lg flex-shrink-0 ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                      <FaUniversity className="text-lg" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className={`text-base md:text-lg font-bold ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                            {edu.degree}
                          </h3>
                          <p className={`text-sm ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                            {edu.institution}
                          </p>
                        </div>
                        <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${darkMode
                          ? 'bg-orange-500/20 text-orange-300'
                          : 'bg-orange-500/10 text-orange-600'
                          }`}>
                          {index === 0 ? "Latest" : `#${index + 1}`}
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 mt-2">
                        <div className={`flex items-center gap-1 text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          <FaMapMarkerAlt className="text-[10px]" />
                          <span>{edu.location}</span>
                        </div>
                        <div className={`flex items-center gap-1 text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          <FaCalendarAlt className="text-[10px]" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {edu.description && (
                        <p className={`mt-2 text-xs md:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {edu.description}
                        </p>
                      )}

                      {edu.courses && edu.courses.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-zinc-700/20">
                          <h4 className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 flex items-center ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                            <FaBookOpen className="mr-1.5 text-[10px]" />
                            Key Learnings
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.courses.slice(0, 3).map((course, i) => (
                              <span
                                key={i}
                                className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${darkMode
                                  ? 'bg-orange-900/30 text-orange-300 border border-orange-800/30'
                                  : 'bg-orange-50 text-orange-700 border border-orange-200'
                                  }`}
                              >
                                {course}
                              </span>
                            ))}
                            {edu.courses.length > 3 && (
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${darkMode
                                ? 'bg-zinc-700 text-zinc-400'
                                : 'bg-zinc-100 text-zinc-600'
                                }`}>
                                +{edu.courses.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-orange-400/15' : 'border-orange-400/15'}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Section Header - Compact */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                <FaCertificate className="text-lg" />
              </div>
              <h2 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                Certifications
              </h2>
            </div>
            <div className={`text-xs px-2.5 py-1 rounded-full ${darkMode
              ? 'bg-orange-900/40 text-orange-300'
              : 'bg-orange-100 text-orange-700'
              }`}>
              {certificationsData.length}
            </div>
          </div>

          {/* Certifications Grid - Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={`cert-${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                onMouseEnter={() => setHoveredCard(`cert-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-xl overflow-hidden backdrop-blur-sm border ${darkMode
                  ? 'bg-zinc-800/60 border-zinc-700/50 hover:border-orange-500/30'
                  : 'bg-white/90 border-orange-100 hover:border-orange-300'
                  } shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Color Strip */}
                <div className={`h-1 w-full ${darkMode
                  ? 'bg-gradient-to-r from-orange-400 to-orange-500'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600'
                  }`} />

                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-1.5 rounded-lg flex-shrink-0 ${darkMode ? 'bg-orange-900/40' : 'bg-orange-100'}`}>
                      <FaCertificate className={`text-base ${darkMode ? 'text-orange-300' : 'text-orange-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-sm truncate ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                        {cert.name}
                      </h4>
                      <p className={`text-xs truncate ${darkMode ? 'text-orange-300/80' : 'text-orange-600/80'}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className={`text-xs space-y-1 mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[10px] flex-shrink-0" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    {cert.expires && (
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-[10px] flex-shrink-0" />
                        <span>Expires: {cert.expires}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed line-clamp-2 mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    {cert.credentialId && (
                      <div className="text-[10px] truncate">
                        <span className={`${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>ID: </span>
                        <span className={`font-mono ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                    {cert.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap ${darkMode
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                          } transition-all`}
                      >
                        Verify
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-orange-400/15' : 'border-orange-400/15'}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Footer - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${darkMode
            ? 'bg-zinc-800/50 border border-zinc-700/50'
            : 'bg-white/80 border border-orange-100'
            }`}>
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              🎓
            </span>
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {educationData.length} Degrees & {certificationsData.length} Certifications
            </span>
            <span className={`w-px h-4 ${darkMode ? 'bg-zinc-700' : 'bg-orange-200'}`} />
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {educationData.reduce((acc, edu) => acc + (edu.courses?.length || 0), 0)}+ Courses
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

Education.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Education;