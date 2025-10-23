import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNpm, FaSass } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiRedux,SiVercel , SiNextdotjs, SiPostman,SiTailwindcss, SiMongodb,  SiExpress,   SiJest, SiFirebase,SiMui,SiInsomnia,SiFigma,SiAxios,SiApollographql    } from 'react-icons/si'

import { FaJava } from "react-icons/fa";



export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />,level: 85 },
      { name: "JavaScript", icon: <SiJavascript />,level: 80 },
      { name: "TypeScript", icon: <SiTypescript />,level: 35 },
      { name: "HTML5", icon: <FaHtml5 />,level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />,level: 90 },
      { name: "Redux", icon: <SiRedux />,level: 65 },
      { name: "Next.js", icon: <SiNextdotjs />,level: 40 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />,level: 50 },
      { name: "SASS", icon: <FaSass />,level: 60 },
      { name: "Material UI", icon: <SiMui />,level: 75 },                 
      { name: "Figma ", icon: <SiFigma  />,level: 40 },                 
      { name: "Axios  ", icon: <SiAxios   />,level: 45 },                 
      { name: "Apollo-graphql   ", icon: <SiApollographql    />,level: 50 },                 
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: <FaJava  />,level: 60 },
      { name: "Node.js", icon: <FaNodeJs />,level: 50 },
      { name: "Express", icon: <SiExpress />,level: 65 ,},
      { name: "MongoDB", icon: <SiMongodb />,level: 35 },
      // { name: "PostgreSQL", icon: <SiPostgresql />,level: 90 },
      // { name: "GraphQL", icon: <SiGraphql />,level: 90 },
      { name: "Firebase", icon: <SiFirebase />,level: 55 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt />,level: 85 },
      { name: "GitHub", icon: <FaGithub />,level: 80 },
      // { name: "Docker", icon: <SiDocker />,level: 90 },
      { name: "Jest", icon: <SiJest />,level: 45 },
      { name: "NPM", icon: <FaNpm />,level: 60 },
      { name: "Postman", icon: <SiPostman />,level: 70 },
      { name: "Insomnia ", icon: <SiInsomnia  />,level: 55 },
      { name: "Vercel  ", icon: <SiVercel   />,level: 60 },
    ]
  }
]