"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { data, Project } from "./data";
import {
  Section,
  Heading,
  TagsContainer,
  ProjectList,
} from "./Projects.styled";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectTag from "../ProjectTag/ProjectTag";

const Projects: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = data?.filter((project: Project) =>
    project.tag.includes(tag)
  );

  const cardVariants: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Section id="projects">
      <Heading>My Projects</Heading>
      <TagsContainer>
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("React")}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Next")}
          name="Next"
          isSelected={tag === "Next"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Tailwind CSS")}
          name="Tailwind CSS"
          isSelected={tag === "Tailwind CSS"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Redux")}
          name="Redux"
          isSelected={tag === "Redux"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Framer Motion")}
          name="Framer Motion"
          isSelected={tag === "Framer Motion"}
        />
        <ProjectTag
          onClick={() => handleTagChange("React Native")}
          name="React Native"
          isSelected={tag === "React Native"}
        />
      </TagsContainer>
      <ProjectList ref={ref}>
        {filteredProjects?.map((project: Project, index: number) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl ?? "#"}
              previewUrl={project.previewUrl ?? "#"}
            />
          </motion.li>
        ))}
      </ProjectList>
    </Section>
  );
};

export default Projects;
