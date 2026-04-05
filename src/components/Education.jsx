import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaMapMarkerAlt,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";
import { educationData, certificationsData } from "../data/EducationData";

const Education = ({ darkMode, id }) => {
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
      className={`relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
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
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
              Education &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
            />
          </div>
          <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            My academic foundation and professional certifications that shape my expertise
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
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
              <FaGraduationCap className="text-xl md:text-2xl" />
            </div>
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-orange-300' : 'text-orange-900'}`}>
              Academic Background
            </h2>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`relative group rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${darkMode
                  ? 'bg-gray-800/60 border-orange-800/30 hover:border-orange-500/50'
                  : 'bg-white/80 border-orange-200 hover:border-orange-400'
                }`}
              >
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                          <FaUniversity className="text-xl md:text-2xl" />
                        </div>
                        <div>
                          <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-orange-300' : 'text-orange-900'}`}>
                            {edu.degree}
                          </h3>
                          <p className={`mt-1 text-sm md:text-base ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 md:gap-4 mt-3 md:mt-4">
                        <div className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <FaMapMarkerAlt />
                          <span>{edu.location}</span>
                        </div>
                        <div className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <FaCalendarAlt />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800/40' : 'bg-orange-50'}`}>
                      <FaAward className={`text-2xl md:text-3xl text-orange-500`} />
                    </div>
                  </div>

                  {edu.description && (
                    <p className={`mb-4 md:mb-6 leading-relaxed text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.description}
                    </p>
                  )}

                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700/30">
                      <h4 className={`font-bold mb-3 md:mb-4 flex items-center text-sm md:text-base ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                        <FaBookOpen className="mr-2" />
                        Key Learnings
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {edu.courses.slice(0, 4).map((course, i) => (
                          <span
                            key={i}
                            className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium ${darkMode
                              ? 'bg-orange-900/40 text-orange-300'
                              : 'bg-orange-100 text-orange-800'
                            }`}
                          >
                            {course}
                          </span>
                        ))}
                        {edu.courses.length > 4 && (
                          <span className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium ${darkMode
                            ? 'bg-gray-800/60 text-gray-400'
                            : 'bg-gray-100 text-gray-600'
                          }`}>
                            +{edu.courses.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
              <FaCertificate className="text-xl md:text-2xl" />
            </div>
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-orange-300' : 'text-orange-900'}`}>
              Professional Certifications
            </h2>
          </div>

          {/* Certifications Grid with equal height cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={`cert-${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`group relative rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm border ${darkMode
                  ? 'bg-gray-800/60 border-orange-800/30 hover:border-orange-500/50'
                  : 'bg-white/80 border-orange-200 hover:border-orange-400'
                } shadow-lg flex flex-col h-full`}
              >
                <div className={`h-1.5 md:h-2 w-full bg-gradient-to-r from-orange-500 to-orange-600`} />
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-start mb-4 md:mb-6">
                    <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-orange-900/40' : 'bg-orange-100'} mr-3 md:mr-4 flex-shrink-0`}>
                      <FaCertificate className={`text-lg md:text-xl text-orange-500`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-base md:text-lg ${darkMode ? 'text-orange-300' : 'text-orange-900'} line-clamp-2`}>
                        {cert.name}
                      </h4>
                      <p className={`text-xs md:text-sm mt-1 ${darkMode ? 'text-orange-400/80' : 'text-orange-800/80'}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className={`flex flex-col text-xs md:text-sm mb-3 md:mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="flex items-center mb-1">
                      <FaCalendarAlt className="mr-2 flex-shrink-0" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    {cert.expires && (
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 flex-shrink-0" />
                        <span>Expires: {cert.expires}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-xs md:text-sm mb-4 md:mb-6 leading-relaxed flex-grow ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {cert.description}
                  </p>

                  {cert.credentialId && (
                    <p className={`text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'} break-all`}>
                                      ID: {cert.credentialId}
                    </p>
                  )}

                  {cert.link && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block w-full text-center px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all mt-auto`}
                    >
                      View Certificate →
                    </motion.a>
                  )}
                </div>
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