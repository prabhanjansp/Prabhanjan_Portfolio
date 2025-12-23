
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { experienceData } from "../data/ExperienceData";

// MUI Core
import { Box, Typography, Chip } from "@mui/material";

// MUI Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

// MUI Icons
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import JavascriptOutlinedIcon from "@mui/icons-material/Javascript";

const techIcons = {
  JavaScript: <JavascriptOutlinedIcon fontSize="small" />,
  React: <CodeOutlinedIcon fontSize="small" />,
  "Node.js": <CodeOutlinedIcon fontSize="small" />,
  TypeScript: <CodeOutlinedIcon fontSize="small" />,
  MongoDB: <StorageOutlinedIcon fontSize="small" />,
};

const Experience = ({ darkMode, id }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
          className="text-center mb-8"
        >
          <div className="inline-block relative mb-4">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-gray-100" : "text-gray-900"
              }`}>
              Professional <span className={`bg-clip-text text-transparent ${darkMode
                  ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                  : "bg-gradient-to-r from-amber-500 to-amber-600"
                }`}>Journey</span>
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
            A timeline of my career progression and achievements
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative z-10">
          <Timeline
            position="alternate"
            sx={{
              maxWidth: 1000,
              mx: "auto",
              pt: 2,
              [`& .MuiTimelineItem-root:before`]: {
                flex: 0,
                padding: 0,
              },
              [`& .MuiTimelineSeparator-root`]: {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              },
            }}
          >
            {experienceData.map((exp, index) => (
              <TimelineItem
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Desktop Date */}
                <TimelineOppositeContent
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: darkMode ? "grey.400" : "text.secondary",
                    flex: 0.25,
                    position: "relative",
                    pt: 0,
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: darkMode
                        ? "rgba(45, 212, 191, 0.1)"
                        : "rgba(245, 158, 11, 0.1)",
                      border: darkMode
                        ? "1px solid rgba(45, 212, 191, 0.2)"
                        : "1px solid rgba(245, 158, 11, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <CalendarMonthOutlinedIcon
                      sx={{
                        color: darkMode ? "#2dd4bf" : "#f59e0b",
                        fontSize: 18
                      }}
                    />
                    <Typography variant="body2" fontWeight={500}>
                      {exp.duration}
                    </Typography>
                  </Box>
                </TimelineOppositeContent>

                {/* Timeline Separator */}
                <TimelineSeparator sx={{ px: 1 }}>
                  <TimelineDot
                    sx={{
                      bgcolor: darkMode ? "#2dd4bf" : "#f59e0b",
                      color: "#fff",
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      m: 0,
                      p: 0,
                      boxShadow: `0 0 20px ${darkMode ? "rgba(45, 212, 191, 0.3)" : "rgba(245, 158, 11, 0.3)"}`,
                    }}
                  >
                    <WorkOutlineIcon sx={{ fontSize: 20 }} />
                  </TimelineDot>
                  {index < experienceData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        bgcolor: darkMode ? "rgba(45, 212, 191, 0.3)" : "rgba(245, 158, 11, 0.3)",
                        width: 3,
                        height: "100%",
                        minHeight: 40,
                        borderRadius: 2,
                        my: 0.5,
                      }}
                    />
                  )}
                </TimelineSeparator>

                {/* Content Card */}
                <TimelineContent sx={{ py: 0 }}>
                  <Box
                    component={motion.div}
                    animate={{
                      y: hoveredCard === index ? -4 : 0,
                      boxShadow: hoveredCard === index
                        ? darkMode
                          ? "0 15px 30px -12px rgba(0, 0, 0, 0.4)"
                          : "0 15px 30px -12px rgba(245, 158, 11, 0.2)"
                        : "0 8px 20px rgba(0, 0, 0, 0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                      p: { xs: 2.5, md: 3.5 },
                      borderRadius: 3,
                      backgroundColor: darkMode
                        ? "rgba(15, 23, 42, 0.85)"
                        : "rgba(255, 255, 255, 0.95)",
                      border: darkMode
                        ? `1px solid ${hoveredCard === index ? "rgba(45, 212, 191, 0.3)" : "rgba(45, 212, 191, 0.2)"}`
                        : `1px solid ${hoveredCard === index ? "rgba(251, 191, 36, 0.4)" : "rgba(251, 191, 36, 0.2)"}`,
                      backdropFilter: "blur(10px)",
                      position: "relative",
                      overflow: "hidden",
                      mb: 3,
                    }}
                  >
                    {/* Role */}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        color: darkMode ? "#2dd4bf" : "#f59e0b",
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                      }}
                    >
                      {exp.position}
                    </Typography>

                    {/* Meta Info */}
                    <Box
                      display="flex"
                      flexWrap="wrap"
                      gap={2}
                      mb={2.5}
                    >
                      <Box display="flex" alignItems="center" gap={0.75}>
                        <BusinessCenterOutlinedIcon
                          sx={{
                            color: darkMode ? "#2dd4bf" : "#f59e0b",
                            fontSize: 16
                          }}
                        />
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          sx={{ color: darkMode ? "grey.300" : "text.primary" }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>

                      <Box display="flex" alignItems="center" gap={0.75}>
                        <LocationOnOutlinedIcon
                          sx={{
                            color: darkMode ? "#2dd4bf" : "#f59e0b",
                            fontSize: 16
                          }}
                        />
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          sx={{ color: darkMode ? "grey.300" : "text.primary" }}
                        >
                          {exp.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Mobile Date */}
                    <Box
                      display={{ xs: "flex", md: "none" }}
                      alignItems="center"
                      gap={1}
                      mb={2.5}
                      sx={{
                        p: 1.25,
                        borderRadius: 2,
                        backgroundColor: darkMode
                          ? "rgba(45, 212, 191, 0.1)"
                          : "rgba(245, 158, 11, 0.1)",
                        width: "fit-content",
                      }}
                    >
                      <CalendarMonthOutlinedIcon
                        sx={{
                          color: darkMode ? "#2dd4bf" : "#f59e0b",
                          fontSize: 16
                        }}
                      />
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        sx={{ color: darkMode ? "grey.300" : "text.primary" }}
                      >
                        {exp.duration}
                      </Typography>
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
                          <Typography variant="body2">{item}</Typography>
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
                            color: darkMode ? "#2dd4bf" : "#f59e0b",
                            mb: 1.5,
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
                              icon={techIcons[tech]}
                              label={tech}
                              size="small"
                              sx={{
                                fontWeight: 500,
                                color: darkMode ? "#fff" : "#000",
                                bgcolor: darkMode
                                  ? "rgba(45, 212, 191, 0.15)"
                                  : "rgba(245, 158, 11, 0.2)",
                                border: darkMode
                                  ? "1px solid rgba(45, 212, 191, 0.3)"
                                  : "1px solid rgba(245, 158, 11, 0.3)",
                                backdropFilter: "blur(10px)",
                                "& .MuiChip-icon": {
                                  color: darkMode ? "#2dd4bf" : "#f59e0b",
                                },
                                height: 28,
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
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