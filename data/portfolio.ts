/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — components only render what is here.
 *
 * RULE: leave a field `undefined` / `null` (or remove it) when information is
 * unverified. The UI hides missing links and values automatically.
 */

export type Project = {
  slug: string;
  title: string;
  category: "Professional Project" | "Academic Project" | "Independent Project" | "Academic / Independent Project";
  description: string;
  /** Your personal contribution. Leave undefined until verified. */
  contribution?: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Path under /public, e.g. "/images/projects/drivegenie.webp". Real screenshots only. */
  image?: string;
  imageAlt?: string;
  /** Featured projects get the large side-by-side card. */
  featured: boolean;
  /** Optional engineering write-up. Rendered as an expandable section when supplied. */
  caseStudy?: {
    problem: string;
    users?: string;
    responsibilities: string;
    approach: string;
    challenge: string;
    solution: string;
    quality?: string;
    outcome?: string;
  };
};

export type SkillGroup = { title: string; items: { name: string; note?: string }[] };

export const profile = {
  name: "Keerthana C N",
  title: "Junior Software Developer",
  location: "Bengaluru, India",
  email: "keerthanakirthiraj@outlook.com",
  github: "https://github.com/kirthi-raj-kina05",
  githubUser: "kirthi-raj-kina05",
  linkedin: "https://www.linkedin.com/in/kirthi-raj-kina",
  // No phone number is published, by design.
} as const;

export const hero = {
  label: "JUNIOR SOFTWARE DEVELOPER · BENGALURU, INDIA",
  heading: "Building responsive web experiences with Next.js.",
  summary:
    "I’m a Junior Software Developer with hands-on experience contributing to production web projects. I build responsive interfaces, reusable components and maintainable frontend experiences using Next.js, React and Tailwind CSS.",
  pills: ["Next.js", "React", "Tailwind CSS", "Java", "Python", "SQL"],
} as const;

export const about = {
  paragraphs: [
    "I’m a software developer with an academic background in computer applications and practical experience contributing to production web projects. My work focuses on responsive interfaces, reusable UI components and translating design specifications into maintainable web experiences.",
    "At Techspiration India, I have contributed to projects including DriveGenie and Velo360. Working on production websites has helped me understand the importance of implementation quality, responsive behaviour, collaboration and iterative refinement.",
    "I’m continuing to develop my software engineering skills, with an interest in reliable web applications, clean architecture, backend development and problem-solving.",
  ],
  meta: [
    { label: "role", value: "Junior Software Developer" },
    { label: "location", value: "Bengaluru, India" },
    { label: "focus", value: "Next.js · React · Tailwind CSS" },
    { label: "education", value: "MCA, 2024" },
  ],
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Responsive Design" },
    ],
  },
  { title: "Programming Languages", items: [{ name: "Java" }, { name: "Python" }] },
  { title: "Backend", items: [{ name: "Node.js", note: "basic" }] },
  {
    title: "Databases",
    items: [{ name: "SQL" }, { name: "MySQL" }, { name: "MongoDB", note: "basic" }],
  },
  { title: "Tools", items: [{ name: "Git" }, { name: "GitHub" }, { name: "Figma" }] },
  {
    title: "CS Fundamentals",
    items: [
      { name: "Object-Oriented Programming" },
      { name: "Data Structures" },
      { name: "Database Management Systems" },
      { name: "Software Development Life Cycle" },
    ],
  },
];

export const experience = {
  role: "Junior Software Developer",
  company: "Techspiration India Pvt. Ltd.",
  location: "Bengaluru, India",
  /**
   * TODO(confirm): start date is unresolved. "April 2024 – Present" was supplied earlier,
   * but it conflicts with "six months of experience". Set the confirmed value here, e.g.
   *   dates: "Month YYYY – Present"
   * While null, no dates are shown publicly.
   */
  dates: null as string | null,
  bullets: [
    "Built and maintained responsive web interfaces using Next.js and Tailwind CSS.",
    "Developed reusable UI components and page layouts.",
    "Translated Figma designs into responsive production pages.",
    "Contributed to production projects including DriveGenie and Velo360.",
    "Collaborated with team members during implementation, review and refinement.",
  ],
};

export const projects: Project[] = [
  {
    slug: "drivegenie",
    title: "DriveGenie",
    category: "Professional Project",
    description:
      "Contributed to a production web project, focusing on responsive interfaces and reusable frontend components.",
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://drivegenie.in/",
    // image: "/images/projects/drivegenie.webp",
    // imageAlt: "Screenshot of the DriveGenie homepage",
    featured: true,
  },
  {
    slug: "velo360",
    title: "Velo360",
    category: "Professional Project",
    description:
      "Contributed to a production website, applying responsive frontend development and reusable UI patterns.",
    tech: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    // TODO(confirm): pick the strongest project you can demonstrate for the third featured slot.
    slug: "secure-data-deduplication",
    title: "Secure Data Deduplication in Cloud Storage",
    category: "Academic / Independent Project",
    description: "An application focused on reducing duplicate data in a cloud-storage context.",
    tech: ["Java", "J2EE", "MySQL"],
    featured: true,
  },
  {
    slug: "iot-car-parking",
    title: "IoT Car Parking System",
    category: "Academic / Independent Project",
    description: "An IoT-oriented parking project focused on monitoring parking availability.",
    tech: ["IoT Sensors"],
    featured: false,
  },
  {
    slug: "deaf-mute-communication",
    title: "Communication System for Deaf and Mute Individuals",
    category: "Academic / Independent Project",
    description:
      "An accessibility-focused project intended to support communication for people with hearing or speech disabilities.",
    tech: ["Python"],
    featured: false,
  },
  {
    slug: "plant-selling-platform",
    title: "Online Plant Selling Platform",
    category: "Academic / Independent Project",
    description:
      "A plant-selling platform designed to present products and relevant plant-care information.",
    tech: ["E-commerce"],
    featured: false,
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "AMC Engineering College, Bengaluru",
    cgpa: "9.1",
    year: "2024",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Seshadripuram Degree College, Mysuru",
    cgpa: "8.8",
    year: "2022",
  },
];

/** TODO(confirm): exact titles, issuers and dates — especially whether AWS is an official AWS credential. */
export const certifications = [
  { title: "Java Full Stack Development", issuer: "JSpiders" },
  { title: "Python Programming", issuer: "C-DAC" },
  { title: "AWS Cloud Practitioner", issuer: "Magic Bus Foundation" },
  { title: "Full Stack Web Development", issuer: "Prinston Smart Engineers" },
  { title: "Ethical Hacking", issuer: "NPTEL" },
] as { title: string; issuer: string; date?: string; url?: string }[];

export const contact = {
  heading: "Let’s Build Something.",
  copy: "I’m interested in Junior Software Engineer and Next.js Developer opportunities where I can contribute to real products, strengthen my engineering skills and learn from an experienced team.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

/** Shown in the README checklist and in the dev-only banner. */
export const missingContent = [
  "Employment start date (data/portfolio.ts → experience.dates)",
  "Resume PDF → public/resume.pdf (button auto-appears when the file exists)",
  "Velo360 live URL and any repository URLs",
  "Real project screenshots → public/images/projects/*.webp, then set image + imageAlt",
  "Verified individual contribution for each project",
  "Case-study details for the strongest 2–3 projects",
  "Certification dates / credential links; confirm AWS entry is training vs. official certification",
  "Final deployed domain → NEXT_PUBLIC_SITE_URL",
];
