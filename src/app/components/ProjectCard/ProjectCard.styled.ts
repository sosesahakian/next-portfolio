import tw from "tailwind-styled-components";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";


export const CardContainer = tw.div`
  text-white
`;

export const ImageContainer = tw.div`
  h-52 
  md:h-72 
  rounded-t-xl 
  relative 
  group 
  bg-cover
`;

export const Overlay = tw.div`
  overlay 
  items-center 
  justify-center 
  absolute 
  top-0 
  left-0 
  w-full 
  h-full 
  bg-[#181818] 
  bg-opacity-0 
  hidden 
  group-hover:flex 
  group-hover:bg-opacity-80 
  transition-all 
  duration-500
`;

export const IconLink = tw(Link)`
  h-14 
  w-14 
  border-2 
  relative 
  rounded-full 
  border-[#ADB7BE] 
  hover:border-white 
  group/link
  flex
  items-center
  justify-center
`;

export const CardContent = tw.div`
  text-white 
  rounded-b-xl 
  mt-3 
  bg-[#181818]
  py-6 
  px-4
`;

export const Title = tw.h5`
  text-xl 
  font-semibold 
  mb-2
`;

export const Description = tw.p`
  text-[#ADB7BE]
`;


export const Bracket = tw(CodeBracketIcon)`
h-10 
w-10 
text-[#ADB7BE] 
absolute 
top-1/2 
left-1/2 
transform -translate-x-1/2 -translate-y-1/2  
cursor-pointer 
group-hover/link:text-white
`;

export const Eye = tw(EyeIcon)`
h-10 
w-10 
text-[#ADB7BE] 
absolute 
top-1/2 
left-1/2 
transform -translate-x-1/2 -translate-y-1/2  
cursor-pointer 
group-hover/link:text-white
`;