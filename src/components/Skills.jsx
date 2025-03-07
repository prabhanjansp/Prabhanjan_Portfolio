import React from "react";
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

const Skills = ({ isDarkMode }) => {
  const techStack = [
    { name: "Java Script", icon: js },
    { name: "React", icon: react },
    { name: "Node.js", icon: node2 },
    { name: "Redux tool kit", icon: redux },
    { name: "Material UI", icon: mui },
    { name: "Tailwind css", icon: wind },
    { name: "Firebase", icon: firebase },
    { name: "Apollo Client", icon: apollo },
    { name: "Graph Ql", icon: ql },
    { name: "Postman", icon: postman },
    { name: "Insomnia", icon: insomnia },
    { name: "GitHub", icon: git },
    { name: "Jest", icon: jest },
    { name: "Mocha", icon: mocha },
    { name: "Figma", icon: figma },
    { name: "Java", icon: java },
    { name: "My Sql", icon: sql },
    { name: "Spring", icon: spring },
    { name: "Mongo Db", icon: mongo },
    { name: "Express", icon: express },
    // Add the rest of your tech stack items
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="min-h-screen pt-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}

        <h2 className={`text-4xl font-bold mb-8  `}>
          <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
            My Tech Stack
          </span>
        </h2>

        <div className="flex flex-col justify-center items-center gap-6 w-full">
          {/* Static Image */}
          <div className="flex justify-center items-center w-full mb-8">
            <Lottie
              animationData={anime}
              loop={true}
              className="w-52 h-52 md:w-64 md:h-64 object-cover border rounded drop-shadow-lg"
            />
          </div>

          {/* Tech Stack List with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.0 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full"
          >
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`${
                  isDarkMode
                    ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                    : "bg-gradient-to-bl from-gray-50 to-blue-200"
                } p-3 rounded-lg flex flex-col items-center shadow-md`}
                style={{
                  borderRadius: "16px",
                  minWidth: "90px",
                  maxWidth: "120px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <div className="w-full h-16 flex items-center justify-center">
                  <img
                    className="object-contain h-full drop-shadow-2xl"
                    src={category.icon}
                    alt={`${category.name} icon`}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[#E84C3D] font-bold text-xs text-center mt-2">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
