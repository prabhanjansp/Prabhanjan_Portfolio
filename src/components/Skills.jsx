import React, { useEffect, memo, useMemo } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import anime from "../assets/animations/anime.json";

// Images
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
import apollo from "../assets/apollo.png";
import ql from "../assets/ql.png";
import postman from "../assets/postman.png";
import jest from "../assets/jest.png";
import mocha from "../assets/mocha.png";
import typescript from "../assets/typescript.png";

import nextjs from "../assets/nextjs.png";
import insomnia from "../assets/insomnia.png";
const techStackData = [
  {
    name: "JavaScript",
    icon: js,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Type Script",
    icon: typescript,
    link: "https://www.typescriptlang.org/docs/",
  },
  { name: "React", icon: react, link: "https://react.dev/learn" },
  { name: "Next js", icon: nextjs, link: "https://nextjs.org/docs" },
  { name: "Node.js", icon: node2, link: "https://nodejs.org/docs/latest/api/" },
  { name: "Redux Toolkit", icon: redux, link: "https://redux.js.org/" },
  { name: "Material UI", icon: mui, link: "https://mui.com/" },
  { name: "Tailwind CSS", icon: wind, link: "https://tailwindcss.com/docs" },
  {
    name: "Firebase",
    icon: firebase,
    link: "https://firebase.google.com/docshttps://firebase.google.com/docs",
  },
  {
    name: "Apollo Client",
    icon: apollo,
    link: "https://www.apollographql.com/docs/",
  },
  // { name: "GraphQL", icon: ql },
  { name: "Postman", icon: postman, link: "https://learning.postman.com/" },
  { name: "Insomnia", icon: insomnia, link: "https://docs.insomnia.rest/" },
  { name: "GitHub", icon: git, link: "https://docs.github.com/" },
  { name: "Jest", icon: jest, link: "https://jestjs.io/docs/getting-started" },
  { name: "Mocha", icon: mocha, link: "https://mochajs.org/" },
  { name: "Figma", icon: figma, link: "https://help.figma.com/hc/en-us" },
  // { name: "Java", icon: java },
  // { name: "MySQL", icon: sql },
  // { name: "Spring", icon: spring },
  { name: "MongoDB", icon: mongo, link: "https://www.mongodb.com/docs/" },
  { name: "Express", icon: express, link: "https://expressjs.com/" },
];

// Tech Card - Memoized to prevent re-renders
const TechCard = memo(({ tech, isDarkMode }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className={`p-4 ${
      isDarkMode ? "bg-black" : "bg-white"
    } bg-opacity-80 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 border-2 border-[#b923e1] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500`}
  >
    <a
      href={tech.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#b923e1]  hover:scale-110 transition "
    >
      <img
        className="h-16 w-16 object-contain mb-2     animate-pulse"

        src={tech.icon}
        alt={tech.name}
        loading="lazy"
      />
      <h3
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } font-semibold text-sm`}
      >
        {tech.name}
      </h3>
    </a>
  </motion.div>
));

const Skills = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useMemo to avoid recalculating the array
  const techStack = useMemo(() => techStackData, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="min-h-screen pt-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
            My Tech Stack
          </span>
        </motion.h2>

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
            <TechCard key={tech.name} tech={tech} isDarkMode={isDarkMode} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(Skills);
