import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiBriefcase,
  FiTarget,
} from "react-icons/fi";

const achievements = [
  {
    id: 1,
    featured: true,
    year: "2026",
    title: "APPATHON 2026 Winner",
    organization: "SNS College of Technology",
    prize: "₹5000 Cash Prize",
    description:
      "Secured First Place in APPATHON 2026 by developing an innovative application with excellent UI/UX and technical implementation.",
    icon: FiAward,
  },

  {
    id: 2,
    featured: false,
    year: "2026",
    title: "Techathon 2026 Winner",
    organization: "J.P. College of Engineering",
    prize: "₹3000 Cash Prize",
    description:
      "Won First Place in the IT Department Project Expo for presenting an innovative software solution.",
    icon: FiTarget,
  },

  {
    id: 3,
    featured: false,
    year: "2026",
    title: "Project Expo Participant",
    organization: "National Level Symposium",
    prize: "National Level",
    description:
      "Presented innovative software solutions and showcased technical projects at a National Level Symposium.",
    icon: FiCode,
  },

  {
    id: 4,
    featured: false,
    year: "2022 – 2026",
    title: "20+ Professional Certifications",
    organization: "AI • UI/UX • Full Stack",
    prize: "Continuous Learning",
    description:
      "Completed more than 20 certifications in Artificial Intelligence, UI/UX Design, Full Stack Development and other emerging technologies.",
    icon: FiBookOpen,
  },

  {
    id: 5,
    featured: false,
    year: "2025",
    title: "10-Day MERN Stack Training",
    organization: "Campus Connection",
    prize: "React + Vite + MERN",
    description:
      "Successfully completed an intensive hands-on training program covering React.js, Vite and the MERN Stack.",
    icon: FiBriefcase,
  },
];

export default achievements;