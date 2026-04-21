export const siteStats = [
  { label: "Education", value: "B.Tech CSE (AI & ML)" },
  { label: "Internships", value: "2 Industry Roles" },
  { label: "Certifications", value: "9 Verified Credentials" }
];

export type SiteProject = {
  category: string;
  title: string;
  summary: string;
  stack: string;
  details: string[];
  image: string;
  projectUrl?: string;
};

export const siteProjects: SiteProject[] = [
  {
    category: "Finance",
    title: "FinDoc",
    summary:
      "Built in collaboration with Satya Sai Associates, Rewari for HDFC Bank DSA to support document-driven finance workflows.",
    stack: "Web application development, documentation workflows",
    details: [
      "Collaborated with an external team to align requirements and delivery.",
      "Focused on reliable handling of finance-related process data.",
      "Structured the solution to support day-to-day operational use."
    ],
    image: "/projects/findoc.svg",
    projectUrl: "https://www.hdfcbank.com/"
  },
  {
    category: "EV Systems",
    title: "MotoVolt",
    summary:
      "Developed an EV conversion project where a petrol bike was converted into a fully electric vehicle.",
    stack: "Embedded integration, electrical systems, prototyping",
    details: [
      "Worked on component-level planning for conversion feasibility.",
      "Integrated electrical subsystems for practical operation.",
      "Validated the converted setup through hands-on testing."
    ],
    image: "/projects/motovolt.svg"
  },
  {
    category: "IoT & Robotics",
    title: "Arduino Based Drone",
    summary:
      "Created a drone prototype based on Arduino UNO with sensor-assisted control and testing.",
    stack: "Arduino UNO, sensors, embedded prototyping",
    details: [
      "Assembled and configured hardware for stable drone operation.",
      "Used microcontroller programming for control behavior.",
      "Iterated on design through build-test cycles."
    ],
    image: "/projects/drone.svg",
    projectUrl: "https://www.arduino.cc/"
  },
  {
    category: "Security",
    title: "Access Management System",
    summary:
      "Implemented an RFID-based access control system for secure entry management.",
    stack: "RFID, Arduino/microcontroller logic, automation",
    details: [
      "Designed identity-driven entry validation workflows.",
      "Implemented RFID read and authorization handling.",
      "Focused on low-cost and practical deployment design."
    ],
    image: "/projects/access-management.svg"
  },
  {
    category: "Education Tech",
    title: "S.M.S (Student Management System)",
    summary:
      "Built a Student Management System using Python to organize core student records and operations.",
    stack: "Python, data management, application logic",
    details: [
      "Developed core modules for student information handling.",
      "Implemented data entry and retrieval flows.",
      "Designed for clarity and ease of use in academic settings."
    ],
    image: "/projects/sms.svg"
  }
];

export const education = {
  name: "K.R. Mangalam University",
  logo: "/logos/krmu.svg",
  website: "https://www.krmangalam.edu.in/",
  duration: "Aug 2023 – Jun 2027"
};

export const jobRoles = [
  {
    company: "JTEKT India Ltd.",
    role: "Industrial Intern",
    duration: "June 2025 – July 2025",
    summary: "Built a visual dashboard for defect and supply tracking with DHR-1 and manufacturing teams.",
    logo: "/logos/jtekt.svg",
    website: "https://www.jtekt.co.in/"
  },
  {
    company: "KEIC",
    role: "IoT Intern",
    duration: "July 2024 – Sept 2024",
    summary:
      "Developed IoT solutions for real-time data collection and device monitoring using Arduino, Raspberry Pi, and sensors.",
    logo: "/logos/keic.svg",
    website: "https://www.keic.in/"
  }
];
