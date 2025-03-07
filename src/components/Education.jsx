import React from "react";
import { motion } from "framer-motion";

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
    {
      title: "ChatGPT Prompt Engineering for Developers",
      issuer: "Deep Learning.Ai",
      year: "2024",
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
            Education
          </span>
        </h2>

        <div className="mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${
                isDarkMode
                ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                : "bg-gradient-to-bl from-gray-50 to-blue-200"
              } p-6 rounded-lg mb-6 hover:transform hover:scale-[1.02] transition-transform`}
            >
              <h3 className="text-xl font-bold text-[#E84C3D] mb-2">
                {edu.degree}
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                } mb-2`}
              >
                {edu.institution}
              </p>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                }`}
              >
                {edu.period}
              </p>
              {edu.grade && (
                <p className="text-sm text-[#E84C3D] mt-2">{edu.grade}</p>
              )}
            </div>
          ))}
        </div>

        <h2 className={`text-4xl font-bold mb-8  `}>
          <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`${
                isDarkMode
                  ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
                  : "bg-gradient-to-bl from-gray-50 to-blue-200"
              } p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform`}
            >
              <h4 className="text-lg font-bold text-[#E84C3D] mb-2">
                {cert.title}
              </h4>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                }`}
              >
                {cert.issuer}
              </p>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-[#ddd]" : "text-[#262626]"
                }`}
              >
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
