
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import { skillsData } from "../data/SkillsData";

const Skills = ({ darkMode, id }) => {
  const [activeSkill, setActiveSkill] = useState(null);

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
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block relative mb-4">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${darkMode ? "text-gray-100" : "text-gray-900"
              }`}>
              Technical <span className={`bg-clip-text text-transparent ${darkMode
                ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"
                : "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500"
                }`}>Excellence</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 rounded-full ${darkMode ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-gradient-to-r from-amber-500 to-amber-600"
                }`}
            />
          </div>
          <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            Mastering modern technologies to build exceptional digital experiences                  </p>
        </motion.div>

        {/* Interactive Skill Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              className={`group relative rounded-3xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${darkMode
                ? 'bg-gray-800/60 border-teal-800/30 hover:border-teal-500/50'
                : 'bg-white/80 border-amber-200 hover:border-amber-400'
                } ${activeSkill === index ? 'scale-[1.02]' : ''}`}
            >
              {/* Card Header */}
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-teal-200' : 'text-amber-800'
                      }`}>
                      {section.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Skill Icons Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {section.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -8, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-300 ${darkMode
                        ? 'bg-gray-800/40 hover:bg-gray-800/70 text-teal-300 border border-teal-800/30 hover:border-teal-500/50'
                        : 'bg-white hover:bg-amber-50 text-amber-600 border border-amber-200 hover:border-amber-300'
                        }`}
                    >
                      {/* Icon */}
                      <div className="text-3xl mb-2">
                        {skill.icon}
                      </div>

                      {/* Skill Name */}
                      <div className={`text-xs font-medium text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        {skill.name}
                      </div>

                      {/* Hover Effect Layer */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className={`absolute inset-0 rounded-2xl ${darkMode
                          ? 'bg-gradient-to-br from-teal-500/10 to-emerald-500/10'
                          : 'bg-gradient-to-br from-amber-400/10 to-amber-500/10'
                          }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Featured Skills */}
                {section.featuredSkills && (
                  <div className="mt-8 pt-6 border-t border-gray-700/30">
                    <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-teal-300' : 'text-amber-600'
                      }`}>
                      Featured Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.featuredSkills.map((feature, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium ${darkMode
                            ? 'bg-teal-900/40 text-teal-300 border border-teal-800/50'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                            }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-teal-400/20' : 'border-amber-400/20'
                }`} />

              {/* Card Corner Accents */}
              <div className={`absolute top-0 left-0 w-20 h-20 -translate-x-10 -translate-y-10 rounded-full ${darkMode ? 'bg-teal-500/10' : 'bg-amber-500/10'
                } blur-3xl`} />
              <div className={`absolute bottom-0 right-0 w-20 h-20 translate-x-10 translate-y-10 rounded-full ${darkMode ? 'bg-emerald-500/10' : 'bg-amber-600/10'
                } blur-3xl`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

Skills.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Skills;
