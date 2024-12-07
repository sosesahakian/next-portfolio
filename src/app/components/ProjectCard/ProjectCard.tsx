import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from '@heroicons/react/24/solid'


import {
  CardContainer,
  ImageContainer,
  Overlay,
  IconLink,
  CardContent,
  Title,
  Description,
  Bracket,
  Eye,
} from "./ProjectCard.styled";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${imgUrl})` }}>
        <Overlay>
          <IconLink href={gitUrl}>
          <Bracket/>
          </IconLink>
          <IconLink href={previewUrl}>
          <Eye/>
          </IconLink>
        </Overlay>
      </ImageContainer>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
