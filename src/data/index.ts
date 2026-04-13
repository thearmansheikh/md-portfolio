export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/thearmansheikh",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/thearmansheikh",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:thearmansheikh.co@gmail.com",
    icon: "mail",
  },
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  backend: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
  design: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
  tools: ["Git", "VS Code", "Vercel", "Docker", "Linux"],
};

export const PROJECTS = [
  {
    title: "PostFlow AI",
    description: "An AI-powered social media content tool for scheduling and generating posts. Built for creators and small businesses who want to streamline their content workflow.",
    tags: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    image: "/projects/postflow.png",
    github: "https://github.com/Arman14k",
    live: "https://postflowai.com",
  },
  {
    title: "MD Translator",
    description: "A free, clean, distraction-free multi-language translation tool for quick and accurate translations across multiple languages.",
    tags: ["React", "TypeScript", "Translation API", "Tailwind CSS"],
    image: "/projects/translator.png",
    github: "https://github.com/Arman14k",
    live: "https://md-translator.com",
  },
  {
    title: "Luminous Fashion Accessories",
    description: "Handmade fashion accessories crafted in Nepal — celebrating artisan-made pieces with a unique, cultural identity.",
    tags: ["E-Commerce", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/projects/luminous.png",
    github: "https://github.com/Arman14k",
    live: "https://luminousfashionaccessories.com",
  },
  {
    title: "New Look Footwear",
    description: "Premium footwear sourced from Nepal — an e-commerce store bringing quality Nepali craftsmanship to customers worldwide.",
    tags: ["E-Commerce", "React", "Node.js", "MongoDB"],
    image: "/projects/newlook.png",
    github: "https://github.com/Arman14k",
    live: "https://newlookfootwear.com",
  },
  {
    title: "thearmansheikh.co",
    description: "Personal portfolio website built with Next.js, featuring a dark-themed design with smooth animations and a contact form.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/Arman14k",
    live: "https://thearmansheikh.co",
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 – Present",
    description:
      "Building end-to-end web applications for clients — from e-commerce stores to AI-powered tools. Working with Next.js, React, Node.js, and modern cloud infrastructure.",
    highlights: [
      "Delivered 5+ production projects for international clients",
      "Built PostFlow AI — an AI-powered social media scheduling tool",
      "Developed e-commerce platforms with Stripe integration",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Self-directed Projects",
    period: "2022 – 2023",
    description:
      "Focused on mastering React, TypeScript, and modern CSS. Built a portfolio of personal projects to strengthen UI/UX skills and responsive design.",
    highlights: [
      "Created MD Translator — a multi-language translation tool",
      "Designed and launched personal portfolio website",
      "Explored Framer Motion for advanced UI animations",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "Tribhuvan University",
    period: "2020 – 2024",
    description:
      "Studied computer science fundamentals — algorithms, data structures, web development, and software engineering principles.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Luminous Fashion",
    text: "Arman delivered our e-commerce site ahead of schedule and with incredible attention to detail. The site looks beautiful and our sales have doubled since launch.",
  },
  {
    name: "James Carter",
    role: "Content Creator",
    text: "PostFlow AI has completely transformed how I manage my social media. Arman understood exactly what I needed and built something even better than I imagined.",
  },
  {
    name: "David Thompson",
    role: "Tech Lead, StartupXYZ",
    text: "Working with Arman was a great experience. He's a fast learner, writes clean code, and has a real eye for design. Highly recommend for any full-stack project.",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building an AI-Powered Social Media Scheduler",
    excerpt: "How I built PostFlow AI from scratch — the architecture, AI integration, and lessons learned along the way.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["AI", "Next.js", "Case Study"],
    slug: "#",
  },
  {
    title: "Why I Chose Next.js Over Plain React",
    excerpt: "A deep dive into SSR, SSG, and how Next.js changed my workflow as a full-stack developer.",
    date: "2024-11-20",
    readTime: "5 min read",
    tags: ["React", "Next.js", "Web Dev"],
    slug: "#",
  },
  {
    title: "E-Commerce for Nepali Artisans",
    excerpt: "The story behind building Luminous Fashion — bringing handmade Nepali products to a global audience.",
    date: "2024-09-08",
    readTime: "6 min read",
    tags: ["E-Commerce", "Stripe", "Design"],
    slug: "#",
  },
];
