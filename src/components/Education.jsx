
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
  FaAward,
  FaRocket
} from "react-icons/fa";
import { educationData, certificationsData } from "../data/EducationData";

const Education = ({ darkMode, id }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

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


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
           <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12 md:mb-16"
                >
                  <div className="inline-block relative mb-4">
                    <h1
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${darkMode ? "text-gray-100" : "text-gray-900"
                        }`}
                    >
                      Education <span className={`bg-clip-text text-transparent ${darkMode
              ? "bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400"
              : "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500"
              }`}>Journey</span>
                    </h1>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-1 rounded-full ${darkMode ? "bg-gradient-to-r from-emerald-400 to-green-400" : "bg-gradient-to-r from-orange-500 to-orange-600"
                        }`}
                    />
                  </div>
                  <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    {`My academic foundation and professional certifications that shape my expertise`}
                  </p>
                </motion.div>
 

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-green-900/40 text-green-400' : 'bg-orange-100 text-orange-600'
                }`}>
                <FaGraduationCap className="text-xl md:text-2xl" />
              </div>
              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-green-100' : 'text-amorangorangeeber-900'
                }`}>
                Academic Background
              </h2>
            </div>
            <div className={`hidden md:block text-sm px-3 py-1 rounded-full ${darkMode
              ? 'bg-green-900/40 text-green-300'
              : 'bg-orange-100 text-orange-700'
              }`}>
              {educationData.length} {educationData.length === 1 ? 'Degree' : 'Degrees'}
            </div>
          </div>

          {/* Education Timeline & Cards */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Timeline Visualization - Hidden on mobile, shown on large screens */}
            <div className={`hidden lg:block lg:w-1/4 rounded-2xl p-4 md:p-6 backdrop-blur-sm border ${darkMode ? 'bg-gray-800/60 border-green-800/30' : 'bg-white/70 border-orange-200'
              }`}>
              <h3 className={`text-lg md:text-xl font-bold mb-4 flex items-center ${darkMode ? 'text-green-300' : 'text-orange-600'
                }`}>
                <FaRocket className="mr-3" />
                Timeline
              </h3>
              <div className="relative h-48 md:h-64">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={`timeline-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute left-0 w-full"
                    style={{ top: `${index * (100 / (educationData.length - 1))}%` }}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${darkMode ? 'bg-green-400' : 'bg-orange-500'
                        } mr-3`} />
                      <div className={`text-xs md:text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {edu.year || edu.duration.split(' ')[0]}
                      </div>
                    </div>
                    {index < educationData.length - 1 && (
                      <div className={`h-10 md:h-12 ml-1.5 w-0.5 ${darkMode ? 'bg-green-700/50' : 'bg-orange-200'
                        }`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Cards */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={`edu-${index}`}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredCard(`edu-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative group rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${darkMode
                      ? 'bg-gray-800/60 border-green-800/30 hover:border-green-500/50'
                      : 'bg-white/80 border-orange-200 hover:border-orange-400'
                      } ${hoveredCard === `edu-${index}` ? 'scale-[1.02]' : ''}`}
                  >
                    {/* Achievement Badge */}
                    <div className={`absolute -top-2 -right-2 md:-top-3 md:-right-3 z-20 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs font-bold ${darkMode
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      } shadow-lg`}>
                      {index === 0 ? "Latest" : `Step ${index + 1}`}
                    </div>

                    <div className="p-4 md:p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 mb-4 md:mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                            <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${darkMode ? 'bg-green-900/40 text-green-400' : 'bg-orange-100 text-orange-600'
                              }`}>
                              <FaUniversity className="text-xl md:text-2xl" />
                            </div>
                            <div>
                              <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-green-100' : 'text-orange-900'
                                }`}>
                                {edu.degree}
                              </h3>
                              <p className={`mt-1 text-sm md:text-base ${darkMode ? 'text-green-300' : 'text-orange-600'
                                }`}>
                                {edu.institution}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3 md:gap-4 mt-3 md:mt-4">
                            <div className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                              <FaMapMarkerAlt />
                              <span>{edu.location}</span>
                            </div>
                            <div className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                              <FaCalendarAlt />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                        </div>

                        <div className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800/40' : 'bg-orange-50'
                          }`}>
                          <FaAward className={`text-2xl md:text-3xl ${darkMode ? 'text-green-400' : 'text-orange-600'
                            }`} />
                        </div>
                      </div>

                      {edu.description && (
                        <p className={`mb-4 md:mb-6 leading-relaxed text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                          {edu.description}
                        </p>
                      )}

                      {edu.courses && edu.courses.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: hoveredCard === `edu-${index}` ? 1 : 0.8,
                            height: 'auto'
                          }}
                          className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700/30"
                        >
                          <h4 className={`font-bold mb-3 md:mb-4 flex items-center text-sm md:text-base ${darkMode ? 'text-green-200' : 'text-orange-800'
                            }`}>
                            <FaBookOpen className="mr-2" />
                            Key Learnings
                          </h4>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {edu.courses.slice(0, 4).map((course, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ y: -2, scale: 1.05 }}
                                className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium ${darkMode
                                  ? 'bg-green-900/40 text-green-300 hover:bg-green-800/60'
                                  : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                                  }`}
                              >
                                {course}
                              </motion.div>
                            ))}
                            {edu.courses.length > 4 && (
                              <div className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium ${darkMode
                                ? 'bg-gray-800/60 text-gray-400'
                                : 'bg-gray-100 text-gray-600'
                                }`}>
                                +{edu.courses.length - 4} more
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl md:rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-green-400/20' : 'border-orange-400/20'
                      }`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-green-900/40 text-green-400' : 'bg-orange-100 text-orange-600'
                }`}>
                <FaCertificate className="text-xl md:text-2xl" />
              </div>
              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-green-100' : 'text-orange-900'
                }`}>
                Professional Certifications
              </h2>
            </div>
            <div className={`hidden md:block text-sm px-3 py-1 rounded-full ${darkMode
              ? 'bg-green-900/40 text-green-300'
              : 'bg-orange-100 text-orange-700'
              }`}>
              {certificationsData.length} {certificationsData.length === 1 ? 'Certificate' : 'Certificates'}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={`cert-${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={() => setHoveredCard(`cert-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm border ${darkMode
                  ? 'bg-gray-800/60 border-green-800/30 hover:border-green-500/50'
                  : 'bg-white/80 border-orange-200 hover:border-orange-400'
                  } shadow-lg`}
              >
                {/* Certificate Header Strip */}
                <div className={`h-1.5 md:h-2 w-full ${darkMode
                  ? 'bg-gradient-to-r from-emerald-400 to-green-400'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600'
                  }`} />

                <div className="p-4 md:p-6">
                  <div className="flex items-start mb-4 md:mb-6">
                    <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-green-900/40' : 'bg-orange-100'
                      } mr-3 md:mr-4`}>
                      <FaCertificate className={`text-lg md:text-xl ${darkMode ? 'text-green-300' : 'text-orange-600'
                        }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-base md:text-lg truncate ${darkMode ? 'text-green-100' : 'text-orange-900'
                        }`}>
                        {cert.name}
                      </h4>
                      <p className={`text-xs md:text-sm mt-1 truncate ${darkMode ? 'text-green-100/80' : 'text-orange-800/80'
                        }`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className={`flex flex-col text-xs md:text-sm mb-3 md:mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    <div className="flex items-center mb-1">
                      <FaCalendarAlt className="mr-2 flex-shrink-0" />
                      <span className="truncate">Issued: {cert.date}</span>
                    </div>
                    {cert.expires && (
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 flex-shrink-0" />
                        <span className="truncate">Expires: {cert.expires}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-xs md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {cert.description}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    {cert.credentialId && (
                      <div className="text-left min-w-0">
                        <div className={`text-xs font-medium mb-1 ${darkMode ? 'text-green-300/80' : 'text-orange-600/80'
                          }`}>
                          Credential ID
                        </div>
                        <div className={`text-xs truncate max-w-full ${darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          {cert.credentialId}
                        </div>
                      </div>
                    )}
                    {cert.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-xs md:text-sm whitespace-nowrap ${darkMode
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                          : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                          } transition-all`}
                      >
                        View Credential
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-green-400/20' : 'border-orange-400/20'
                  }`} />
              </motion.div>
            ))}
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