import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkIcon from "@mui/icons-material/Link";
import ClearIcon from "@mui/icons-material/Clear";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import DownloadIcon from "@mui/icons-material/Download";
import resume from "./assets/Prabhanjan_Puranik_CV.pdf";
import pp from "./assets/pp.jpg";
import { motion } from "framer-motion";

import firebase from "./assets/firebase.png";
import git from "./assets/git.png";
import js from "./assets/js.png";
import mui from "./assets/mui.png";
import node2 from "./assets/node2.png";
import react from "./assets/react.svg";
import redux from "./assets/redux.png";
import wind from "./assets/wind.png";

const THEME = {
  dark: {
    primary: "#6C63FF",
    secondary: "#9B59B6",
    accent: "#E84C3D",
    background: "#171A21",
    surface: "#1F2232",
    text: "#F2F2F2",
    textSecondary: "#B2BEC3",
  },
};

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-sm bg-[#171A21] text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#E84C3D]">
            {"<Ps.Dev />"}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-[#E84C3D] font-semibold transition-colors ${location.pathname === item.path
                    ? "text-[#E84C3D]"
                    : "text-[#B2BEC3]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#112240] transition-colors"
            >
              {isDarkMode ? (
                <LightModeIcon size={20} />
              ) : (
                <BedtimeIcon size={20} />
              )}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#112240] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ClearIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#112240] rounded-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-4 rounded hover:bg-[#171A21] transition-colors ${location.pathname === item.path
                    ? "text-[#E84C3D]"
                    : "text-[#B2BEC3]"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const About = ({ isDarkMode }) => (
  <section className="min-h-screen pt-24 px-4">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Left Side - Text Content */}
      <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={pp}
          alt="Prabhanjan"
          className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-lg "
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left">
       <div className="typewriter">
       <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? "text-[#ffffff]" : "text-[#101828]"
            }`}
        >
          Hi, I'm <span className="text-[#E84C3D]">Prabhanjan</span>
        </h1>
       </div>
        <h2
          className={`text-2xl md:text-4xl mb-8 ${isDarkMode ? "text-[#B2BEC3]" : "text-[#101828]"
            }`}
        >
          Front-End Developer specializing in{" "}
          <span className="text-[#E84C3D]">React</span>
        </h2>
        <p
          className={`text-lg ${isDarkMode ? "text-[#B2BEC3]" : "text-[#101828]"
            } mb-8`}
        >
          With 2+ years of expertise in React.js and React Native, I create
          high-performance web and mobile applications. My focus is on
          delivering scalable solutions that improve user engagement and
          experience.
        </p>
        <div className="flex justify-center md:justify-start space-x-6 mb-8">
          <SocialLink
            href="https://github.com/prabhanjansp"
            icon={<GitHubIcon />}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href="https://www.linkedin.com/in/prabhanjan-puranik/"
            icon={<LinkedInIcon />}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href="https://x.com/iamprabhanjans?t=LEBLKyEPgAr6zkt6uSF9UQ&s=09"
            icon={<XIcon />}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href="mailto:puranikchetan97@gmail.com"
            icon={<EmailIcon />}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href="https://www.instagram.com/iamprabhanjan/profilecard/?igsh=ZW5pM2JybDIwYWJy"
            icon={<InstagramIcon />}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href="https://www.youtube.com/@PrabhanjanShrinivasPuranik"
            icon={<YouTubeIcon />}
            isDarkMode={isDarkMode}
          />
          {/* <SocialLink href="tel:9538711410" icon={<PhoneIcon />}             isDarkMode={isDarkMode}
 /> */}
        </div>
        {/* <marquee direction="up" width="250" height="200" behavior="alternate"> */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start space-x-4 bg-[#E84C3D] hover:bg-[#844a9b] text-[#F2F2F2] font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform md:scale-110 mx-2 my-4 md:hover:scale-125 w-auto md:w-[250px]"
          >
            <DownloadIcon size={20} />
            <span className="text-sm">Download Resume</span>
          </a>
        {/* </marquee> */}
      </div>

      {/* Right Side - Profile Image */}
    </div>
  </section>
);

const SocialLink = ({ href, icon, isDarkMode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${isDarkMode ? "text-[#B2BEC3]" : "text-[#101828]"
      } hover:text-[#E84C3D] transition-colors
`}
  >
    {icon}
  </a>
);

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Scontinent Technologies Pvt Ltd",
      period: "Jul 2023 -- Present",
      achievements: [
        "Architected and implemented a comprehensive mock test platform using React and React Native, serving 50,000+ active students",
        "Integrated Redux for state management and implemented REST APIs for seamless data flow, resulting in 40% faster load times",
        "Developed an advanced analytics dashboard using Chart.js, providing detailed performance metrics",
        "Created a responsive educational news section that increased platform engagement by 35%",
      ],
    },
    {
      title: "Front-End Developer Trainee",
      company: "Scontinent Technologies Pvt Ltd",
      period: "Mar 2022 -- Sep 2022",
      achievements: [
        "Led the development of Sconti, a social networking platform connecting students with industry professionals",
        "Implemented core features using React.js and Apollo Client for efficient state management",
        "Created reusable components library, reducing development time by 25%",
        "Developed responsive UI components using Material-UI, ensuring cross-platform compatibility",
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-[#f2f2f2]" : "text-[#101828]"
            } `}
        >
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-bold text-[#E84C3D] mb-2">
                {exp.title}
              </h3>
              <h4 className="text-[#B2BEC3] mb-2">{exp.company}</h4>
              <p className="text-sm text-[#B2BEC3] mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-[#B2BEC3]">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Mock Test Platform",
      description: "Comprehensive platform for online testing and assessment",
      technologies: ["React", "React Native", "Redux", "Chart.js"],
      link: "https://samai.scontiapp.com/online-mocktest",
    },
    {
      title: "Sconti Admin Dashboard",
      description: "Advanced quiz management system with role-based access",
      technologies: ["React.js", "Material-UI", "Firebase"],
      link: "https://scontiadmin.web.app/",
    },
    {
      title: "Scontinent Corporate Website",
      description: "Company's official website with optimized SEO",
      technologies: ["React.js", "Firebase", "Google Tag Manager"],
      link: "https://www.scontinent.com/",
    },
    {
      title: "Blog Application",
      description: "A full-stack blog application built with MERN",
      technologies: ["React.js", "Nodejs", "Express","Mongo Db","Tailwind","FlowBit"],
      link: "https://github.com/prabhanjansp/MeenBlogApp",
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-[#f2f2f2]" : "text-[#101828]"
            }`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-bold text-[#E84C3D] mb-2 flex items-center justify-between">
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B2BEC3] hover:text-[#E84C3D]"
                >
                  <LinkIcon size={20} />
                </a>
              </h3>
              <p className="text-[#B2BEC3] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#171A21] text-[#E84C3D] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ isDarkMode }) => {
  // const skillCategories = [
  //   {
  //     title: "Languages",
  //     skills: ["JavaScript", "HTML5", "CSS3"],
  //     icon: "💻",
  //   },
  //   {
  //     title: "Front-End",
  //     skills: ["React.js", "Redux Toolkit", "React Native"],
  //     icon: "🎨",
  //   },
  //   {
  //     title: "Backend",
  //     skills: ["Node.js", "Firebase", "Apollo GraphQL"],
  //     icon: "⚙️",
  //   },
  //   {
  //     title: "UI/UX",
  //     skills: ["Material-UI", "Tailwind CSS", "Framer"],
  //     icon: "🎯",
  //   },
  // ];

  const techStack = [
    { name: "Java Script", icon:  js  },
    { name: "React", icon:  react  },
    { name: "Node.js", icon:  node2  },
    { name: "Redux tool kit", icon:  redux  },
    { name: "Material UI", icon:  mui  },
    { name: "Tailwind css", icon:  wind  },
    { name: "Firebase", icon:  firebase  },
    { name: "GitHub", icon:  git  },
    // Add the rest of your tech stack items
  ];

  return (
    // <section className="min-h-screen pt-24 px-4">
    //   <div className="max-w-4xl mx-auto">
    //     <h2 className={`text-3xl font-bold mb-8 ${
    //       isDarkMode ? "text-[#f2f2f2]" : "text-[#101828]"
    //     }`}>Skills</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {skillCategories.map((category, index) => (
    //         <div
    //           key={index}
    //           className="bg-[#112240] p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform"
    //         >
    //           <h3 className="text-xl font-bold text-[#E84C3D] mb-4 flex items-center">
    //             <span className="mr-2">{category.icon}</span>
    //             {category.title}
    //           </h3>
    //           <div className="flex flex-wrap gap-2">
    //             {category.skills.map((skill, i) => (
    //               <span
    //                 key={i}
    //                 className="px-3 py-1 text-sm bg-[#171A21] text-[#E84C3D] rounded-full"
    //               >
    //                 {skill}
    //               </span>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="min-h-screen pt-24 px-4">
       <div className="max-w-4xl mx-auto">
      {/* Title */}
      <h2 className={`text-4xl font-bold ${isDarkMode?"text-[#f2f2f2]":"text-[#101820]"} mb-8  text-center `}>My Tech Stack</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-4xl">
        {/* Static Image */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/60/02/91/1000_F_560029138_HuyluR3MHV7Iex3G4MXDLGUIpx3Mi2Lv.jpg"
            alt="Developer Working"
            className="w-72 h-72 md:w-full object-cover border filter:drop-shadow(1 "
            style={{borderRadius:16}}
            loading="lazy"
          />
        </div>

        {/* Tech Stack List with Animation */}
        <div className="md:w-1/2 flex flex-col items-start gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {techStack.map((category, index) => (
             <motion.div
             key={index}
             whileHover={{ scale: 1.1 }}
             className="bg-[#112240] p-4 rounded-lg flex flex-col items-center transition-transform shadow-md"
             style={{ width: '150px', height: '180px' }}
           >
             <div className="w-full h-24 flex items-center justify-center gap-x-5">
               <img
                 className="object-contain h-full"
                 src={category.icon}
                 alt={`${category.name} icon`}
                 
               />
             </div>
             <h3 className="text-[#E84C3D] font-bold text-sm text-center">
               {category.name}
             </h3>
           </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

const Education = ({ isDarkMode }) => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Bangalore Institute of Technology, VTU",
      period: "2019 -- 2022",
      grade: "CGPA: 8.5",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "The National Degree College, Bangalore University",
      period: "2015 -- 2018",
    },
  ];

  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2023",
    },
    {
      title: "React.js Essential Training",
      issuer: "LinkedIn Learning",
      year: "2023",
    },
    {
      title: "Learning Redux Toolkit",
      issuer: "LinkedIn Learning",
      year: "2023",
    },
  ];

  return (
    <section className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-[#f2f2f2]" : "text-[#101828]"
            }`}
        >
          Education
        </h2>

        <div className="mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-lg mb-6 hover:transform hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-bold text-[#E84C3D] mb-2">
                {edu.degree}
              </h3>
              <p className="text-[#B2BEC3] mb-2">{edu.institution}</p>
              <p className="text-sm text-[#B2BEC3]">{edu.period}</p>
              {edu.grade && (
                <p className="text-sm text-[#E84C3D] mt-2">{edu.grade}</p>
              )}
            </div>
          ))}
        </div>

        <h3
          className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-[#f2f2f2]" : "text-[#101828]"
            }`}
        >
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform"
            >
              <h4 className="text-lg font-bold text-[#E84C3D] mb-2">
                {cert.title}
              </h4>
              <p className="text-[#B2BEC3]">{cert.issuer}</p>
              <p className="text-sm text-[#B2BEC3]">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ isDarkMode }) => {
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
      icon: <PhoneIcon size={24} />,
      label: "Phone",
      value: "+91 9538711410",
      href: "tel:+919538711410",
    },
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
    <section className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-[#F2F2F2]" : "text-[#101828]"
            }`}
        >
          Get In Touch
        </h2>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#112240] p-6 rounded-lg flex items-center space-x-4 hover:transform hover:scale-[1.02] transition-transform"
            >
              <div className="text-[#E84C3D]">{info.icon}</div>
              <div>
                <h3 className="text-[#E84C3D] font-bold">{info.label}</h3>
                <p className="text-[#B2BEC3]">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-[#112240] p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#F2F2F2]">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#B2BEC3] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#171A21] text-[#F2F2F2] border border-[#E84C3D] focus:outline-none focus:ring-2 focus:ring-[#E84C3D] transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#B2BEC3] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#171A21] text-[#F2F2F2] border border-[#E84C3D] focus:outline-none focus:ring-2 focus:ring-[#E84C3D] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#B2BEC3] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-[#171A21] text-[#F2F2F2] border border-[#E84C3D] focus:outline-none focus:ring-2 focus:ring-[#E84C3D] transition-colors"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-3 px-6 rounded-lg bg-[#E84C3D] text-white font-bold hover:bg-[#E84C3D] transition-colors ${status === "sending" ? "opacity-75 cursor-not-allowed" : ""
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
    </section>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${isDarkMode ? "bg-[#171A21]" : "bg-[#fff]"}`}
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