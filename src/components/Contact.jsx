import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon size={24} />,
      label: "Email",
      value: "puranikchetan97@gmail.com",
      href: "mailto:puranikchetan97@gmail.com",
    },
    {
      icon: <LinkedInIcon size={24} />,
      label: "LinkedIn",
      value: "prabhanjan-puranik",
      href: "https://www.linkedin.com/in/prabhanjan-puranik/",
    },
    {
      icon: <GitHubIcon size={24} />,
      label: "GitHub",
      value: "prabhanjansp",
      href: "https://github.com/prabhanjansp",
    },
    {
      icon: <XIcon size={24} />,
      label: "X",
      value: "prabhanjansp",
      href: "https://x.com/iamprabhanjans?t=LEBLKyEPgAr6zkt6uSF9UQ&s=09",
    },
    {
      icon: <InstagramIcon size={24} />,
      label: "Instagram",
      value: "iamprabhanjansp",
      href: "https://www.instagram.com/iamprabhanjan/profilecard/?igsh=ZW5pM2JybDIwYWJy",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 1.0 }}
      className="min-h-screen pt-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-8  `}>
          <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className={` ${
                isDarkMode
                  ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                  : "bg-gradient-to-bl from-gray-50 to-blue-200"
              } p-6 rounded-lg flex items-center space-x-4 hover:transform hover:scale-[1.02] transition-transform`}
            >
              <div className="text-[#E84C3D]">{info.icon}</div>
              <div>
                <h3 className="text-[#E84C3D] font-bold">{info.label}</h3>
                <p
                  className={` ${
                    isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                  }`}
                >
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={` ${
            isDarkMode
              ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
              : "bg-gradient-to-bl from-gray-50 to-blue-200"
          } p-8 rounded-lg`}
        >
          <h2 className={`text-4xl font-bold mb-8  `}>
            <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
              Send Me A Message
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } mb-2`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                    : "bg-gradient-to-bl from-gray-50 to-blue-200"
                } ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } border border-[#E84C3D] focus:outline-none focus:ring-2 focus:ring-[#E84C3D] transition-colors`}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } mb-2`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                    : "bg-gradient-to-bl from-gray-50 to-blue-200"
                } ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } border border-[#E84C3D] focus:outline-none focus:ring-2 focus:ring-[#E84C3D] transition-colors`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } mb-2`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                    : "bg-gradient-to-bl from-gray-50 to-blue-200"
                } ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } border border-[#E84C3D] focus:outline-none focus:ring-2 focus:ring-[#E84C3D] transition-colors`}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-3 px-6 rounded-lg bg-[#E84C3D] text-white font-bold hover:bg-[#E84C3D] transition-colors ${
                status === "sending" ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="text-green-400 text-center mt-4">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>

      <footer
        className={`text-center py-6 mt-12 text-sm ${
          isDarkMode ? "text-[#ddd]" : "text-[#262626]"
        }`}
      >
        © 2024 Prabhanjan❤️. All rights reserved.
      </footer>
    </motion.div>
  );
};

export default Contact;
