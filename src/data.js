export const profile = {
  name: "Güneş Balcı",
  tagline: "Software Engineer",
  bio: "I love building.",
  about:
    "I am passionate about game and application development. I enjoy working with back-end technologies and web development. With a strong interest in problem-solving and algorithm design, I continuously strive to improve my skills.",
  socials: [
    { label: "GitHub", href: "https://github.com/gunesbalci", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/güneş-balcı/", icon: "linkedin" },
    { label: "Email", href: "mailto:gunesbalci@outlook.com", icon: "mail" },
  ],
};

export const workExperience = [
  {
    company: "Muğla Municipality",
    role: "Software Engineer Intern",
    period: "July 2026 - August 2026",
    description: "I developed an enterprise Document Management System using ABP Framework (C#), gaining end-to-end backend and frontend experience. Additionally, I built a Gradiobased interface incorporating PaddleOCR, Tesseract, and Unlimited models, and conducted comparative performance analyses using various metrics.",
    tags: ["Full Stack", "ABP Framework", "LINQ", "C#", "DDD", "Razor Pages", "MsSQL"],
  },
  {
    company: "Kocaeli University - STAR Lab",
    role: " B.Sc Student",
    period: "September 2023 - June 2026",
    description: "I played an active role in the lifecycle of a comprehensive web application built from scratch; together with my teammates, we designed, implemented, and deployed the entire project end-to-end.",
    tags: ["Full Stack", "HTML/CSS", "MySQL", "C#", "Javascript", "Leaflet", "Restful API"],
  },
];

export const education = [
  {
    institution: "Kocaeli University",
    detail: "Bachelor's Degree of Software Engineering",
    period: "2022 - 2026",
    href: "https://seng.kocaeli.edu.tr",
  },
  {
    institution: "Halıcı Ahmet Urkay Anatolian High School",
    period: "2017 - 2021",
  },
];

export const skills = [
  "React", "Typescript", "Node.js", "Python", "Postgres", "Java", "C++",
  "TailwindCSS", "AWS", "C#", "C", "Javascript", "HTML/CSS", "Restful API",
  "MongoDB", "MySQL", "MsSQL", "Spring", "ABP Framework", "Unity", "Git", "Trello",
  "Jira", "SQLite"
];

export const projects = [
  {
    title: "PLAYER BEHAVIOUR BASED ADAPTIVE ENEMY AI",
    description:
      "Collaborating with a project partner, I developed an adaptive game using the Unity engine and C#, featuring AI-driven dynamic updating of enemy behavior algorithms.",
    tags: ["Unity", "Python", "C#", "Machine Learning", "XGBoost"],
    links: [{ label: "Source", href: "https://github.com/Balta-Games/BitirmeOyun" }],
    icon: "swords",
  },
  {
    title: "BULGARİSTAN’DA HARİTA BAZLI YER İSİMLERİ UYGULAMASI: TÜRKÇE - BULGARCA",
    description:
      "A web application displays the historical names of Turkish towns and villages in Bulgaria.",
    tags: ["C#", "Leaflet", "MySQL", ".NET", "HTML/CSS", "Restful API", "Javascript"],
    links: [{ label: "Source", href: "https://github.com/Aramizda-Asal/Bulgarita" }],
    icon: "map",
  },
  {
    title: "“SOFTVOPER: AN IDLE GAME",
    description:
      "A idle clicker game written in Java.",
    tags: ["Java", "Swing", "Spring", "MongoDB"],
    links: [{ label: "Source", href: "https://github.com/KuroiZZ/Idle-Game" }],
    icon: "mousepointer",
  },
  {
    title: "OS-MAN: CAR RACING GAME",
    description:
      "A simple car racing game developed using the Allegro 5 framework.",
    tags: ["C", "Allegro 5"],
    links: [{ label: "Source", href: "https://github.com/gunesbalci/OS-MAN" }],
    icon: "carfront",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
