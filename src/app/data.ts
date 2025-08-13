import {
  FaBoxArchive,
  FaDatabase,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMedal,
  FaReact,
  FaWordpress,
  FaXTwitter,
  FaLocationArrow,
  FaUserGraduate,
  FaLeaf,
  FaShopify,
  FaUser,
  FaFeather,
  FaLayerGroup,
  FaPhone,
} from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";

export const links = [
  { name: "Home", link: "#home", icon: FaFeather },
  { name: "About", link: "#about", icon: FaUser },
  { name: "Stack", link: "#tech", icon: FaLayerGroup },
  { name: "Projects", link: "#projects", icon: FaBoxArchive },
  { name: "Contact", link: "#contact", icon: FaPhone },
];

export const techStack = [
  {
    name: "React",
    icon: FaReact,
    description: "Builds dynamic user interfaces.",
  },
  {
    name: "Next.js",
    icon: RiNextjsLine,
    description: "Full-stack React framework.",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    description: "Popular content management system.",
  },
  {
    name: "Shopify",
    icon: FaShopify,
    description: "eCommerce platform for online stores.",
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

export const aboutMe = {
  icon: FaLeaf,
  description:
    "I'm a full stack web developer passionate about building efficient, scalable, and user-focused web applications. With experience in both frontend and backend technologies, I enjoy turning complex problems into clean, maintainable code — and learning new tools along the way.",
  infoCards: [
    {
      title: "Graduated",
      icon: FaUserGraduate,
      infos: [
        "Bachelor of Science in Information Technology",
        "Palawan State University · 2024",
      ],
    },
    {
      title: "Location",
      icon: FaLocationArrow,
      infos: ["Based in Palawan, Philippines", "Can WFH"],
    },
  ],
};
