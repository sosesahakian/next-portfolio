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
    gitUrl: "https://github.com/sosesahakian/Portfolio",
    previewUrl: "https://portfolio-sosesahakian.vercel.app",
  },
  {
    id: 2,
    title: "Vivino Clone",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Next", "Tailwind CSS"],
    gitUrl: "https://github.com/sosesahakian/Vivino",
    previewUrl: "https://vivino.vercel.app",
  },
  {
    id: 3,
    title: "Task App",
    description: "Basic Task App with React, Styled Components and Redux",
    image: "/images/3.png",
    tag: ["All", "React", "Redux"],
    gitUrl: "https://github.com/sosesahakian/task-app",
    previewUrl: "https://task-myhici8nq-sosesahakian.vercel.app",
  },
  {
    id: 4,
    title: "Instagram Clone",
    description: "Made with Next and Firebase",
    image: "/images/4.png",
    tag: ["All", "Next", "Firebase", "Tailwind CSS"],
    gitUrl: "https://github.com/sosesahakian/insta-clone",
    previewUrl: "https://insta-clone-cyan-six.vercel.app",
  },
  {
    id: 5,
    title: "Uber Clone",
    description: "Made with Next and Firebase",
    image: "/images/default.png",
    tag: ["All", "Next", "Firebase", "Tailwind CSS"],
    gitUrl: "https://github.com/sosesahakian/Uber",
    previewUrl: "https://uber-rho-red.vercel.app",
  },
];
