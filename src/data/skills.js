import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaPalette,
  FaPenNib,
  FaVideo,
  FaImage,
  FaPhotoVideo,
  FaLightbulb,
  FaComments,
  FaUsers,
  FaClock,
  FaHandshake,
  FaPuzzlePiece,
  FaUserTie,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    id: "development",
    title: "Development",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#F89820",
      },
      {
        name: "C",
        icon: SiC,
        color: "#00599C",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
    ],
  },

  {
    id: "design",
    title: "Design",
    items: [
      {
        name: "UI Design",
        icon: FaFigma,
      },
      {
        name: "UX Design",
        icon: FaLaptopCode,
      },
      {
        name: "Graphic Design",
        icon: FaPalette,
      },
      {
        name: "Logo Design",
        icon: FaPenNib,
      },
      {
        name: "Brand Identity",
        icon: FaPalette,
      },
      {
        name: "Wireframing",
        icon: FaPuzzlePiece,
      },
      {
        name: "Prototyping",
        icon: FaLayerGroup,
      },
    ],
  },

  {
    id: "editing",
    title: "Editing",
    items: [
      {
        name: "Video Editing",
        icon: FaVideo,
      },
      {
        name: "Photo Editing",
        icon: FaImage,
      },
      {
        name: "Motion Graphics",
        icon: FaPhotoVideo,
      },
      {
        name: "Color Grading",
        icon: FaPalette,
      },
      {
        name: "Visual Storytelling",
        icon: FaLightbulb,
      },
      {
        name: "Content Creation",
        icon: FaVideo,
      },
    ],
  },

  {
    id: "professional",
    title: "Professional",
    items: [
      {
        name: "Communication",
        icon: FaComments,
      },
      {
        name: "Problem Solving",
        icon: FaPuzzlePiece,
      },
      {
        name: "Design Thinking",
        icon: FaLightbulb,
      },
      {
        name: "Leadership",
        icon: FaUserTie,
      },
      {
        name: "Team Collaboration",
        icon: FaHandshake,
      },
      {
        name: "Time Management",
        icon: FaClock,
      },
      {
        name: "Creative Thinking",
        icon: FaPalette,
      },
      {
        name: "Adaptability",
        icon: FaUsers,
      },
    ],
  },
];

export default skills;