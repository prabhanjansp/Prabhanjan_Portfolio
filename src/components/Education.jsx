/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaMapMarkerAlt,
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
      viewport={{ once: true, margin: "-100px" }}
      className={`relative py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className={`absolute rounded-full ${
              darkMode ? "bg-teal-900/20" : "bg-amber-400/20"
            }`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(12px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-4xl font-bold bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                : "bg-gradient-to-r from-amber-500 to-amber-700"
            }`}
          >
            Education & Certifications
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              darkMode ? "text-teal-100" : "text-amber-800"
            }`}
          >
            My academic background and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-bold mb-8 flex items-center ${
              darkMode ? "text-teal-300" : "text-amber-600"
            }`}
          >
            <FaGraduationCap className="mr-3" />
            Academic Journey
          </h3>

          <div className="relative">
            <div
              className={`absolute left-8 top-0 h-full w-0.5 ${
                darkMode ? "bg-teal-700/50" : "bg-amber-200"
              }`}
            ></div>

            <div className="space-y-12 pl-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={`edu-${index}`}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className={`relative rounded-2xl overflow-hidden ${
                    darkMode ? "bg-gray-800/70" : "bg-white/90"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-teal-800/50" : "border-amber-200"
                  } shadow-xl`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-14 top-6 w-6 h-6 rounded-full flex items-center justify-center ${
                      darkMode ? "bg-teal-400" : "bg-amber-500"
                    } shadow-lg`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        darkMode ? "bg-gray-900" : "bg-white"
                      }`}
                    ></div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3
                          className={`text-2xl font-bold ${
                            darkMode ? "text-teal-100" : "text-amber-900"
                          }`}
                        >
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                          <div
                            className={`inline-flex items-center ${
                              darkMode ? "text-teal-300" : "text-amber-600"
                            }`}
                          >
                            <FaUniversity className="mr-2" />
                            <span>{edu.institution}</span>
                          </div>
                          <div
                            className={`inline-flex items-center ${
                              darkMode
                                ? "text-teal-100/80"
                                : "text-amber-800/80"
                            }`}
                          >
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex items-center ${
                          darkMode ? "text-teal-100/80" : "text-amber-800/80"
                        }`}
                      >
                        <FaCalendarAlt className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {edu.description && (
                      <p
                        className={`mb-6 ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.description}
                      </p>
                    )}

                    {edu.courses && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-6"
                      >
                        <h4
                          className={`font-medium mb-3 ${
                            darkMode ? "text-teal-200" : "text-amber-800"
                          }`}
                        >
                          Relevant Courses:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {edu.courses.map((course, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ y: -3, scale: 1.05 }}
                              className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
                                darkMode
                                  ? "bg-teal-900/40 hover:bg-teal-800/60"
                                  : "bg-amber-100 hover:bg-amber-200"
                              }`}
                            >
                              <span
                                className={`text-sm ${
                                  darkMode ? "text-teal-100" : "text-amber-800"
                                }`}
                              >
                                {course}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3
            className={`text-2xl font-bold mb-8 flex items-center ${
              darkMode ? "text-teal-300" : "text-amber-600"
            }`}
          >
            <FaCertificate className="mr-3" />
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={`cert-${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className={`rounded-2xl overflow-hidden ${
                  darkMode ? "bg-gray-800/70" : "bg-white/90"
                } backdrop-blur-sm border ${
                  darkMode ? "border-teal-800/50" : "border-amber-200"
                } shadow-lg`}
              >
                <div className="p-6">
                  <div
                    className={`w-full h-2 mb-4 ${
                      darkMode
                        ? "bg-gradient-to-r from-teal-400 to-emerald-400"
                        : "bg-gradient-to-r from-amber-500 to-amber-600"
                    }`}
                  ></div>
                  <div className="flex items-start mb-4">
                    <div
                      className={`p-3 rounded-lg ${
                        darkMode ? "bg-teal-900/40" : "bg-amber-100"
                      } mr-4`}
                    >
                      <FaCertificate
                        className={`text-2xl ${
                          darkMode ? "text-teal-300" : "text-amber-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h4
                        className={`font-bold ${
                          darkMode ? "text-teal-100" : "text-amber-900"
                        }`}
                      >
                        {cert.name}
                      </h4>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-teal-100/80" : "text-amber-800/80"
                        }`}
                      >
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center text-sm mb-4 ${
                      darkMode ? "text-teal-100/80" : "text-amber-800/80"
                    }`}
                  >
                    <FaCalendarAlt className="mr-2" />
                    <span>Issued: {cert.date}</span>
                    {cert.expires && (
                      <span className="ml-4">
                        <FaCalendarAlt className="mr-2 inline" />
                        Expires: {cert.expires}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {cert.description}
                  </p>
                  <div className="flex justify-between items-center">
                    {cert.credentialId && (
                      <span
                        title={cert.credentialId}
                        className={`text-xs truncate max-w-full block ${
                          darkMode ? "text-teal-300/80" : "text-amber-600/80"
                        }`}
                      >
                        ID: {cert.credentialId}
                      </span>
                    )}
                    {cert.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          darkMode
                            ? "bg-teal-900/40 hover:bg-teal-800/60 text-teal-300"
                            : "bg-amber-100 hover:bg-amber-200 text-amber-700"
                        }`}
                      >
                        View Credential
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
