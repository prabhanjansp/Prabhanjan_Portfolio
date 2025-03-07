import React, { useEffect } from "react";
import Lottie from "lottie-react";
import anime from "../assets/animations/anime.json";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import sql from "../assets/sql.png";
import spring from "../assets/spring.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import js from "../assets/js.png";
import mui from "../assets/mui.png";
import node2 from "../assets/node2.png";
import react from "../assets/react.svg";
import redux from "../assets/redux.png";
import wind from "../assets/wind.png";
import apollo from "../assets/apollo.svg";
import ql from "../assets/ql.png";
import postman from "../assets/postman.png";
import jest from "../assets/jest.png";
import mocha from "../assets/mocha.png";
import insomnia from "../assets/insomnia.png";
import { motion } from "framer-motion";

// Replace with actual animation path

// Replace with actual animation path

const Skills = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const techStack = [
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Node.js", icon: node2 },
    { name: "Redux Toolkit", icon: redux },
    { name: "Material UI", icon: mui },
    { name: "Tailwind CSS", icon: wind },
    { name: "Firebase", icon: firebase },
    { name: "Apollo Client", icon: apollo },
    { name: "GraphQL", icon: ql },
    { name: "Postman", icon: postman },
    { name: "Insomnia", icon: insomnia },
    { name: "GitHub", icon: git },
    { name: "Jest", icon: jest },
    { name: "Mocha", icon: mocha },
    { name: "Figma", icon: figma },
    { name: "Java", icon: java },
    { name: "MySQL", icon: sql },
    { name: "Spring", icon: spring },
    { name: "MongoDB", icon: mongo },
    { name: "Express", icon: express },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`min-h-screen pt-24 px-6 ${
        isDarkMode
          ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
          : "bg-gradient-to-bl from-gray-50 to-blue-200"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
          My Tech Stack
        </h2>

        {/* Animation */}
        <div className="flex justify-center items-center mb-12">
          <Lottie animationData={anime} loop className="w-44 md:w-64" />
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.0 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`p-4 ${
                isDarkMode
                  ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                  : "bg-gradient-to-bl from-gray-50 to-blue-200"
              } bg-opacity-80 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500`}
            >
              <img
                className="h-16 w-16 object-contain mb-2"
                src={tech.icon}
                alt={tech.name}
              />
              <h3 className={`${isDarkMode?"text-white":"text-black"} font-semibold text-sm`}>{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
