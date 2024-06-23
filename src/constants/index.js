import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  brainwave,
  iPhone,
  dss,
  threejs,
  zaayka,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Robotics Aficionado",
    icon: creator,
  },
];

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
];


const projects = [
  {
    name: "Zaayka",
    description:
      "Zaayka transforms dining by offering a comprehensive platform to discover and order a variety of cuisines. It ensures a smooth,  hassle-free ordering process even during peak traffic without compromising performance.",
    tech:
      "Developed with React for a dynamic interface, Node.js for efficient server-side operations, and MongoDB for scalable data management, Zaayka is a robust platform capable of supporting extensive user interactions and transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: zaayka,
    source_code_link: "https://github.com/ktejas04/zaayka",
    deployment_link: "https://zaayka.onrender.com"
    
  },
  {
    name: "Brainwave",
    description:
      "Brainwave is an AI chat app, featuring smart automation, robust security, and AI-powered tools for seamless workflow optimization, ensuring efficient, high-quality output.",
    tech:
      "Developed with React for a dynamic interface, Node.js for efficient server-side operations, and MongoDB for scalable data       management, Zaayka is a robust platform capable of supporting extensive user interactions and transactions.",  
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "uidesign",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/ktejas04/brainwave",
    deployment_link: "https://brainwave-ejes.onrender.com/"
  },
  {
    name: "iPhone 15 Pro",
    description:
      "A modern website, designed with 3D models, inspired by the iPhone 15 Pro website. Enjoy seamless performance and sleek aesthetics, crafted for innovation and quality.",
    tech:
      "Developed with React for a dynamic interface, Node.js for efficient server-side operations, and MongoDB for scalable data       management, Zaayka is a robust platform capable of supporting extensive user interactions and transactions.",  
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iPhone,
    source_code_link: "https://github.com/ktejas04/iphone-15-pro",
    deployment_link: "https://iphone-15-pro.onrender.com/"
  },
  {
    name: "Data Science Summit'23",
    description:
      "An engaging summit hosted by the Society for Data Science at BIT Mesra, featuring a hackathon, quizzes, data plotting challenges, and an insightful speaker session by Mr. Shikhar Goel, CTO of GFG.",
    tech:
      "The summit's website was developed using React for a dynamic interface, Tailwind CSS for styling, and Figma for design integration. It had over 500+ views and registrations.",  
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dss,
    source_code_link: "https://github.com/ktejas04/",
    deployment_link: "https://data-science-summit-sds.vercel.app/"
  },

];

export { services, skills, projects };
