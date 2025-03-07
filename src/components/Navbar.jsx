import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: "About", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-opacity-10 backdrop-blur-sm bg-[#2d2d2d] text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-bold ${
              isDarkMode ? "text-[#ffffff]" : "text-[#101828]"
            } bg-gradient-to-r from-[#da7c25] to-[#b923e1] rounded-full p-3`}
          >
            {"{Ps}"}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:bg-gradient-to-r from-[#da7c25] to-[#b923e1] p-2 rounded-full font-semibold transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent"
                    : isDarkMode
                    ? "text-[#ffffff]"
                    : "text-[#101828]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gradient-to-r from-[#da7c25] to-[#b923e1] transition-colors"
            >
              {isDarkMode ? (
                <LightModeIcon
                  size={20}
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                />
              ) : (
                <BedtimeIcon
                  size={20}
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-[#da7c25] to-[#b923e1] transition-all "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ClearIcon
                size={24}
                style={{ color: isDarkMode ? "#fff" : "#000" }}
              />
            ) : (
              <MenuIcon
                size={24}
                style={{ color: isDarkMode ? "#fff" : "#000" }}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className={`"md:hidden mt-4 ${
              isDarkMode
                ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                : "bg-gradient-to-bl from-gray-50 to-blue-200"
            } rounded-lg p-4"`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-4 rounded hover:bg-[#000] transition-colors ${
                  location.pathname === item.path
                    ? "text-[#E84C3D]"
                    : isDarkMode
                    ? "text-[#fff]"
                    : "text-[#000]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#262626] transition-colors"
            >
              {isDarkMode ? (
                <LightModeIcon
                  size={20}
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                />
              ) : (
                <BedtimeIcon
                  size={20}
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                />
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
