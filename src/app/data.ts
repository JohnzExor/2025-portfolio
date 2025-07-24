import {
  FaBoxArchive,
  FaCertificate,
  FaDatabase,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMedal,
  FaReact,
  FaWordpress,
  FaXTwitter,
} from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
export const links = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Stack", link: "#tech" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const techStack = [
  {
    name: "React",
    icon: FaReact,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Nextjs",
    icon: RiNextjsLine,
    description: "A React framework for building fast and scalable web apps.",
  },
  {
    name: "Wordpress",
    icon: FaWordpress,
    description: "A popular CMS for creating and managing websites.",
  },
];

export const projects = [
  {
    image: "/images/projects/puertoprincesa.png",
    name: "Puerto Princesa City",
    stack: ["Wordpress"],
    link: "https://puertoprincesa.ph/",
    description:
      "Redesigned the official website of Puerto Princesa City for a modern and user-friendly experience.",
  },
  {
    image: "/images/projects/tulong.png",
    name: "Tulong!",
    stack: ["Nextjs", "Supabase", "Shadcn"],
    link: "https://tulong-psu.vercel.app/",
    description:
      "Enhancing campus safety and emergency response at Palawan State University through a comprehensive reporting system designed to address maintenance issues, handbook violations, and emergency situations.",
  },
  {
    image: "/images/projects/lumine.png",
    name: "Lumine",
    stack: ["Reactjs", "Firebase", "Shadcn"],
    link: "https://lum1ne.web.app/",
    description:
      "Lumine is a social platform designed for connecting with others, expressing thoughts, and sharing personal insights or rants.",
  },
];

export const socials = [
  {
    name: "Resume",
    username: "@download",
    icon: FaDownload,
    link: "images/links/resume.pdf",
  },
  {
    name: "Linkedln",
    username: "@jjimeno",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/johnzyll-jimeno-b79244193/",
  },
  {
    name: "X",
    username: "@_xrcst",
    icon: FaXTwitter,
    link: "https://x.com/_xrcst",
  },

  {
    name: "Github",
    username: "@johnzExor",
    icon: FaGithub,
    link: "https://github.com/JohnzExor",
  },
];

export const testimonials = [
  {
    name: "Sarah Mendez",
    description:
      "Working with this developer was an absolute game-changer for our startup. Their ability to seamlessly integrate both frontend and backend systems made our platform faster, more reliable, and incredibly user-friendly.",
    rate: "5",
    date: "2025-05-10",
  },
  {
    name: "Carlos Tan",
    description:
      "One of the most dependable and skilled developers I’ve worked with. From building APIs to deploying scalable frontend interfaces, everything was done with precision and care.",
    rate: "5",
    date: "2025-04-22",
  },
  {
    name: "Emily Rivera",
    description:
      "They exceeded expectations on every level. Not only was the code clean and well-documented, but they also brought proactive suggestions that improved the overall user experience.",
    rate: "5",
    date: "2025-06-01",
  },
  {
    name: "Daniel Lee",
    description:
      "Very professional and detail-oriented. Delivered our full-stack application on time with robust features and excellent performance.",
    rate: "5",
    date: "2025-03-18",
  },
  {
    name: "Lara Gonzales",
    description:
      "Their ability to take a project from concept to launch without needing constant supervision is rare. Highly recommend them for any full stack web development needs.",
    rate: "5",
    date: "2025-07-05",
  },
];

export const overviewStats = [
  {
    name: "Projects",
    count: projects.length,
    description: "Built and deployed apps and websites.",
    icon: FaBoxArchive,
  },
  {
    name: "Certificates",
    count: 5,
    description: "Earned from tech courses and training.",
    icon: FaMedal,
  },
  {
    name: "Technologies",
    count: techStack.length,
    description: "Tools and languages I've worked with.",
    icon: FaDatabase,
  },
];
