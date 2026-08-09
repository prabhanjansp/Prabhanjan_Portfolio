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
              Technical{" "}
              <span className={`bg-clip-text text-transparent ${darkMode
                ? "bg-gradient-to-r from-orange-400 to-orange-500"
                : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}>
                Excellence
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
            Mastering modern technologies to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Interactive Skill Cards - More Compact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              },
            },
          }}
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
              className={`group relative rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${darkMode
                ? 'bg-zinc-800/60 border-zinc-700/50 hover:border-orange-500/30'
                : 'bg-white/90 border-orange-100 hover:border-orange-300'
                } ${activeSkill === index ? 'shadow-xl' : 'shadow-md'}`}
            >
              {/* Card Content - Compact Padding */}
              <div className="p-5 md:p-6">
                {/* Header Section */}
                <div className="mb-4">
                  <h3 className={`text-lg md:text-xl font-bold mb-1.5 ${darkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                    {section.title}
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {section.description}
                  </p>
                </div>

                {/* Skill Icons Grid - Compact */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                  {section.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative cursor-pointer rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-300 ${darkMode
                        ? 'bg-zinc-800/40 hover:bg-zinc-800/70 text-orange-300 border border-zinc-700/50 hover:border-orange-500/40'
                        : 'bg-white hover:bg-orange-50 text-orange-600 border border-orange-100 hover:border-orange-300'
                        }`}
                    >
                      {/* Icon - Smaller */}
                      <div className="text-2xl md:text-3xl mb-1.5">
                        {skill.icon}
                      </div>

                      {/* Skill Name - Smaller */}
                      <div className={`text-[10px] md:text-xs font-medium text-center ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        {skill.name}
                      </div>

                      {/* Hover Effect Layer */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 rounded-xl ${darkMode
                          ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/10'
                          : 'bg-gradient-to-br from-orange-400/10 to-orange-500/10'
                          }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Featured Skills - Compact */}
                {section.featuredSkills && section.featuredSkills.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-zinc-700/20">
                    <h4 className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                      Featured Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {section.featuredSkills.slice(0, 6).map((feature, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${darkMode
                            ? 'bg-orange-900/30 text-orange-300 border border-orange-800/30'
                            : 'bg-orange-50 text-orange-700 border border-orange-200'
                            }`}
                        >
                          {feature}
                        </span>
                      ))}
                      {section.featuredSkills.length > 6 && (
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${darkMode
                          ? 'bg-zinc-700 text-zinc-400'
                          : 'bg-zinc-100 text-zinc-600'
                          }`}>
                          +{section.featuredSkills.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Subtle Hover Effects */}
              <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${darkMode ? 'border-orange-400/15' : 'border-orange-400/15'}`} />
              
              {/* Ambient Glow - Smaller */}
              <div className={`absolute -top-8 -right-8 w-16 h-16 rounded-full ${darkMode ? 'bg-orange-500/5' : 'bg-orange-500/5'} blur-2xl`} />
              <div className={`absolute -bottom-8 -left-8 w-16 h-16 rounded-full ${darkMode ? 'bg-amber-500/5' : 'bg-amber-500/5'} blur-2xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Counter - Optional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${darkMode
            ? 'bg-zinc-800/50 border border-zinc-700/50'
            : 'bg-white/80 border border-orange-100'
            }`}>
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              🚀
            </span>
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {skillsData.reduce((acc, section) => acc + section.skills.length, 0)}+ Technologies
            </span>
            <span className={`w-px h-4 ${darkMode ? 'bg-zinc-700' : 'bg-orange-200'}`} />
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {skillsData.length} Specialties
            </span>
          </div>
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