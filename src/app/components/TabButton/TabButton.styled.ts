import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const StyledButton = tw.button`
  flex
  flex-col
  items-center
  justify-center
  cursor-pointer
  hover:bg-red-900
  rounded-md
  p-2
  m-2
  

`;

export const StyledText = tw.p<{ $active: boolean }>`
  flex
  mr-3
  font-semibold
  items-center
  justify-center
  hover:text-white
  ${(props) => (props.$active ? "text-white" : "text-[#ADB7BE]")}
`;

export const StyledMotionDiv = tw(motion.div)`
  h-1
  bg-primary-500
  mt-2
  mr-3
`;
