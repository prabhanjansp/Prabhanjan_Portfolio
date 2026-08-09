import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { experienceData } from "../data/ExperienceData";

// MUI Core
import { Box, Typography, Chip, Paper } from "@mui/material";

// MUI Icons
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Experience = ({ darkMode, id }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-zinc-900" : "bg-zinc-50"}`}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl ${darkMode ? "bg-orange-500/5" : "bg-orange-200/15"}`} />
        <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl ${darkMode ? "bg-amber-500/5" : "bg-amber-200/15"}`} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              Journey
            </span>
          </h1>
          <div className={`h-0.5 w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600`} />
          <p className={`mt-3 text-sm md:text-base ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            My career progression and achievements
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true, margin: "-30px" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Paper
                elevation={hoveredCard === index ? 6 : 1}
                component={motion.div}
                animate={{
                  y: hoveredCard === index ? -3 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  backgroundColor: darkMode
                    ? "rgba(39, 39, 42, 0.9)"
                    : "rgba(255, 255, 255, 0.95)",
                  border: darkMode
                    ? "1px solid rgba(234, 88, 12, 0.15)"
                    : "1px solid rgba(245, 158, 11, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, #f59e0b, #ea580c)`,
                    opacity: hoveredCard === index ? 1 : 0.4,
                    transition: "opacity 0.3s ease",
                  },
                }}
              >
                {/* Header */}
                <Box display="flex" alignItems="center" gap={2.5} mb={2.5}>
                  <Box
                    sx={{
                      bgcolor: darkMode
                        ? "rgba(234, 88, 12, 0.15)"
                        : "rgba(245, 158, 11, 0.1)",
                      borderRadius: 1.5,
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WorkOutlineIcon
                      sx={{
                        color: darkMode ? "rgb(234, 88, 12)" : "#f59e0b",
                        fontSize: 24,
                      }}
                    />
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        fontFamily: "jetbrains mono, monospace",
                        color: darkMode ? "rgb(234, 88, 12)" : "#f59e0b",
                      }}
                    >
                      {exp.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: darkMode ? "rgb(161, 161, 170)" : "text.secondary",
                        fontFamily: "jetbrains mono, monospace",
                        fontSize: "0.85rem",
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  {/* Year Badge */}
                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: darkMode
                        ? "rgba(234, 88, 12, 0.15)"
                        : "rgba(245, 158, 11, 0.1)",
                      border: darkMode
                        ? "1px solid rgba(234, 88, 12, 0.2)"
                        : "1px solid rgba(245, 158, 11, 0.15)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "jetbrains mono, monospace",
                        fontWeight: 600,
                        color: darkMode ? "rgb(234, 88, 12)" : "#f59e0b",
                      }}
                    >
                      {exp.duration.split(" ")[0]}
                    </Typography>
                  </Box>
                </Box>

                {/* Meta Info */}
                <Box display="flex" flexWrap="wrap" gap={1.5} mb={2.5}>
                  {[
                    { icon: BusinessCenterOutlinedIcon, label: exp.company },
                    { icon: LocationOnOutlinedIcon, label: exp.location },
                    { icon: CalendarMonthOutlinedIcon, label: exp.duration },
                  ].map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1,
                        bgcolor: darkMode
                          ? "rgba(39, 39, 42, 0.8)"
                          : "rgba(245, 158, 11, 0.05)",
                        border: darkMode
                          ? "1px solid rgba(63, 63, 70, 0.5)"
                          : "1px solid rgba(245, 158, 11, 0.08)",
                      }}
                    >
                      <item.icon
                        sx={{
                          color: darkMode ? "rgb(234, 88, 12)" : "#f59e0b",
                          fontSize: 14,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: darkMode ? "rgb(161, 161, 170)" : "text.secondary",
                          fontFamily: "jetbrains mono, monospace",
                          fontSize: "0.7rem",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* All Responsibilities */}
                <Box component="ul" sx={{ pl: 0, mb: 3 }}>
                  {exp.responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        component="li"
                        sx={{
                          mb: 1,
                          lineHeight: 1.6,
                          color: darkMode ? "rgb(212, 212, 216)" : "text.primary",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                          "&:last-child": { mb: 0 },
                        }}
                      >
                        <ArrowForwardIcon
                          sx={{
                            color: darkMode ? "rgb(234, 88, 12)" : "#f59e0b",
                            fontSize: 12,
                            mt: 0.4,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "jetbrains mono, monospace",
                            fontSize: "0.8rem",
                            opacity: 0.9,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* All Technologies */}
                {exp.technologies && (
                  <Box>
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      sx={{
                        color: darkMode ? "#ea580c" : "#f59e0b",
                        mb: 1.5,
                        display: "block",
                        fontFamily: "jetbrains mono, monospace",
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      Tech Stack
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Chip
                            label={tech}
                            size="small"
                            sx={{
                              fontWeight: 500,
                              color: darkMode ? "#fff" : "#000",
                              bgcolor: darkMode
                                ? "rgba(234, 88, 12, 0.15)"
                                : "rgba(245, 158, 11, 0.08)",
                              border: darkMode
                                ? "1px solid rgba(234, 88, 12, 0.2)"
                                : "1px solid rgba(245, 158, 11, 0.12)",
                              "& .MuiChip-label": {
                                fontFamily: "jetbrains mono, monospace",
                                fontSize: "0.7rem",
                                px: 1,
                              },
                              height: 26,
                              borderRadius: 1,
                              transition: "all 0.2s ease",
                              "&:hover": {
                                bgcolor: darkMode
                                  ? "rgba(234, 88, 12, 0.3)"
                                  : "rgba(245, 158, 11, 0.2)",
                              },
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                )}
              </Paper>
            </motion.div>
          ))}
        </div>

        {/* Experience Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${darkMode
            ? 'bg-zinc-800/50 border border-zinc-700/50'
            : 'bg-white/80 border border-orange-100'
            }`}>
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              💼
            </span>
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {experienceData.length} {experienceData.length === 1 ? 'Position' : 'Positions'}
            </span>
            <span className={`w-px h-3 ${darkMode ? 'bg-zinc-700' : 'bg-orange-200'}`} />
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {experienceData.reduce((acc, exp) => acc + exp.technologies?.length || 0, 0)} Technologies
            </span>
            <span className={`w-px h-3 ${darkMode ? 'bg-zinc-700' : 'bg-orange-200'}`} />
            <span className={`text-xs font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {experienceData.reduce((acc, exp) => acc + exp.responsibilities.length, 0)} Achievements
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

Experience.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Experience;