import blackmythwukong from "../assets/images/projects/wukong-logo.svg"
import godOfWar from "../assets/images/projects/god-of-war.svg";
import habitex from "../assets/images/projects/habitex.svg";
import timetable from "../assets/images/projects/timetable.svg";
import library from "../assets/images/projects/library.svg";

const projects = [

  {
  id: 1,

  title: "Black Myth: Wukong ",

  category: "Frontend",

  featured: true,

  image: blackmythwukong,

  description:
    "A premium React.js encyclopedia inspired by Black Myth: Wukong featuring interactive game information, equipment, bosses, maps, items, lore, animations, and a modern responsive UI.",

  technologies: [
    "React.js",
    "React Router",
    "JavaScript",
    "CSS3",
    "Framer Motion",
    "Responsive Design",
    "Vite"
  ],

  github: "https://github.com/Sugan3007/black-myth-wukong",

  live: "https://black-myth-wukong-6d1k.vercel.app/",

  status: "Completed",

  year: "2026"
},
   {
    id: 2,
    featured: true,
    title: "God of War Cinematic Website",
    category: "Entertainment Website",
    image: godOfWar,

    description:
      "A cinematic fan website inspired by the God of War universe, featuring major game details, character information, immersive visuals, responsive layouts and a premium dark-themed user experience.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "React Icons",
      "Vite",
    ],

    github: "https://github.com/Sugan3007/gow-cinematic",
    live: "https://gow-cinematic.vercel.app/",
  },
  
  {
    id: 3,

    featured: true,

    title: "Habit X",

    category: "Productivity Platform",

    image: habitex,

    description:
      "A modern habit tracking platform that helps users build positive routines through streak tracking, progress monitoring, daily reminders and an intuitive user experience.",

    technologies: [
      "HTML",
      "CSS",
      "Java",
      "Firebase",
      "Authentication",
      "Responsive Design",
    ],

    github: "https://github.com/Sugan3007",

    live: "https://habit-x.netlify.app/pages/login.html",
  },

  {
    id: 4,

    featured: false,

    title: "AI Based Timetable Management System",

    category: "Artificial Intelligence",

    image: timetable,

    description:
      "An AI-powered timetable management system that automatically generates optimized schedules while minimizing conflicts and efficiently managing available resources.",

    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "Firestore",
      "Authentication",
      "AI",
    ],

    github: "https://github.com/Sugan3007",

    live: "https://github.com/Sugan3007",
  },

  {
    id: 5,

    featured: false,

    title: "Library Management System",

    category: "Android Application",

    image: library,

    description:
      "A mobile library management application for managing books, members, issue and return records, notifications and administrative operations.",

    technologies: [
      "Java",
      "Android Studio",
      "Firebase",
      "Firestore",
      "Authentication",
      "FCM",
    ],

    github: "https://github.com/Sugan3007",

    live: "https://github.com/Sugan3007",
  },
];

export default projects;