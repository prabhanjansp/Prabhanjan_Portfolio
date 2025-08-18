import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNpm, FaSass } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiRedux,SiVercel , SiNextdotjs, SiPostman,SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiGraphql, SiDocker, SiJest, SiFirebase,SiMui,SiInsomnia,SiFigma,SiAxios,SiApollographql    } from 'react-icons/si'

import { FaJava } from "react-icons/fa";



export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />,level: 90 },
      { name: "JavaScript", icon: <SiJavascript />,level: 90 },
      { name: "TypeScript", icon: <SiTypescript />,level: 90 },
      { name: "HTML5", icon: <FaHtml5 />,level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />,level: 90 },
      { name: "Redux", icon: <SiRedux />,level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />,level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />,level: 90 },
      { name: "SASS", icon: <FaSass />,level: 90 },
      { name: "Material UI", icon: <SiMui />,level: 90 },                 
      { name: "Figma ", icon: <SiFigma  />,level: 90 },                 
      { name: "Axios  ", icon: <SiAxios   />,level: 90 },                 
      { name: "Apollo-graphql   ", icon: <SiApollographql    />,level: 90 },                 
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: <FaJava  />,level: 90 },
      { name: "Node.js", icon: <FaNodeJs />,level: 90 },
      { name: "Express", icon: <SiExpress />,level: 90 ,},
      { name: "MongoDB", icon: <SiMongodb />,level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql />,level: 90 },
      { name: "GraphQL", icon: <SiGraphql />,level: 90 },
      { name: "Firebase", icon: <SiFirebase />,level: 90 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt />,level: 90 },
      { name: "GitHub", icon: <FaGithub />,level: 90 },
      { name: "Docker", icon: <SiDocker />,level: 90 },
      { name: "Jest", icon: <SiJest />,level: 90 },
      { name: "NPM", icon: <FaNpm />,level: 90 },
      { name: "Postman", icon: <SiPostman />,level: 90 },
      { name: "Insomnia ", icon: <SiInsomnia  />,level: 90 },
      { name: "Vercel  ", icon: <SiVercel   />,level: 90 },
    ]
  }
]