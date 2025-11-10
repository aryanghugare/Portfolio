import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "PlayGrid",
    description:
      " Backend for a video hosting and streaming platform handling real-time uploads and personalized feeds ",
    image: "",
    tech: ["Node.js", "MongoDB", "Express"],
    github: "https://youtu.be/2XF-HgauItk?si=xnuz7_gpUVBBgdW6",
    live: "https://youtu.be/2XF-HgauItk?si=xnuz7_gpUVBBgdW6",
    details: {
      problem:
        "Traditional job boards lack modern features and user experience",
      solution:
        "Built a streamlined job portal with real-time updates and intelligent matching",
      features: [
        "Real-time job notifications",
        "AI-powered job matching",
        "Advanced search filters",
        "Application tracking system",
      ],
      impact: "Helping thousands of job seekers find their dream positions",
    },
  },
  {
    title: "TaskStack",
    description: "Backend for project and workflow management built with Node.js, Express, and MongoDB, including secure authentication and real-time collaboration features.",
    image: "",
    tech: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    github: "https://youtu.be/glAC7d-TYSM?si=KW5Wrdeh5uVPpu7c",
    live: "https://youtu.be/glAC7d-TYSM?si=KW5Wrdeh5uVPpu7c",
    details: {
      problem: "Complex meeting scheduling across time zones",
      solution:
        "Created an intuitive scheduling platform with automated time zone handling",
      features: [
        "Multiple calendar integration",
        "Custom availability rules",
        "Automated reminders",
        "Team scheduling",
      ],
      impact: "Reduced meeting scheduling time by 80% for users",
    },
  },
  {
    title: "Zcrum",
    description: "A Jira-inspired project management solution",
    image: "",
    tech: ["React", "Redux", "Node.js", "PostgreSQL"],
    github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    details: {
      problem: "Need for a simplified project management tool for small teams",
      solution:
        "Developed a streamlined alternative to complex enterprise tools",
      features: [
        "Kanban and Scrum boards",
        "Sprint planning",
        "Time tracking",
        "Performance analytics",
      ],
      impact: "Helping teams increase productivity by 40%",
    },
  },
  {
    title: "Reflct",
    description: "A minimalist journaling application",
    image: "",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    details: {
      problem: "Digital journaling apps are often cluttered and complex",
      solution:
        "Created a clean, focused writing experience with powerful features",
      features: [
        "Markdown support",
        "Daily prompts",
        "Mood tracking",
        "Privacy-focused design",
      ],
      impact: "Helping users maintain consistent journaling habits",
    },
  },
];
