import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiLayers,
  FiTarget,
  FiTool,
  FiZap,
} from "react-icons/fi";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "ECE Student",
  "Web Developer",
  "IoT Builder",
  "Problem Solver",
];

export const stats = [
  { value: "5+", label: "Core Projects" },
  { value: "3", label: "Domains Blended" },
  { value: "100%", label: "Curiosity Driven" },
];

export const skills = [
  {
    title: "Web Development",
    icon: FiLayers,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Programming",
    icon: FiCode,
    items: ["Python", "C", "C++"],
  },
  {
    title: "ECE",
    icon: FiCpu,
    items: ["IoT", "ESP32", "Arduino", "MATLAB", "Verilog"],
  },
  {
    title: "Tools",
    icon: FiTool,
    items: ["GitHub", "VS Code", "Figma"],
  },
];

export const projects = [
  {
    title: "Real-Time Passenger Monitoring and Safety System",
    description:
      "A smart transportation safety platform that tracks passenger activity, monitors occupancy patterns, and improves emergency awareness using connected sensors.",
    stack: ["IoT", "ESP32", "Sensors", "Dashboard UI"],
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-sky-500/30 via-cyan-400/10 to-emerald-400/20",
  },
  {
    title: "Biomedical Image Classification using CNN",
    description:
      "A deep learning workflow for classifying biomedical imagery with a focus on pattern recognition, preprocessing quality, and reliable model evaluation.",
    stack: ["Python", "CNN", "TensorFlow", "Data Visualization"],
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-fuchsia-500/30 via-violet-400/10 to-sky-500/20",
  },
  {
    title: "UART Communication System",
    description:
      "A communication design project exploring transmitter-receiver behavior, timing control, and signal integrity for dependable serial data transfer.",
    stack: ["UART", "Embedded Systems", "Digital Logic"],
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-emerald-500/30 via-teal-400/10 to-cyan-500/20",
  },
  {
    title: "ALU Design using Verilog",
    description:
      "A hardware logic design implementing arithmetic and logical operations with modular Verilog architecture and simulation-first verification thinking.",
    stack: ["Verilog", "Digital Design", "Simulation"],
    github: "https://github.com/",
    demo: "https://example.com/",
    accent: "from-amber-400/30 via-orange-400/10 to-rose-500/20",
  },
  {
    title: "DCDC SRMIST Website",
    description:
      "A public-facing site for the DCDC student developer community, highlighting events, resources, and member engagement.",
    stack: ["Responsive Web", "Community Platform", "UI/UX"],
    github: "https://github.com/",
    demo: "https://www.dcdcsrmist.in",
    accent: "from-violet-500/30 via-indigo-400/10 to-cyan-400/20",
  },
  {
    title: "SWE Ayush Website",
    description:
      "A professional website for SWE Ayush featuring portfolio details, service highlights, and seamless navigation.",
    stack: ["Responsive Web", "UI/UX", "Content Design"],
    github: "https://github.com/",
    demo: "https://www.sweayush.com",
    accent: "from-fuchsia-500/30 via-violet-400/10 to-sky-500/20",
  },
];

export const achievements = [
  {
    title: "Certifications",
    icon: FiAward,
    points: [
      "Web development and web developer specialization certificates",
      "Programming and problem-solving coursework recognitions",
      "IoT and embedded systems workshop participation",
    ],
  },
  {
    title: "Hackathons",
    icon: FiZap,
    points: [
      "Participated in collaborative hackathon environments",
      "Built practical prototypes under deadline-driven conditions",
      "Focused on solving real-world engineering and product problems",
    ],
  },
  {
    title: "Workshops",
    icon: FiBookOpen,
    points: [
      "Hands-on learning in Arduino, ESP32, and embedded systems",
      "Exposure to design, rapid prototyping, and technical presentation",
      "Continuous learning through seminars and guided lab sessions",
    ],
  },
  {
    title: "Academic Highlights",
    icon: FiTarget,
    points: [
      "ECE student with strong interest in applied innovation",
      "Combines software development with electronics fundamentals",
      "Actively builds projects to deepen concepts beyond the classroom",
    ],
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:mounishan@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-linkedin" },
  { label: "GitHub", href: "https://github.com/your-github" },
];

