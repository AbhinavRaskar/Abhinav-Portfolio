export const profile = {
  name: "Abhinav Raskar",
  role: "Full Stack Developer | MERN Stack | Generative AI",
  location: "Pune, Maharashtra, India",
  email: "abhinavraskar2@gmail.com",
  github: "https://github.com/AbhinavRaskar",
  linkedin: "https://www.linkedin.com/in/abhinavraskar/",
  resume: "/resume.pdf",
  summary: "Full Stack Developer with experience building and deploying MERN applications and AI-powered SaaS products. Skilled in JavaScript, React.js, Node.js, Express.js, MongoDB, RESTful APIs, JWT authentication, and Generative AI/LLM API integration."
};

export const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"] },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  { title: "AI & LLMs", items: ["Gemini API", "Groq API", "LLM integration", "Prompt engineering"] },
  { title: "Tools & Deployment", items: ["Git", "GitHub", "Postman", "Vercel", "Render"] }
];

export const projects = [
  {
    name: "InvoiceGenius",
    category: "AI SaaS · Invoice Management",
    description: "A deployed invoice-management SaaS supporting invoice creation, payment tracking, and PDF export.",
    features: ["Invoice creation and payment tracking", "PDF export", "Clerk authentication", "User-based data isolation"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Groq API"],
    github: "https://github.com/AbhinavRaskar/AI_invoice_generator-SAAS",
    demo: "https://ai-invoice-generator-saas.vercel.app/",
    status: "Live demo"
  },
  {
    name: "AI Mock Interview",
    category: "AI · Interview Preparation",
    description: "A full-stack AI interview simulator that generates role- and difficulty-specific questions and supports voice-based interview practice.",
    features: ["Gemini-generated questions", "Voice interview with speech-to-text and text-to-speech", "Resume parsing", "JWT authentication and interview history"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini", "AssemblyAI", "Murf AI"],
    github: "https://github.com/AbhinavRaskar/AI-Mock-Interview",
    demo: "https://ai-mock-interview-platform-self.vercel.app/",
    status: "Live demo"
  },
  {
    name: "AI Resume Builder",
    category: "AI · Career Tools",
    description: "A resume-building experience focused on helping candidates create and preview professional resumes.",
    features: ["Resume creation", "Resume preview", "Career-focused workflow"],
    stack: ["React", "JavaScript", "AI APIs"],
    github: "https://github.com/AbhinavRaskar/ai_resume_builder",
    demo: "https://ai-resume-builder-pearl-nine.vercel.app/",
    status: "Live demo"
  },
  {
    name: "AI Resume ATS Analyzer",
    category: "AI · Resume Analysis",
    description: "A project for exploring resume analysis and ATS-oriented feedback.",
    features: ["Resume analysis workflow", "AI-assisted feedback"],
    stack: ["JavaScript", "React", "AI APIs"],
    github: "https://github.com/AbhinavRaskar/AI_Resume_ATS_Analyzer",
    demo: "",
    status: "Repository"
  }
];

// Keep this section truthful. Add verified dates and responsibilities before publishing.
export const experience = [
  {
    type: "Internship",
    title: "MERN Stack Intern",
    organization: "Bitmap Technology · Remote",
    period: "Jan 2026 – Apr 2026",
    description: "Built 7+ reusable React components, integrated frontend features with backend REST APIs, and resolved responsive UI issues across browsers and screen sizes."
  },
  {
    type: "Internship",
    title: "Web Development Intern",
    organization: "Veracity · Remote",
    period: "Jan 2025 – Feb 2025",
    description: "Improved page-load performance through lazy loading, code splitting, and image optimization; built responsive UI components and resolved production bugs."
  },
  {
    type: "Education",
    title: "BE Computer Engineering",
    organization: "Savitribai Phule Pune University",
    period: "Nov 2022 – Jun 2026",
    description: "CGPA: 8.14 / 10.00"
  },
  {
    type: "Achievement",
    title: "NPTEL Elite Certification in DBMS",
    organization: "NPTEL",
    period: "Score: 77% · Top 5% of certified candidates",
    description: "Earned an Elite certification in Database Management Systems."
  }
];
