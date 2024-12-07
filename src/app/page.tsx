import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import tw from "tailwind-styled-components";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Email from "./components/Email/Email";

export default function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <Hero />
        <About />
        <Projects />
        <Email />
      </Body>
    </Container>
  );
}

const Container = tw.main`
  flex 
  min-h-screen 
  flex-col 
  bg-[#121212]
`;

const Body = tw.div`
  container 
  mt-24 
  mx-auto 
  px-12 
  py-4
`;
