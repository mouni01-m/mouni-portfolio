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
];

export const heroRoles = [
  "ECE Student",
  "Embedded Systems Builder",
  "IoT Builder",
  "AI & Web Intern",
];

export const stats = [
  { value: "9.86", label: "CGPA" },
  { value: "2027", label: "B.Tech Graduate" },
  { value: "5+", label: "Awards & Honors" },
];

export const skills = [
  {
    title: "Embedded & IoT",
    icon: FiLayers,
    items: ["Arduino", "IoT Systems", "Sensor Interfacing", "UART / I2C", "Firebase"],
  },
  {
    title: "Programming",
    icon: FiCode,
    items: ["C++", "Python", "Python for Embedded Systems"],
  },
  {
    title: "Electronics",
    icon: FiCpu,
    items: ["Circuit Design", "Hardware Debugging", "SMT & THT Soldering", "Quality Inspection"],
  },
  {
    title: "Simulation & Strengths",
    icon: FiTool,
    items: ["Multisim", "Problem Solving", "Communication Systems", "Team Management"],
  },
];

export const projects = [
  {
    title: "Real-Time Passenger Monitoring and Safety System",
    description:
      "An embedded transportation safety system that tracks passenger occupancy using load, IR, and ultrasonic sensors, sends live readings to Firebase, and triggers alerts when safe capacity limits are exceeded.",
    stack: ["Arduino", "C/C++", "Firebase", "IoT", "Load Sensor", "IR Sensor", "Ultrasonic Sensor"],
    links: [
      {
        label: "Project PPT",
        href: "https://docs.google.com/presentation/d/15wXnh5UVkWPwUsHwB2u0RmH23juKYsHh/edit?usp=sharing&ouid=104149268647212962022&rtpof=true&sd=true",
      },
    ],
    accent: "from-blue-500/35 via-cyan-400/15 to-slate-400/20",
  },
  {
    title: "Solar-Powered Hybrid Vehicle",
    description:
      "A sustainable mobility concept using solar panels and grid-rechargeable batteries, supported by a battery management approach for efficient energy storage and reduced fossil-fuel dependency.",
    stack: ["C++", "Renewable Energy", "Battery Management", "Electric Vehicles"],
    links: [],
    accent: "from-cyan-500/30 via-blue-400/15 to-slate-500/20",
  },
  {
    title: "LiFi Communication System Simulation",
    description:
      "A Simulink-based communication project that models high-speed wireless data transmission using visible light, with analysis of transmitter and receiver behavior.",
    stack: ["Simulink", "LiFi", "Wireless Communication", "Signal Processing"],
    links: [
      {
        label: "Project Report",
        href: "https://docs.google.com/document/d/1bkizk8RC2867jrnp_Q0Jmvni4ulsTz8b/edit?usp=sharing&ouid=104149268647212962022&rtpof=true&sd=true",
      },
    ],
    accent: "from-blue-600/35 via-sky-400/15 to-cyan-400/20",
  },
  {
    title: "AI Internship Practice Work",
    description:
      "Completed a one-month online Artificial Intelligence internship, learning machine learning basics, data processing techniques, and Python-based practical problem solving.",
    stack: ["Python", "AI Basics", "Machine Learning", "Data Processing"],
    links: [],
    accent: "from-sky-500/30 via-blue-500/15 to-cyan-500/20",
  },
  {
    title: "SWE Ayush Website",
    description:
      "A professional website for SWE Ayush with responsive pages, clear service presentation, and simple navigation for visitors.",
    stack: ["Website", "Responsive Design", "UI/UX", "Frontend"],
    links: [
      {
        label: "Live Website",
        href: "https://sweayush.com",
      },
    ],
    accent: "from-blue-400/30 via-cyan-400/15 to-slate-400/20",
  },
  {
    title: "DCDC SRMIST Website",
    description:
      "A public-facing website for the Digital Communication and Design Club at SRMIST, built to highlight community activity, events, and resources.",
    stack: ["Website", "Community Platform", "Responsive Design", "Content"],
    links: [
      {
        label: "Live Website",
        href: "https://dcdcsrmist.in",
      },
    ],
    accent: "from-cyan-500/30 via-blue-400/15 to-slate-500/20",
  },
];

export const achievements = [
  {
    title: "Industry Experience",
    icon: FiTarget,
    points: [
      "Electronics Manufacturing Intern at Infocus Electronics Technology, Chennai in Jul 2025.",
      "Artificial Intelligence Intern at NoviTech R&D Private Limited from Jun 2025 to Jul 2025.",
      "Web Developer Intern at Beau Roi Technologies Private Limited, Chennai from Jun 2025 to Oct 2025.",
      "Vocational inplant trainee at Chennai Port Authority in Dec 2025.",
    ],
  },
  {
    title: "Awards",
    icon: FiAward,
    points: [
      "First Prize from the Digital Communication and Design Club, SRMIST in Oct 2025.",
      "Second Prize in ELECTRANOVA conducted by IETE - ECE Department, SRMIST in Oct 2024.",
      "Best Paper for Dynamic Bus Load Control and Safety System at ITDECC 2025.",
      "Third Prize at SaRaM Project Expo 2025 for Dynamic Bus Load Detector under Industry 4.0.",
      "Second Prize in Tech Talk at TINKATHON 2025.",
    ],
  },
  {
    title: "Certifications & Hackathons",
    icon: FiZap,
    points: [
      "Leadership certificate from Lions Club International in Aug 2024.",
      "Participated in a national-level Generative AI hackathon at KPR Institute of Engineering and Technology in Oct 2024.",
      "Participated in TECHNO-A-THON 2025, a 24-hour national-level hackathon at St. Joseph's College of Engineering.",
    ],
  },
  {
    title: "Leadership & Volunteering",
    icon: FiBookOpen,
    points: [
      "President of the Digital Communication and Design Club from Jul 2025 to May 2026.",
      "Treasurer of Leo Club of Sterling Society from Sept 2023 to Jul 2025.",
      "Student Co-Ordinator for National Service Scheme from Aug 2024 to Jul 2025.",
      "Completed STM32 workshop at SRMIST with hands-on microcontroller programming exposure.",
    ],
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:mounishan01@gmail.com" },
  { label: "Phone", href: "tel:9655082924" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mounishan/" },
  { label: "GitHub", href: "https://github.com/mouni01-m" },
];
