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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
            : "bg-gradient-to-bl from-gray-50 to-blue-200"
        } cursor`}
      >
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
          <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
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
    </Router>
  );
};

export default App;
