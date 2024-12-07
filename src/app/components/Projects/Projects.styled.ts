import tw from "tailwind-styled-components";

export const Section = tw.section`
  text-white
  py-8
`;

export const Heading = tw.h2`
  text-center
  text-4xl
  font-bold
  mt-4
  mb-8
  md:mb-12
`;

export const TagsContainer = tw.div`
  flex
  flex-row
  justify-center
  items-center
  gap-2
  py-6
`;

export const ProjectList = tw.ul`
  grid
  md:grid-cols-3
  gap-8
  md:gap-12
`;
