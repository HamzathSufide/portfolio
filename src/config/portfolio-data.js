// ============================================================================
// PORTFOLIO CONFIGURATION DATA - HAMZATH SUFIDE P S
// All profile details, projects, video URLs, awards, and skills are organized here
// to allow easy modification and content additions.
// ============================================================================

export const personalInfo = {
  name: "HAMZATH SUFIDE P S",
  shortName: "HAMZATH",
  title: "Software Engineer | Java Backend Developer | Technology Presenter | Project & Business Enthusiast",
  heroSubtitle: "Software Engineer | Java Backend Developer | Technology Presenter | Project & Business Enthusiast",
  bio: "I build scalable software solutions, communicate technology with clarity, and bring together engineering, project execution, presentation, and business thinking.",
  status: "🟢 Open to Software Engineering & Tech Opportunities",
  location: "Kerala / India",
  email: "hamzathsufide00@gmail.com",
  phone: "9645621204",
  whatsapp: "https://wa.me/919645621204",
  avatarUrl: "/avatar.png",
  brandQuote: "I don't want to be limited to writing code. I want to build solutions, understand business, communicate ideas, lead execution, and create meaningful impact.",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/hamzath-sufide-p-s/",
  github: "https://github.com/hamzathsufide", // Easily customizable
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  whatsapp: "https://wa.me/919645621204",
};

export const aboutDimensions = [
  {
    id: "engineering",
    title: "Engineering",
    icon: "Code2",
    badge: "Core Expertise",
    color: "#D90429",
    description: "Robust Java backend development with enterprise architecture, secure APIs, and database engineering.",
    skills: [
      "Java Backend Development",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Database Development",
      "Cloud Infrastructure",
      "Security Protocols",
      "Automated Testing"
    ]
  },
  {
    id: "project",
    title: "Project & Execution",
    icon: "Kanban",
    badge: "Agile & Delivery",
    color: "#EF233C",
    description: "End-to-end software delivery lifecycle management using Agile/Scrum, Kanban, and cross-functional team coordination.",
    skills: [
      "Agile/Scrum & Kanban",
      "TDD & DDD",
      "JIRA & Trello Workflow",
      "Team Collaboration",
      "Project Coordination",
      "Software Delivery Lifecycle",
      "Requirement Analysis",
      "Sprint Execution"
    ]
  },
  {
    id: "communication",
    title: "Communication",
    icon: "Presentation",
    badge: "Tech Storytelling",
    color: "#D90429",
    description: "Translating complex technical concepts into clear, engaging explanations for engineers, clients, and stakeholders.",
    skills: [
      "Technology Presentation",
      "Video Presentation",
      "Public Speaking",
      "Technical Explanation",
      "Team & Stakeholder Communication",
      "Product Demos"
    ]
  },
  {
    id: "business",
    title: "Business",
    icon: "TrendingUp",
    badge: "Value Focus",
    color: "#EF233C",
    description: "Connecting software products to real-world customer needs, digital marketing strategies, and revenue growth.",
    skills: [
      "Sales Knowledge",
      "Marketing Knowledge",
      "Customer Needs Analysis",
      "Product Value Proposition",
      "Business Communication",
      "Lead Generation Concepts"
    ]
  },
  {
    id: "creative",
    title: "Creative",
    icon: "Video",
    badge: "Content Creation",
    color: "#D90429",
    description: "Creative visual storytelling through video production, slide design, and technology content creation.",
    skills: [
      "Video Presentation",
      "Content Creation",
      "Presentation Design",
      "Technology Storytelling",
      "Digital Media Creation"
    ]
  }
];

export const experience = [
  {
    company: "South Indian Bank via IT Developer Zone",
    role: "Software Engineer",
    period: "September 2025 – Present",
    type: "Full-Time",
    location: "Enterprise Banking Domain",
    badge: "Current Role",
    summary: "Developing and maintaining enterprise-grade Java backend solutions and high-availability banking API services.",
    responsibilities: [
      "Developing and maintaining enterprise-grade Java applications for banking operations.",
      "Building scalable RESTful APIs utilizing Spring Boot framework.",
      "Implementing dynamic frontend integrations with Thymeleaf, Ajax, and JavaScript.",
      "Managing optimized Oracle Database schemas, stored procedures, and high-performance queries.",
      "Collaborating with enterprise cross-functional teams across QA, Security, and DevOps."
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Thymeleaf", "Ajax", "JavaScript", "Oracle DB", "GraphQL"]
  },
  {
    company: "Aitrich Technologies",
    role: "Java Developer",
    period: "January 2023 – April 2025",
    type: "Full-Time",
    location: "Kochi, India",
    badge: "Featured Experience",
    summary: "Delivered backend microservices, database models, and optimized web application APIs in Agile environments.",
    responsibilities: [
      "Designed and implemented backend modules using Java, Spring Boot, and Hibernate ORM.",
      "Created secure REST APIs and handled database persistence layer design.",
      "Participated actively in daily Scrum stand-ups, sprint planning, and retrospectives.",
      "Conducted thorough unit testing, debugging, and code performance optimization.",
      "Collaborated closely with QA automation and DevOps teams to ensure seamless deployment."
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Agile/Scrum", "JUnit", "SQL Optimization"]
  }
];

export const projects = [
  {
    id: "salesnrich",
    title: "SalesNrich – Sales Acceleration CRM",
    category: "Enterprise CRM Platform",
    featured: true,
    highlightBadge: "Major Professional Project",
    summary: "Cloud-based CRM platform designed to accelerate sales, streamline operations, and enhance customer lifecycle management.",
    myContribution: "Spearheaded backend architecture development, REST API design, PostgreSQL data modeling, and seamless full-stack integration.",
    features: [
      "Real-time sales tracking & automated pipeline visualization",
      "High-throughput REST API backend built on Spring Boot",
      "PostgreSQL relational data design for fast query execution",
      "Smooth interactive UI integration with custom JavaScript and CSS",
      "Cloud infrastructure deployment readiness"
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "HTML", "CSS", "JavaScript", "Cloud"],
    githubUrl: "https://github.com/hamzathsufide",
    demoUrl: "#"
  },
  {
    id: "crm-lead-mgmt",
    title: "CRM – Lead Management System",
    category: "Business Operations System",
    featured: true,
    highlightBadge: "Core Java & Security",
    summary: "Comprehensive lead tracking system managing customer conversion pipelines with secure role-based controls.",
    myContribution: "Designed secure API endpoints, relational database schema, and third-party integration pipelines.",
    features: [
      "Secure REST APIs with JWT role-based access control",
      "Spring Boot backend layered with DTO pattern and clean service architecture",
      "PostgreSQL database integration with custom data validation",
      "Third-party webhook & API integrations for automated lead capture",
      "Comprehensive error handling and audit logging"
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Security", "DTO Pattern"],
    githubUrl: "https://github.com/hamzathsufide",
    demoUrl: "#"
  },
  {
    id: "quizapp",
    title: "QuizApp",
    category: "Interactive Platform",
    featured: false,
    highlightBadge: "Full Security Suite",
    summary: "Interactive quiz platform supporting admin question management, timed quiz sessions, and user score analytics.",
    myContribution: "Implemented authentication flow with Spring Security & JWT, along with score calculation logic.",
    features: [
      "Admin portal for creating, updating, and categorizing quiz modules",
      "JWT-based user registration and stateless session management",
      "Real-time quiz evaluation engine and result analytics",
      "PostgreSQL database persistent storage for quiz history"
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/hamzathsufide",
    demoUrl: "#"
  },
  {
    id: "library-mgmt",
    title: "Library Management System",
    category: "Backend Architecture",
    featured: false,
    highlightBadge: "Clean Architecture",
    summary: "Layered enterprise backend system managing catalog records, member borrowing operations, and inventory tracking.",
    myContribution: "Architected repository, service, and controller layers with clean DTO mapping.",
    features: [
      "Complete CRUD operations for book inventory and user accounts",
      "Layered architecture (Controller, Service, Repository, DTOs)",
      "Automated borrowing fee and due-date tracking calculations",
      "PostgreSQL database integration with transaction isolation"
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "DTO Pattern", "JPA Repository"],
    githubUrl: "https://github.com/hamzathsufide",
    demoUrl: "#"
  }
];

export const techStack = {
  backend: {
    category: "Backend Engineering",
    icon: "Server",
    skills: [
      { name: "Java", level: "Advanced", progress: 92 },
      { name: "Spring Boot", level: "Advanced", progress: 90 },
      { name: "REST APIs", level: "Advanced", progress: 94 },
      { name: "Spring MVC", level: "Intermediate", progress: 85 },
      { name: "Hibernate / JPA", level: "Intermediate", progress: 88 },
      { name: "Microservices", level: "Intermediate", progress: 82 }
    ]
  },
  database: {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", progress: 88 },
      { name: "Oracle Database", level: "Intermediate", progress: 85 },
      { name: "MySQL", level: "Intermediate", progress: 84 },
      { name: "GraphQL", level: "Foundational", progress: 75 }
    ]
  },
  frontend: {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "HTML5 & CSS3", level: "Advanced", progress: 90 },
      { name: "JavaScript (ES6+)", level: "Intermediate", progress: 85 },
      { name: "Thymeleaf", level: "Advanced", progress: 88 },
      { name: "Ajax", level: "Advanced", progress: 86 }
    ]
  },
  security: {
    category: "Security & Auth",
    icon: "ShieldCheck",
    skills: [
      { name: "Spring Security", level: "Intermediate", progress: 85 },
      { name: "JWT Authentication", level: "Intermediate", progress: 88 },
      { name: "Keycloak", level: "Foundational", progress: 72 }
    ]
  },
  testing: {
    category: "Testing & Automation",
    icon: "CheckCircle2",
    skills: [
      { name: "JUnit 5", level: "Advanced", progress: 86 },
      { name: "Selenium WebDriver", level: "Intermediate", progress: 80 }
    ]
  },
  practices: {
    category: "Engineering Practices",
    icon: "Workflow",
    skills: [
      { name: "Agile / Scrum", level: "Advanced", progress: 92 },
      { name: "Kanban / Scrumban", level: "Advanced", progress: 90 },
      { name: "TDD (Test Driven Dev)", level: "Intermediate", progress: 82 },
      { name: "DDD (Domain Driven)", level: "Intermediate", progress: 78 }
    ]
  }
};

export const projectManagementWorkflow = [
  {
    step: "01",
    title: "Idea Generation",
    subtitle: "Problem Identification",
    desc: "Brainstorming solutions aligned with user pain points and strategic business goals."
  },
  {
    step: "02",
    title: "Requirement Gathering",
    subtitle: "Specification & Scope",
    desc: "Translating stakeholder visions into precise technical user stories and scope definitions."
  },
  {
    step: "03",
    title: "Sprint Planning",
    subtitle: "Prioritization & Estimation",
    desc: "Breaking epic requirements into estimated backlog items for agile sprint iterations."
  },
  {
    step: "04",
    title: "Development & Coding",
    subtitle: "Clean Code & Architecture",
    desc: "Building robust, scalable backend services using Java, Spring Boot, and layered design patterns."
  },
  {
    step: "05",
    title: "Testing & QA",
    subtitle: "Quality Assurance",
    desc: "Executing unit tests (JUnit) and collaborating with QA engineers to prevent regressions."
  },
  {
    step: "06",
    title: "Deployment",
    subtitle: "CI/CD & Delivery",
    desc: "Coordinating with DevOps teams for smooth environment staging and production releases."
  },
  {
    step: "07",
    title: "Feedback & Review",
    subtitle: "Sprint Retrospectives",
    desc: "Gathering stakeholder feedback and measuring system metrics to optimize future sprints."
  },
  {
    step: "08",
    title: "Continuous Improvement",
    subtitle: "Refinement & Scale",
    desc: "Refactoring code, optimizing queries, and enhancing features based on user usage data."
  }
];

export const presentationVideos = [
  {
    id: 1,
    title: "Technology Presentation – Enterprise Concepts",
    description: "Breakdown of modern software architecture, tech adoption, and developer concepts explained simply.",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DFHYWMrhMAz/?stkn=MXRzMXlqazZpNW1uNA==",
    thumbnailBg: "from-red-600 to-rose-900",
    coverImage: "/video_cover_1.png"
  },
  {
    id: 2,
    title: "Technology Presentation – Java & Microservices",
    description: "Interactive breakdown of Java backend development, API integration, and scalable engineering.",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DEZFWBZBPgW/?stkn=eGpmMWN5enU0b3pk",
    thumbnailBg: "from-slate-900 to-red-950",
    coverImage: "/video_cover_2.png"
  },
  {
    id: 3,
    title: "Technology Presentation – Product & Tech Storytelling",
    description: "Bridging complex technical solutions with clear visual presentation and listener engagement.",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DDgmlBvB7XV/?stkn=Z2p6OWtsZ2R2a3pm",
    thumbnailBg: "from-red-900 to-zinc-900",
    coverImage: "/video_cover_3.png"
  },
  {
    id: 4,
    title: "Technology Presentation – Tech & Communication",
    description: "Exploring the critical link between developer logic, effective team presentation, and impact.",
    platform: "Instagram",
    url: "https://www.instagram.com/reel/DXTQ4EbEeKQ/?stkn=NXg1YnppM2h3NGJ3",
    thumbnailBg: "from-rose-800 to-neutral-900",
    coverImage: "/video_cover_4.png"
  }
];

export const businessPipeline = [
  {
    step: "01",
    label: "Technology",
    sub: "Java & Spring Boot Engine",
    desc: "Building rock-solid, secure, and scalable backend infrastructure."
  },
  {
    step: "02",
    label: "Product",
    sub: "Feature Rich CRM / SaaS",
    desc: "Transforming backend services into user-centered digital applications."
  },
  {
    step: "03",
    label: "Presentation",
    sub: "Clear Tech Communication",
    desc: "Demonstrating system value visually and convincingly to stakeholders."
  },
  {
    step: "04",
    label: "Customer",
    sub: "User Needs & Adoption",
    desc: "Listening to client feedback to solve real business pain points."
  },
  {
    step: "05",
    label: "Business Value",
    sub: "Revenue & Market Acceleration",
    desc: "Delivering measurable return on investment, operational efficiency, and growth."
  }
];

export const versatilityCapabilities = [
  { number: "01", title: "Software Engineering", subtitle: "Core Discipline", desc: "Building scalable enterprise applications with clean code architecture." },
  { number: "02", title: "Backend Development", subtitle: "Core Focus", desc: "Java, Spring Boot, REST APIs, Microservices, and Relational Databases." },
  { number: "03", title: "Project Execution", subtitle: "Agile & Delivery", desc: "Sprint planning, Kanban coordination, and software release tracking." },
  { number: "04", title: "Technology Presentation", subtitle: "Communication", desc: "Public speaking and technical explanations for diverse audiences." },
  { number: "05", title: "Video Presentation", subtitle: "Creative Media", desc: "Crafting engaging tech video content and visual storytelling reels." },
  { number: "06", title: "Sales & Marketing", subtitle: "Business Mindset", desc: "Understanding product positioning, customer funnels, and value creation." },
  { number: "07", title: "Leadership", subtitle: "People & Process", desc: "Guiding collaborative execution with adaptability and high standards." },
  { number: "08", title: "Problem Solving", subtitle: "Analytical Thinking", desc: "Debugging complex backend issues and optimizing database queries." },
  { number: "09", title: "Communication", subtitle: "Cross-Functional", desc: "Seamless interaction across QA, DevOps, Management, and Clients." },
  { number: "10", title: "Continuous Learning", subtitle: "Growth Orientation", desc: "Constantly mastering new tools, frameworks, and business paradigms." }
];

export const featuredAward = {
  title: "Versatility and Leadership Excellence Award",
  organization: "Aitrich Technologies",
  period: "Performance Year 2023",
  badge: "🏆 Prestigious Recognition",
  highlights: [
    "Recognized for exceptional leadership and cross-functional team guidance.",
    "Demonstrated outstanding technical adaptability across changing project demands.",
    "Driven by continuous innovation in Java backend development and workflow optimization.",
    "Maintained a track record of consistent high performance and software delivery excellence."
  ]
};

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Anna University",
  campus: "Udaya School of Engineering, Nagercoil",
  cgpa: "6.47",
  focus: "Computer Science & Engineering fundamentals, Data Structures, Algorithms, Software Engineering."
};

export const certifications = [
  {
    title: "Core Java Certification",
    issuer: "INET Solutions, Kochi",
    focus: "Object-Oriented Programming, Multithreading, Collections, JVM Architecture"
  },
  {
    title: "Software Testing Certification",
    issuer: "INET Solutions, Kochi",
    focus: "Manual & Automated Testing Methodologies, Test Cases, Bug Tracking"
  },
  {
    title: "React Native Certification",
    issuer: "Inmakes Infotech, Kochi",
    focus: "Mobile Application Development, Cross-Platform Components, State Management"
  }
];

export const languages = [
  { name: "English", level: "Proficient / Fluent", tag: "Professional Communication", percentage: 95 },
  { name: "Malayalam", level: "Native Language", tag: "Mother Tongue", percentage: 100 },
  { name: "Tamil", level: "Can Speak", tag: "Conversational", percentage: 80 }
];
