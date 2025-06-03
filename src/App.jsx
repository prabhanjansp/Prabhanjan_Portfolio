import React, { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div
        className={`relative min-h-screen ${
          isDarkMode
            ? "bg-black"
            : "bg-white"
        }`}
      >
        {/* Grid Background Layer */}
        {/* <div className="absolute inset-0 bg-[url('https://www.freeiconspng.com/thumbs/grid-png/transparent-grid-photo-png-12.png')] bg-cover bg-center opacity-10 pointer-events-none animate-bgPulse overflow-hidden"></div> */}






        {/* Content Wrapper (Ensures Content Stays Above the Background) */}
        <div className="relative z-15">
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<About isDarkMode={isDarkMode} />} />
            <Route
              path="/experience"
              element={<Experience isDarkMode={isDarkMode} />}
            />
            <Route
              path="/projects"
              element={<Projects isDarkMode={isDarkMode} />}
            />
            <Route
              path="/skills"
              element={<Skills isDarkMode={isDarkMode} />}
            />
            <Route
              path="/education"
              element={<Education isDarkMode={isDarkMode} />}
            />
            <Route
              path="/contact"
              element={<Contact isDarkMode={isDarkMode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
