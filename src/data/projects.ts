import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "PlayGrid",
    description:
      " Backend for a video hosting and streaming platform handling real-time uploads and personalized feeds ",
    image: "/Playgrid_img.png",
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
    image: "/TaskStack_img.png",
    tech: ["Node.js", "MongoDB", "Express"],
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
  {
    title: "BlogNest",
    description:
      "A blogging platform built with React, Redux Toolkit, and Appwrite. Users can create, edit, delete, and view posts with authentication and cloud storage.",
    image: "/BlogNest_img.png",
    tech: ["React", "Redux Toolkit", "Appwrite", "Vite", "TinyMCE", "react-hook-form"],
    github: "https://github.com/aryanghugare/BlogNest",
    live: "https://blog-nest-sigma.vercel.app/",
    details: {
      problem:
        "Traditional blogging platforms lack modern authentication, rich media handling, and seamless user experience.",
      solution:
        "Built a lightweight blog platform with secure authentication, rich text editing, media uploads, and efficient state management.",
      features: [
        "User authentication and protected routes",
        "Post creation, editing, and deletion",
        "Rich text editor with media uploads",
        "Cloud storage for images and files",
        "Client-side validation and reusable UI components",
        "Fast development workflow with Vite",
      ],
      impact:
        "Empowers users to publish and manage blogs securely, with a modern UI and robust cloud features.",
    },
  },
  {
    title: "MediaShare Pro",
    description:
      "A modern web application for uploading, managing, and sharing videos in the cloud. Built with Next.js, Prisma, and Cloudinary, it provides a seamless dashboard for authenticated users to upload video files, store metadata in a PostgreSQL database, and leverage Cloudinary for optimized video delivery and sharing.",
    image: "/Saas.png",
    tech: ["Next.js", "Prisma", "Cloudinary", "PostgreSQL", "React", "Tailwind CSS"],
    github: "https://github.com/aryanghugare/Media-Saas",
    live: "https://media-saas-u3ca.vercel.app/home",
    details: {
      problem:
        "Existing video management platforms are often complex, lack real-time feedback, and do not optimize for cloud delivery and sharing.",
      solution:
        "Built a simple, scalable platform with user authentication, file validation, real-time upload notifications, and optimized video delivery using Cloudinary.",
      features: [
        "User authentication and secure dashboard",
        "Video upload with file size validation",
        "Metadata storage in PostgreSQL",
        "Optimized video delivery and sharing via Cloudinary",
        "Real-time upload notifications",
        "Clean, responsive UI with Tailwind CSS",
      ],
      impact:
        "Empowers teams and individuals to easily manage and share videos in the cloud, with a seamless and scalable user experience.",
    },
  },
];
