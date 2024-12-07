export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl?: string;
  previewUrl?: string;
  tag: string[];
}

export const data: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Portfolio with next and framer motion",
    image: "/images/1.png",
    tag: ["All", "Next", "Framer Motion"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Vivino Clone",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Next", "Tailwind CSS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Task App",
    description: "Basic Task App with React, Styled Components and Redux",
    image: "/images/3.png",
    tag: ["All", "React", "Redux"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Instagram Clone",
    description: "Made with Next and Firebase",
    image: "/images/4.png",
    tag: ["All", "Next", "Firebase", "Tailwind CSS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/hero-image.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/hero-image.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];
