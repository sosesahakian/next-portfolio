import tw from "tailwind-styled-components";

interface ButtonProps {
  isSelected: boolean;
}

export const Button = tw.button<ButtonProps>`
  rounded-full 
  border-2 
  px-6 
  py-3 
  text-xl 
  cursor-pointer
  ${(props) =>
    props.isSelected
      ? "text-white border-primary-500"
      : "text-[#ADB7BE] border-slate-600 hover:border-white"}
`;
