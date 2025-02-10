"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Container,
  AnimationContainer,
  HeroTitle,
  TitleSpan,
  HeroSubText,
  HeroImage,
  ContactLink,
  DownloadLink,
  DownloadText,
  ImageContainer,
  MotionImage,
} from "./Hero.styled";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <Container>
        <AnimationContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroTitle>
            <TitleSpan>{`Hello, I'm`}</TitleSpan>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sose",
                1000,
                "Web Developer",
                1000,
                "Frotend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </HeroTitle>
          <HeroSubText>
            A frontend developer who is eager to learn and try new things
          </HeroSubText>
          <div>
            <ContactLink href="/#contact">Hire Me</ContactLink>
            <ContactLink href="https://github.com/sosesahakian">
              Checkout my Github
            </ContactLink>
            <DownloadLink href="/CV.pdf">
              <DownloadText>Download CV</DownloadText>
            </DownloadLink>
          </div>
        </AnimationContainer>
        <MotionImage
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ImageContainer>
            <HeroImage
              src="/images/hero-image.png"
              alt="hero image"
              width={700}
              height={700}
            />
          </ImageContainer>
        </MotionImage>
      </Container>
    </section>
  );
};

export default Hero;
