
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

const Experience = ({ darkMode, id }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block relative mb-4">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Professional{" "}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? "bg-gradient-to-r from-orange-400 to-orange-600"
                    : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}
              >
                Journey
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 rounded-full ${
                darkMode
                  ? "bg-gradient-to-r from-orange-400 to-orange-600"
                  : "bg-gradient-to-r from-orange-500 to-orange-600"
              }`}
            />
          </div>
          <p
            className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A timeline of my career progression and achievements
          </p>
        </motion.div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 relative z-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-30px" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Paper
                elevation={hoveredCard === index ? 8 : 3}
                component={motion.div}
                animate={{
                  y: hoveredCard === index ? -4 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  backgroundColor: darkMode
                    ? "rgba(15, 23, 42, 0.95)"
                    : "rgba(255, 255, 255, 1)",
                  border: darkMode
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Icon and Role Header */}
                <Box display="flex" alignItems="center" gap={2} mb={2.5}>
                  <Box
                    sx={{
                      bgcolor: darkMode ? "rgba(249, 115, 22, 0.15)" : "rgba(245, 158, 11, 0.15)",
                      borderRadius: 2,
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    
                  >
                    <WorkOutlineIcon
                      sx={{
                        color: "#f59e0b",
                        fontSize: 28,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    className={`${darkMode ? "text-orange-400" : "text-orange-500"}`}
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontFamily: "jetbrains mono, monospace",
                    }}
                  >
                    {exp.position}
                  </Typography>
                </Box>

                {/* Meta Info */}
                <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <BusinessCenterOutlinedIcon
                      sx={{
                        color: "#f59e0b",
                        fontSize: 18,
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{
                        color: darkMode ? "grey.300" : "text.primary",
                        fontFamily: "jetbrains mono, monospace",
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <LocationOnOutlinedIcon
                      sx={{
                        color: "#f59e0b",
                        fontSize: 18,
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{
                        color: darkMode ? "grey.300" : "text.primary",
                        fontFamily: "jetbrains mono, monospace",
                      }}
                    >
                      {exp.location}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <CalendarMonthOutlinedIcon
                      sx={{
                        color: "#f59e0b",
                        fontSize: 18,
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{
                        color: darkMode ? "grey.300" : "text.primary",
                        fontFamily: "jetbrains mono, monospace",
                      }}
                    >
                      {exp.duration}
                    </Typography>
                  </Box>
                </Box>

                {/* Responsibilities */}
                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {exp.responsibilities.map((item, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        mb: 1.25,
                        lineHeight: 1.6,
                        color: darkMode ? "grey.300" : "text.primary",
                        "&:last-child": { mb: 0 },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "jetbrains mono, monospace",
                        }}
                      >
                       * {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Tech Stack */}
                {exp.technologies && (
                  <Box>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      gutterBottom
                      sx={{
                        color: "#f59e0b",
                        mb: 1.5,
                        fontFamily: "jetbrains mono, monospace",
                      }}
                    >
                      Technologies Used
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {exp.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          label={tech}
                          size="small"
                          sx={{
                            fontWeight: 500,
                            color: darkMode ? "#fff" : "#000",
                            bgcolor: darkMode
                              ? "rgba(249, 115, 22, 0.15)"
                              : "rgba(245, 158, 11, 0.15)",
                            border: darkMode
                              ? "1px solid rgba(249, 115, 22, 0.3)"
                              : "1px solid rgba(245, 158, 11, 0.3)",
                            backdropFilter: "blur(10px)",
                            "& .MuiChip-icon": {
                              color: "#f59e0b",
                            },
                            height: 28,
                            fontFamily: "jetbrains mono, monospace",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Paper>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

Experience.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Experience;