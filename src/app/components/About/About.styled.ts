import tw from "tailwind-styled-components";

export const Section = tw.section`
  text-white
`;

export const Container = tw.div`
  md:grid
  md:grid-cols-2
  gap-8
  items-center
  py-8
  px-4
  xl:gap-16
  sm:py-16
  xl:px-16
`;

export const ImageContainer = tw.div`
  flex
  justify-center
`;

export const ContentWrapper = tw.div`
  mt-4
  md:mt-0
  text-left
  flex
  flex-col
  h-full
`;

export const Heading = tw.h2`
  text-4xl
  font-bold
  text-white
  mb-4
`;

export const Paragraph = tw.p`
  text-base
  lg:text-lg
`;

export const TabRow = tw.div`
  flex
  flex-row
  justify-start
  mt-8
`;

export const ContentDisplay = tw.div`
  mt-8
`;
