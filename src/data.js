export const profile = {
  name: "Dillion Verma",
  tagline: "Software Engineer turned Entrepreneur",
  bio: "I love building things and helping people. Very active on Twitter.",
  about:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called buildspace sf1.",
  socials: [
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
  ],
};

export const workExperience = [
  {
    company: "Magic UI",
    role: "Founder",
    period: "2023 - Present",
    description: "Designed, developed and sold animated UI components for developers.",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Stripe"],
  },
  {
    company: "Chat Collect",
    role: "Founder",
    period: "2023 - 2024",
    description: "Built a SaaS which allows users to collect email addresses from their GPT users.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
  },
  {
    company: "llm.report",
    role: "Founder",
    period: "2023 - 2024",
    description: "Open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    tags: ["Next.js", "PostgreSQL", "Cloudflare Workers", "Stripe"],
  },
  {
    company: "Automatic Chat",
    role: "Founder",
    period: "2022 - 2023",
    description: "AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS", "Stripe"],
  },
];

export const education = [
  {
    institution: "Buildspace",
    detail: "s3, s4, sf1, s5",
    period: "2023 - 2024",
    href: "https://buildspace.so",
  },
  {
    institution: "University of Waterloo",
    detail: "Bachelor's Degree of Computer Science (BCS)",
    period: "2016 - 2021",
    href: "https://uwaterloo.ca",
  },
  {
    institution: "Wilfrid Laurier University",
    detail: "Bachelor's Degree of Business Administration (BBA)",
    period: "2016 - 2021",
    href: "https://wlu.ca",
  },
  {
    institution: "International Baccalaureate",
    detail: "IB Diploma",
    period: "2012 - 2016",
    href: "https://ibo.org",
  },
];

export const skills = [
  "React", "Next.js", "Typescript", "Node.js", "Python", "Go",
  "Postgres", "Docker", "Kubernetes", "Java", "C++", "TailwindCSS",
  "Stripe", "Prisma", "AWS", "Redis",
];

export const projects = [
  {
    title: "Chat Collect",
    description:
      "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    tags: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
    links: [{ label: "Website", href: "https://chatcollect.com" }],
    icon: "message-circle",
  },
  {
    title: "Magic UI",
    description:
      "Designed, developed and sold animated UI components for developers.",
    tags: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
    links: [
      { label: "Website", href: "https://magicui.design" },
      { label: "Source", href: "https://github.com/magicuidesign/magicui" },
    ],
    icon: "sparkles",
  },
  {
    title: "llm.report",
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    tags: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"],
    links: [
      { label: "Website", href: "https://llm.report" },
      { label: "Source", href: "https://github.com/dillionverma/llm.report" },
    ],
    icon: "bar-chart",
  },
  {
    title: "Automatic Chat",
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    tags: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"],
    links: [{ label: "Website", href: "https://automatic.chat" }],
    icon: "bot",
  },
];

export const hackathons = [
  {
    title: "Hack Western 5",
    location: "London, Ontario",
    description: "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    links: [],
  },
  {
    title: "Hack The North",
    location: "Waterloo, Ontario",
    description: "Developed a mobile application which delivers university campus wide events in real time to all students.",
    links: [],
  },
  {
    title: "FirstNet Public Safety Hackathon",
    location: "San Francisco, California",
    description: "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at hospital.",
    links: [],
  },
  {
    title: "DeveloperWeek Hackathon",
    location: "San Francisco, California",
    description: "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    links: [{ label: "Github", href: "https://github.com/cryptotrends/cryptotrends" }],
  },
  {
    title: "HackDavis",
    location: "Davis, California",
    description: "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    links: [
      { label: "Devpost", href: "https://devpost.com/software/my6footprint" },
      { label: "ML", href: "https://github.com/Wallet6/my6footprint-machine-learning" },
      { label: "iOS", href: "https://github.com/Wallet6/CarbonWallet" },
      { label: "Server", href: "https://github.com/Wallet6/wallet6-server" },
    ],
  },
  {
    title: "ETH Waterloo",
    location: "Waterloo, Ontario",
    description: "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    links: [{ label: "Organization", href: "https://github.com/ethdocnet" }],
  },
  {
    title: "Global AI Hackathon - Toronto",
    location: "Toronto, Ontario",
    description: "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Won 1st place prize.",
    links: [
      { label: "Article", href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/" },
      { label: "Source", href: "https://github.com/TinySamosas/" },
    ],
  },
  {
    title: "SpaceApps Waterloo",
    location: "Waterloo, Ontario",
    description: "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them.",
    links: [{ label: "Source", href: "https://github.com/dillionverma/earthwatch" }],
  },
  {
    title: "MHacks 9",
    location: "Ann Arbor, Michigan",
    description: "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling using THREE.js.",
    links: [{ label: "Source", href: "https://github.com/dillionverma/threejs-planes" }],
  },
  {
    title: "StartHacks I",
    location: "Waterloo, Ontario",
    description: "Recipic is a mobile app which allows you to take pictures of ingredients and it returns possible recipes using ClarifAI image recognition. Recieved 1st place for best pitch and hack.",
    links: [
      { label: "Source (Mobile)", href: "https://github.com/mattBlackDesign/recipic-ionic" },
      { label: "Source (Server)", href: "https://github.com/mattBlackDesign/recipic-rails" },
    ],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];
