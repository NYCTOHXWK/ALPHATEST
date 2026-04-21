export const siteStats = [
  { label: "Education", value: "B.Tech CSE (AI & ML)" },
  { label: "Internships", value: "2 Industry Roles" },
  { label: "Certifications", value: "9 Verified Credentials" }
];

export type SiteProject = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  stack: string;
  details: string[];
  image: string;
  projectUrl?: string;
  technicalOverview: string;
  architecture: string[];
  keyModules: string[];
  challenges: string[];
  outcomes: string[];
  tools: { name: string; image: string }[];
};

export const siteProjects: SiteProject[] = [
  {
    slug: "findoc",
    category: "Finance",
    title: "FinDoc",
    summary:
      "Built in collaboration with Satya Sai Associates, Rewari for HDFC Bank DSA to support document-driven finance workflows.",
    stack: "Next.js, dashboard UI, document lifecycle tracking, role-based workflows",
    details: [
      "Collaborated with an external team to align requirements and delivery.",
      "Focused on reliable handling of finance-related process data.",
      "Structured the solution to support day-to-day operational use."
    ],
    image: "https://source.unsplash.com/1200x675/?human,finance,office",
    projectUrl: "https://www.hdfcbank.com/",
    technicalOverview:
      "FinDoc centralizes customer document intake, verification status, and decision checkpoints in one workflow panel. The system design focused on reducing process latency from document collection to loan-file readiness.",
    architecture: [
      "Frontend dashboard for case creation, queue views, and status labels.",
      "Validation layer for mandatory KYC/financial document sets.",
      "Audit timeline for every action and reviewer handoff."
    ],
    keyModules: [
      "Document checklist engine with completion scoring.",
      "Case pipeline tracker (submitted → verified → approved).",
      "Role-aware review screens for operations users."
    ],
    challenges: [
      "Normalizing different document types from multiple branches.",
      "Preventing missing-field errors during handoffs."
    ],
    outcomes: [
      "Improved visibility of pending files and bottlenecks.",
      "Created a repeatable process baseline for operations teams."
    ],
    tools: [
      { name: "Next.js", image: "/tools/nextjs.svg" },
      { name: "Workflow Engine", image: "/tools/workflow.svg" },
      { name: "Analytics Panel", image: "/tools/analytics.svg" }
    ]
  },
  {
    slug: "motovolt",
    category: "EV Systems",
    title: "MotoVolt",
    summary:
      "Developed an EV conversion project where a petrol bike was converted into a fully electric vehicle.",
    stack: "BLDC motor integration, battery pack design, BMS, controller tuning",
    details: [
      "Worked on component-level planning for conversion feasibility.",
      "Integrated electrical subsystems for practical operation.",
      "Validated the converted setup through hands-on testing."
    ],
    image: "https://source.unsplash.com/1200x675/?human,electric,bike,engineering",
    technicalOverview:
      "MotoVolt transforms a conventional bike chassis into an electric mobility platform with battery management, motor control, and safety cutoffs. The project prioritized practical road behavior and predictable power delivery.",
    architecture: [
      "Energy subsystem: battery pack + BMS + protection fuses.",
      "Propulsion subsystem: controller + BLDC motor + throttle mapping.",
      "Monitoring subsystem: voltage/current/thermal checks."
    ],
    keyModules: [
      "Battery state monitoring and low-voltage protection.",
      "Throttle response calibration for smooth acceleration.",
      "Wiring harness layout optimized for serviceability."
    ],
    challenges: [
      "Weight distribution after replacing ICE components.",
      "Thermal and load stability under repeated trials."
    ],
    outcomes: [
      "Successful functional EV conversion prototype.",
      "Improved understanding of practical conversion constraints."
    ],
    tools: [
      { name: "BLDC Motor", image: "/tools/bldc.svg" },
      { name: "Battery BMS", image: "/tools/bms.svg" },
      { name: "Motor Controller", image: "/tools/controller.svg" }
    ]
  },
  {
    slug: "arduino-drone",
    category: "IoT & Robotics",
    title: "Arduino Based Drone",
    summary:
      "Created a drone prototype based on Arduino UNO with sensor-assisted control and testing.",
    stack: "Arduino UNO, IMU sensing, motor drivers, control loop tuning",
    details: [
      "Assembled and configured hardware for stable drone operation.",
      "Used microcontroller programming for control behavior.",
      "Iterated on design through build-test cycles."
    ],
    image: "https://source.unsplash.com/1200x675/?human,drone,technology",
    projectUrl: "https://www.arduino.cc/",
    technicalOverview:
      "The drone prototype combines an Arduino-based flight logic layer with sensor feedback to stabilize orientation during short test flights. Iterative tuning was used to improve hover reliability.",
    architecture: [
      "Sensor capture loop for acceleration/tilt values.",
      "Control computation and correction output.",
      "Motor command distribution to propeller channels."
    ],
    keyModules: [
      "Basic attitude correction algorithm.",
      "Power distribution and ESC response testing.",
      "Debug serial telemetry for calibration."
    ],
    challenges: [
      "Vibration noise affecting sensor readings.",
      "Balancing responsiveness against oscillation."
    ],
    outcomes: [
      "Achieved stable short-duration flight behavior.",
      "Produced a reusable tuning workflow for future iterations."
    ],
    tools: [
      { name: "Arduino UNO", image: "/tools/arduino.svg" },
      { name: "IMU Sensor", image: "/tools/imu.svg" },
      { name: "ESC", image: "/tools/esc.svg" }
    ]
  },
  {
    slug: "access-management-system",
    category: "Security",
    title: "Access Management System",
    summary:
      "Implemented an RFID-based access control system for secure entry management.",
    stack: "RFID readers, microcontroller logic, access logs, relay controls",
    details: [
      "Designed identity-driven entry validation workflows.",
      "Implemented RFID read and authorization handling.",
      "Focused on low-cost and practical deployment design."
    ],
    image: "https://source.unsplash.com/1200x675/?human,security,access,card",
    technicalOverview:
      "This project validates RFID cards against authorized records and triggers controlled entry actions. It emphasizes low-cost deployment while preserving clear access logs for traceability.",
    architecture: [
      "RFID scan interface with card UID parsing.",
      "Authorization rules mapped to stored identifiers.",
      "Actuator/relay layer for lock control."
    ],
    keyModules: [
      "Card enrollment and revocation flow.",
      "Access event log stream.",
      "Denied-attempt handling and alert logic."
    ],
    challenges: [
      "Handling duplicate or invalid card states cleanly.",
      "Maintaining quick response time for entry points."
    ],
    outcomes: [
      "Delivered a functional prototype for secure entry scenarios.",
      "Improved reliability of identity-based gate control."
    ],
    tools: [
      { name: "RFID Reader", image: "/tools/rfid.svg" },
      { name: "Relay Module", image: "/tools/relay.svg" },
      { name: "Access Logs", image: "/tools/logs.svg" }
    ]
  },
  {
    slug: "student-management-system",
    category: "Education Tech",
    title: "S.M.S (Student Management System)",
    summary:
      "Built a Student Management System using Python to organize core student records and operations.",
    stack: "Python, CRUD workflows, record indexing, validation rules",
    details: [
      "Developed core modules for student information handling.",
      "Implemented data entry and retrieval flows.",
      "Designed for clarity and ease of use in academic settings."
    ],
    image: "https://source.unsplash.com/1200x675/?human,student,computer,education",
    technicalOverview:
      "The system manages student profiles, enrollment data, and record retrieval with a clean Python-driven workflow. It was designed for straightforward daily academic administration.",
    architecture: [
      "Input/validation layer for student record creation.",
      "Storage abstraction for structured data operations.",
      "Reporting and retrieval views for administrative use."
    ],
    keyModules: [
      "Student profile CRUD operations.",
      "Search and filter by roll/class/session.",
      "Basic report outputs for admin checks."
    ],
    challenges: [
      "Maintaining data consistency across edits/deletes.",
      "Designing simple UX for non-technical users."
    ],
    outcomes: [
      "Reduced manual overhead in student record handling.",
      "Established a clean base for future attendance/exam modules."
    ],
    tools: [
      { name: "Python", image: "/tools/python.svg" },
      { name: "SQLite", image: "/tools/sqlite.svg" },
      { name: "CRUD API", image: "/tools/crud.svg" }
    ]
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

export function getProjectBySlug(slug: string) {
  return siteProjects.find((project) => project.slug === slug);
}
