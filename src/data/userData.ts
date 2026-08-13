import { Link2Icon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import XIcon from "../components/XIcon";



export const personalInfo = {
  name: "Ayush Kumar Ukenday",
  alias: "Ayush",
  shortAlias: "AKU",

  location: "Bhopal, Madhya Pradesh, India",

  role: "Full Stack Developer",

  roles: [
    "Full Stack Developer",
    "AI Developer",
    "Tech Explorer",
  ],

  college: "SOIT, RGPV Bhopal",
  collegeUrl: "https://www.rgpv.ac.in/",

  avatarUrl: "/assets/ME2png.png",

  status: "Available for opportunities",

  aboutText:
    "Full-stack developer focused on building scalable web applications and AI-powered solutions. I enjoy turning complex problems into practical, reliable, and user-friendly products.",

  aboutText1:
    "I'm Ayush Kumar Ukenday, a Full Stack Developer based in Bhopal, Madhya Pradesh, India. I'm pursuing Computer Science And Business System Engineering at ",

  aboutText2:
    ". I build full-stack applications using modern JavaScript technologies and explore Artificial Intelligence, Generative AI, and Machine Learning to create intelligent software solutions.",
};


// ===============================
// TECHNICAL PROFILE
// ===============================

export const fetchData = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Focus", value: "Full Stack + AI" },
  { label: "Location", value: "Bhopal, India" },
  { label: "Education", value: "B.Tech CSBS" },
  { label: "Frontend", value: "React / Next.js" },
  { label: "Backend", value: "Node.js / Express.js" },
  { label: "Database", value: "MongoDB / PostgreSQL" },
  { label: "AI", value: "GenAI / Transformers" },
  { label: "Languages", value: "JavaScript / TypeScript / Python" },
  { label: "Currently", value: "Building & Learning" },
];


// ===============================
// SKILLS
// ===============================

export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
        invertDark: true,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Shadcn UI",
        icon: "https://cdn.simpleicons.org/shadcnui",
        invertDark: true,
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express",
        invertDark: true,
      },
      {
        name: "REST APIs",
        icon: "https://cdn.simpleicons.org/postman",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql",
      },
      {
        name: "Prisma",
        icon: "https://cdn.simpleicons.org/prisma",
        invertDark: true,
      },
    ],
  },
 {
    category: "AI / Machine Learning",
    items: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python",
      },
      {
        name: "Generative AI",
        icon: "https://cdn.simpleicons.org/googlegemini",
      },
      {
        name: "LLMs",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
        invertDark: true,
      },
      {
        name: "RAG",
        icon: "https://cdn.simpleicons.org/langchain",
      },
      {
        name: "Hugging Face",
        icon: "https://cdn.simpleicons.org/huggingface",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.simpleicons.org/tensorflow",
      },
    ],
  },

  {
    category: "Tools & DevOps",
    items: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github",
        invertDark: true,
      },
      {
        name: "Docker",
        icon: "https://cdn.simpleicons.org/docker",
      },
      {
        name: "Redis",
        icon: "https://cdn.simpleicons.org/redis",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase",
      },
      {
       
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      invertDark: true,
    },
      
    ],
  },
];


// ===============================
// QUICK FACTS
// ===============================

export const facts = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Continuous Learner",
  "Tech Explorer",
];


// ===============================
// EXPERIENCE / TIMELINE
// ===============================

export const timeline = [
  {
    year: "2026",
    detail:
      "Focused on full-stack development, Artificial Intelligence, and building production-oriented applications.",
    more:
      "Worked on modern web applications using React, Next.js, Node.js, databases, APIs, and AI integrations while preparing for professional software engineering opportunities.",
  },

  {
    year: "2026",
    detail:
      "Completed a research internship at MANIT Bhopal on Human Activity Recognition using Deep Learning.",
    more:
      "Worked on Human Activity Recognition using Transformer-based deep learning approaches, exploring time-series data, attention mechanisms, model training, and evaluation.",
  },

  {
    year: "2025",
    detail:
      "Started exploring Artificial Intelligence and Generative AI.",
    more:
      "Learned the fundamentals of AI and experimented with LLM APIs, AI-powered applications, prompt engineering, and intelligent automation.",
  },

  {
    year: "2024",
    detail:
      "Started building full-stack web applications.",
    more:
      "Moved beyond frontend development and started working with Node.js, Express.js, MongoDB, REST APIs, authentication, databases, and complete application architectures.",
  },

  {
    year: "2023",
    detail:
      "Started exploring modern web development.",
    more:
      "Built projects using HTML, CSS, JavaScript and gradually moved toward React and modern frontend development.",
  },

  {
    year: "2023",
    detail:
      "Started my programming journey.",
    more:
      "Began experimenting with programming, command-line tools, scripting, and problem-solving, developing an interest in software and technology.",
  },
];


// ===============================
// CONTACT
// ===============================

export const contactItems = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Ayush-uk",
    href: "https://github.com/Ayush-uk",
    color: "text-foreground",
  },

  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ayushkumarukenday",
    href: "https://www.linkedin.com/in/ayushkumarukenday/",
    color: "text-blue-600",
  },

  {
    icon: XIcon,
    label: "X",
    value: "x.com/ayush_ukenday",
    href: "https://x.com/ayush_ukenday",
    color: "text-foreground",
  },

  {
    icon: Link2Icon,
    label: "Discord",
    value: "Discord",
    href: "https://discord.com/users/xyush0",
    color: "text-indigo-500",
  },
];


// ===============================
// PROJECTS
// ===============================

export const projectData = [
  {
  name: "PostBoy",
  description:
    "A modern API testing and collaboration platform for sending REST requests, inspecting responses, testing WebSocket connections, and organizing API workflows in shared workspaces.",
  tech: [
    "Next.js",
    "TypeScript",
    "WebSockets",
    "ShadCN",
    "TailwindCSS",
    "TanStack",
    "Zustand",
    "Monaco Editor",
  ],
  live: "https://post-boy-omega.vercel.app/",
  github: "https://github.com/Ayush-uk/PostBoy",
  category: "Web",
},
  {
  name: "AI Form Builder",
  description:
    "A production-grade multi-tenant SaaS platform for building, publishing, and analyzing forms with a visual drag-and-drop builder, AI-powered form generation, conditional logic, real-time collaboration, and role-based workspace management.",
  tech: [
    "Next.js 15",
    "React 19",
    "Node.js",
    "Express",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "BullMQ",
    "Socket.IO",
    "GraphQL",
    "JWT",
    "RBAC",
    "Docker",
    "GitHub Actions",
    "Tailwind CSS",
    "Radix UI",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "React Flow",
    "Framer Motion",
    "Recharts",
  ],
  live: "",
  github: "",
  category: "Web",
},
{
  name: "LeetCode",
  description:
    "A full-stack competitive programming platform for solving coding problems, executing submissions through Judge0, tracking submission history, and organizing problems into playlists, with role-based access and user profiles.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Shadcn/ui",
    "Prisma",
    "PostgreSQL",
    "Docker",
    "Clerk",
    "GitHub OAuth",
    "Judge0",
    "Server Actions",
  ],
  live: "",
  github: "https://github.com/Ayush-uk/leetcode",
  category: "Web",
},
  {
    name: "MockMate",
    description:
      "AI-powered interview platform that simulates technical and HR interviews, evaluates responses, and provides personalized feedback.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "OpenRouter",
      "GenAI",
    ],
    live: "",
    github: "https://github.com/Ayush-uk/MockMate",
    category: "AI",
  },

  
  {
  name: "V0 Clone",
  description:
    "An AI-powered application builder that enables users to create and manage Next.js projects through AI agents, sandboxed execution, persistent conversations, file exploration, and automated project workflows.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Shadcn/ui",
    "Prisma",
    "PostgreSQL",
    "Docker",
    "Clerk",
    "GitHub OAuth",
    "Google OAuth",
    "Inngest",
    "E2B Sandboxes",
    "AI Agents",
    "Server Actions",
  ],
  live: "",
  github: "https://github.com/Ayush-uk/V0",
  category: "AI",
},

  {
    name: "MedicalOS",
    description:
      "Healthcare workflow platform focused on improving outpatient department operations and simplifying patient-doctor workflows.",
    tech: [
      "Flutter",
      "Supabase",
      "Backend APIs",
      "Database",
    ],
    live: "",
    github: "",
    category: "Web",
  },

  {
    name: "VASTU × AWH",
    description:
      "Secure e-commerce and payment system built for AWH, integrating Razorpay payments, coupon validation, payment verification, and Firebase services.",
    tech: [
      "Node.js",
      "Express.js",
      "Firebase",
      "Razorpay",
      "REST API",
      "JavaScript",
    ],
    live: "https://vastu.awhbharat.org/",
    github: "",
    category: "Web",
  },
  {
    name: "Trading Simulator",
    description:
      "Paper trading platform concept for practicing stock trading using virtual money without real financial risk.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    live: "",
    github: "https://github.com/Ayush-uk/stocks-trading-platform",
    category: "Web",
  },

  
];


// ===============================
// RESUME
// ===============================

export const resume = {
  "full-stack-developer": "/public/AyushKumarUkenday_RESUME.pdf",
};