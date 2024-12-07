import React from "react";
import { Variants } from "framer-motion";
import { StyledButton, StyledText, StyledMotionDiv } from "./TabButton.styled";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants: Variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  return (
    <StyledButton onClick={selectTab}>
      <StyledText $active={active}>{children}</StyledText>
      <StyledMotionDiv
        animate={active ? "active" : "default"}
        variants={variants}
      />
    </StyledButton>
  );
};

export default TabButton;
