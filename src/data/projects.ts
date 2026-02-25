import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "PlayGrid",
    description:
      " Backend for a video hosting and streaming platform handling real-time uploads and personalized feeds ",
    image: "",
    tech: ["Node.js", "MongoDB", "Express"],
    github: "https://github.com/aryanghugare/PlayGrid",
    live: "",
    details: {
      problem:
        "Building a scalable, real-time video platform with efficient uploads, streaming, and user engagement is complex and resource-intensive.",
      solution:
        "Developed a distributed backend system for video uploads, streaming, user history, and recommendations, inspired by YouTube.",
      features: [
        "Optimized video upload, encoding, and storage management",
        "Low-latency streaming and playback",
        "User authentication and access control (JWT, OAuth 2.0)",
        "Watch history tracking and personalized recommendations",
        "Subscription, likes, comments, and social interactions",
        "Scalable architecture for high user and content volume",
      ],
      impact:
        "Achieved 20% faster uploads, 25% lower streaming latency, 40% boost in recommendation accuracy, and 99.9% uptime for seamless user experience.",
    },
  },
  {
    title: "TaskStack",
    description:
      "Backend for project and workflow management built with Node.js, Express, and MongoDB, including secure authentication and real-time collaboration features.",
    image: "",
    tech: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    github: "https://github.com/aryanghugare/TaskStack",
    live: "",
    details: {
      problem:
        "Managing complex workflows, assignments, and team collaboration at scale requires robust APIs, auditability, and secure access control.",
      solution:
        "Built a scalable backend platform for task and workflow management, offering RESTful APIs, role-based access, and integrations for modern product teams.",
      features: [
        "Task lifecycle management with subtasks, dependencies, and custom fields",
        "Role-based access control and team membership",
        "Audit trail, activity feed, and webhooks for integrations",
        "Advanced search, filtering, and pagination",
        "Secure authentication with JWT, OAuth2, and API keys",
        "Scalable architecture with PostgreSQL, Redis, and message queues",
      ],
      impact:
        "Supports millions of tasks and thousands of users, enabling teams to streamline collaboration, ensure data integrity, and integrate with external tools efficiently.",
    },
  },

 
  
];
