"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import { data } from "./data";
import * as Style from "./About.styled";
import TabButton from "../TabButton/TabButton";

const About: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <Style.Section id="about">
      <Style.Container>
        <Style.ImageContainer>
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About me"
          />
        </Style.ImageContainer>
        <Style.ContentWrapper>
          <Style.Heading>About Me</Style.Heading>
          <Style.Paragraph>
            {`I am a front stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, HTML, CSS, Git, Graphql, REST and SCRUM. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. I also don't mind expanding my knowledge into a fullstack developer`}
          </Style.Paragraph>
          <Style.TabRow>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </Style.TabRow>
          <Style.ContentDisplay>
            {data?.find((t) => t?.id === tab)?.content || null}
          </Style.ContentDisplay>
        </Style.ContentWrapper>
      </Style.Container>
    </Style.Section>
  );
};

export default About;
