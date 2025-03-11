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
            ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
            : "bg-gradient-to-bl from-gray-50 to-blue-200"
        }`}
      >
        {/* Grid Background Layer */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/stars-dark-background_78370-2944.jpg?t=st=1741683321~exp=1741686921~hmac=9f8cb2b50a8c860241a39a47fa2748835d6ccfd712afef4ea68de877e448c7c0&w=1060')] bg-cover bg-center opacity-10 pointer-events-none animate-bgPulse overflow-hidden"></div>






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
