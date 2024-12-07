import React from "react";
import { Button } from "./ProjectTag.styled";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  return (
    <Button onClick={() => onClick(name)} isSelected={isSelected}>
      {name}
    </Button>
  );
};

export default ProjectTag;
