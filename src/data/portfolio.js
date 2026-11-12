// All page content lives here. Edit this file, not the components.

export const profile = {
  name: "Yash Vardhan Singh",
  location: "Greater Noida, India",
  email: "yashvardhansingh234679@gmail.com",
  phone: "+91 9305125469",
  phoneHref: "tel:+919305125469",
  resume: "/resume-2026.pdf",
};

export const links = {
  github: "https://github.com/Yashsingh0607",
  linkedin: "https://www.linkedin.com/in/yash-vardhan-singh-49a6903b0",
  codolio: "https://codolio.com/profile/yash_singh",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "coding", label: "Coding" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const highlights = [
  { value: "1000+", label: "Problems solved" },
  { value: "2", label: "Projects built" },
  { value: "4", label: "NPTEL certificates" },
  { value: "SIH '26", label: "Team lead" },
];

export const journey = [
  { when: "2024", title: "Began B.Tech in Information Technology", detail: "GL Bajaj Institute of Technology and Management, Greater Noida." },
  { when: "Jan–Apr 2025", title: "Programming in Java", detail: "NPTEL, IIT Kharagpur. Elite certificate." },
  { when: "Jul–Oct 2025", title: "Data Structures and Algorithms using Java", detail: "NPTEL, IIT Kharagpur." },
  { when: "Jan–Apr 2026", title: "Cryptography and Network Security", detail: "NPTEL, IIT Kharagpur. Elite certificate." },
  { when: "Mar 2026", title: "Built Secure File Encrypter", detail: "A Java command-line tool using AES-CBC and PBKDF2." },
  { when: "2026", title: "Led a team at Smart India Hackathon", detail: "Smart India Hackathon 2026." },
  { when: "Jul–Oct 2026", title: "Introduction to Machine Learning", detail: "NPTEL, IIT Madras." },
  { when: "Sep 2026", title: "Built ResolveAI", detail: "A Next.js support-ticket dashboard with an AI copilot." },
  { when: "Now", title: "Always learning something new", detail: "Sharpening DSA, going deeper into security and full-stack, and shaping the next build." },
];

export const projects = [
  {
    name: "ResolveAI",
    date: "September 2026",
    summary: "A support-ticket dashboard with an AI copilot.",
    description:
      "A Next.js app for handling customer support tickets. It has a landing page, pricing tiers and an AI chat assistant that answers product FAQs. The dashboard tracks open, in-progress and resolved tickets with live metrics, and a copilot drawer shows a confidence score and step-by-step guidance for each ticket. Resolving a ticket updates the whole screen at once.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "React Hooks"],
    features: [
      { icon: "chat", text: "AI chat assistant for product FAQs" },
      { icon: "ticket", text: "Ticket dashboard with live metrics" },
      { icon: "brain", text: "AI copilot with confidence scores" },
      { icon: "workflow", text: "One-click resolve, live UI update" },
    ],
    source: "https://github.com/Yashsingh0607/resolveai",
  },
  {
    name: "Secure File Encrypter",
    date: "March 2026",
    summary: "A Java command-line tool that encrypts and decrypts files.",
    description:
      "Encrypts files with AES in CBC mode. The key comes from your password through PBKDF2 with 65,536+ iterations, and every file gets its own salt and IV. The output stores the salt, IV and ciphertext together, so a file can be decrypted with only the password. It validates input and has three commands: encrypt, decrypt and help.",
    stack: ["Java", "AES-CBC", "PBKDF2"],
    features: [
      { icon: "lock", text: "AES file encryption in CBC mode" },
      { icon: "key", text: "PBKDF2 key derivation, 65,536+ rounds" },
      { icon: "file", text: "Unique salt and IV for every file" },
      { icon: "shield", text: "Input validation and 3 CLI commands" },
    ],
    source: "https://github.com/Yashsingh0607/SecureFileEncrypter",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "SQL", "TypeScript", "JavaScript"] },
  { group: "Web", items: ["Next.js", "React", "Tailwind CSS", "React Hooks", "REST APIs"] },
  {
    group: "Core CS",
    items: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  { group: "Security", items: ["Cryptography", "AES", "PBKDF2"] },
  { group: "Tools", items: ["Git", "GitHub", "Linux terminal", "VS Code"] },
];

// Keep these in sync with your live profiles.
export const coding = {
  intro: "Problem solving is a discipline I keep sharpening, mostly in Java.",
  solved: "1000+ problems solved across platforms",
  platforms: [
    { name: "Codeforces", figure: "1430", detail: "rating", href: "https://codeforces.com/profile/yashvardhansingh" },
    { name: "CodeChef", figure: "1421", detail: "rating", href: "https://www.codechef.com/users/Yashsingh0607" },
    { name: "LeetCode", figure: "1583", detail: "contest rating", href: "https://leetcode.com/u/Yashvardhansingh234679/" },
  ],
};

export const certificates = [
  { title: "Programming in Java", issuer: "NPTEL, IIT Kharagpur", term: "Jan–Apr 2025", note: "Elite", image: "/certificates/java.png", pdf: "/certificates/java.pdf" },
  { title: "Data Structure and Algorithms using Java", issuer: "NPTEL, IIT Kharagpur", term: "Jul–Oct 2025", image: "/certificates/dsa.png", pdf: "/certificates/dsa.pdf" },
  { title: "Cryptography and Network Security", issuer: "NPTEL, IIT Kharagpur", term: "Jan–Apr 2026", note: "Elite", image: "/certificates/crypto.png", pdf: "/certificates/crypto.pdf" },
  { title: "Introduction to Machine Learning", issuer: "NPTEL, IIT Madras", term: "Jul–Oct 2026", image: "/certificates/introtoml.png", pdf: "/certificates/introtoml.pdf" },
];
