// import React from 'react'
// import { motion } from "framer-motion";


// const Experience = ({ isDarkMode }) => {
//     const experiences = [
//       {
//         title: "Front-End Developer-1",
//         company: "Scontinent Technologies Pvt Ltd",
//         period: "November 2023 -- Present",
//         achievements: [
//           "Architected and developed a comprehensive mock test platform serving 50,000+ active students",
//           "Implemented Redux for state management, achieving 40% faster load times through optimized dataflow",
//           "Designed and integrated an analytics dashboard using E-Charts for detailed performance tracking",
//           "Built responsive educational news section with gesture-based interactions",
//           "Developed cross-platform functionality using React Native",
//           " Led development of Product Data Management System with role-based access",
//           " Built real-time Review Dashboard with database synchronization",
//           " Engineered multi-format question generation system supporting text, images, and equations",
//           " Implemented Google Sheets API integration, reducing data handling time by 85%",
//           " Developed automated workflow systems using React.js, Material-UI, and Firebase",
//         ],
//       },
//       {
//         title: "Assistant-Front-End Developer",
//         company: "Scontinent Technologies Pvt Ltd",
//         period: "Jul 2023 -- october 2023",
//         achievements: [
//           "Spearheaded development of official corporate website",
//           "Enhanced SEO performance using React Helmet and Google Tag Manager",
//           "Integrated YouTube API and E-charts for improved user engagement",
//           "Implemented secure authentication and optimized hosting services",
//         ],
//       },
//       {
//         title: "Front-End Developer Trainee",
//         company: "Scontinent Technologies Pvt Ltd",
//         period: "Mar 2022 -- Sep 2022",
//         achievements: [
//           "Led the development of Sconti, a social networking platform connecting students with industry professionals",
//           "Implemented core features using React.js and Apollo Client for efficient state management",
//           "Created reusable components library, reducing development time by 25%",
//           "Developed responsive UI components using Material-UI, ensuring cross-platform compatibility",
//         ],
//       },
//     ];
  
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.15, duration: 1.0 }}
//         className="min-h-screen pt-24 px-4"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className={`text-4xl font-bold mb-8  `}>
//             <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <div
//                 key={index}
//                 className={` ${
//                   isDarkMode
//                   ? "bg-gradient-to-bl from-zinc-900 to-blue-900"
//                   : "bg-gradient-to-bl from-gray-50 to-blue-200"
//                 } p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform`}
//               >
//                 <h3 className="text-xl font-bold text-[#E84C3D] mb-2">
//                   {exp.title}
//                 </h3>
//                 <h4
//                   className={`${
//                     isDarkMode ? "text-[#fefefe]" : "text-[#262626]"
//                   } mb-2`}
//                 >
//                   {exp.company}
//                 </h4>
//                 <p
//                   className={`text-sm ${
//                     isDarkMode ? "text-[#fefefe]" : "text-[#262626]"
//                   } mb-4`}
//                 >
//                   {exp.period}
//                 </p>
//                 <ul
//                   className={`list-disc list-inside space-y-2 ${
//                     isDarkMode ? "text-[#fefefe]" : "text-[#262626]"
//                   }`}
//                 >
//                   {exp.achievements.map((achievement, i) => (
//                     <li key={i}>{achievement}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     );
//   };
// export default Experience
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Experience = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const experiences = [
    {
      title: "Front-End Developer-1",
      company: "Scontinent Technologies Pvt Ltd",
      period: "November 2023 -- Present",
      achievements: [
        "Architected and developed a comprehensive mock test platform serving 50,000+ active students",
        "Implemented Redux for state management, achieving 40% faster load times through optimized dataflow",
        "Designed and integrated an analytics dashboard using E-Charts for detailed performance tracking",
        "Built responsive educational news section with gesture-based interactions",
        "Developed cross-platform functionality using React Native",
        "Led development of Product Data Management System with role-based access",
        "Built real-time Review Dashboard with database synchronization",
        "Engineered multi-format question generation system supporting text, images, and equations",
        "Implemented Google Sheets API integration, reducing data handling time by 85%",
        "Developed automated workflow systems using React.js, Material-UI, and Firebase",
      ],
    },
    {
      title: "Assistant-Front-End Developer",
      company: "Scontinent Technologies Pvt Ltd",
      period: "Jul 2023 -- October 2023",
      achievements: [
        "Spearheaded development of official corporate website",
        "Enhanced SEO performance using React Helmet and Google Tag Manager",
        "Integrated YouTube API and E-charts for improved user engagement",
        "Implemented secure authentication and optimized hosting services",
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 1.0 }}
      className="min-h-screen pt-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-[#da7c25] to-[#b923e1] bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 duration-300 backdrop-blur-md border border-gray-200 ${
                isDarkMode
                  ? "bg-gradient-to-br from-zinc-900 to-blue-900 text-white"
                  : "bg-gradient-to-br from-gray-50 to-blue-200 text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-[#E84C3D] mb-2">{exp.title}</h3>
              <h4 className="text-lg mb-2">{exp.company}</h4>
              <p className="text-sm opacity-80 mb-4">{exp.period}</p>
              <ul className="list-none space-y-2 text-left">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-500" /> {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;