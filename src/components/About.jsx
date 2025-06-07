import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

import pp2 from "../assets/pp2.png";
import resume from "../assets/Prabhanjan.pdf";

const About = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 1.0 }}
      className="min-h-screen pt-24 px-4"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
              className="card"
              style={{ background: "none", borderRadius: 200 }}
              elevation={15}
            >
              <img
                src={pp2}
                alt="Prabhanjan"
                className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full drop-shadow-2xl "
                loading="lazy"
              />
            </Card>
          </motion.div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <div className="typewriter">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 ${
                isDarkMode ? "text-[#ffffff]" : "text-[#101828]"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
                Prabhanjan
              </span>
            </h1>
          </div>
          <h2
            className={`text-2xl md:text-4xl mb-8 ${
              isDarkMode ? "text-[#fafafa]" : "text-[#101828]"
            }`}
          >
            Front-End Developer specializing in{" "}
            <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
              React
            </span>
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-[#fafafa]" : "text-[#101828]"
            } mb-8 `}
          >
            Versatile Front-End Developer with 2.5+ years of experience
            specializing in responsive design and user-centric application
            development. Proficient in translating Figma designs into real-time
            implementations that maintain smooth user flows and consistent
            layouts. Passionate about leveraging modern frameworks like React.js
            and React Native to craft scalable, functional, and visually
            appealing digital experiences.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <SocialLink
              href="https://github.com/prabhanjansp"
              icon={<GitHubIcon style={{ width: 40, height: 40 }} />}
              isDarkMode={isDarkMode}
            />
            <SocialLink
              href="https://www.linkedin.com/in/prabhanjanpuranik/"
              icon={<LinkedInIcon style={{ width: 40, height: 40 }} />}
              isDarkMode={isDarkMode}
            />

            <SocialLink
              href="mailto:puranikchetan97@gmail.com"
              icon={<EmailIcon style={{ width: 40, height: 40 }} />}
              isDarkMode={isDarkMode}
            />
          </div>
          <motion.div
            initial={{ opacity: 10, y: 50 }}
            animate={{ opacity: 1.5, y: 1.5 }}
            transition={{ delay: 0.25, duration: 1.25 }}
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start space-x-4 bg-gradient-to-r from-[#da7c25] to-[#b923e1] hover:bg-[#ff7e34] focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-[#F2F2F2] font-bold py-4 px-8 rounded-full transition-colors duration-300 transform md:scale-110 mx-2 my-4 md:hover:scale-125 w-auto md:w-[250px] shadow-lg shadow-red-600/60"
            >
              <span className="text-md">Download Resume</span>
              <DownloadIcon size={20} className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon, isDarkMode }) => (
  <motion.div whileHover={{ scale: 1.5 }}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        isDarkMode ? "text-[#fafafa]" : "text-[#101828]"
      } hover:text-[#b923e1] 
  `}
    >
      {icon}
    </a>
  </motion.div>
);

export default About;
