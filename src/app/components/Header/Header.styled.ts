import tw from "tailwind-styled-components";

export const Nav = tw.nav`
    fixed
    mx-auto
    border
    border-[#33353f]
    top-0
    left-0
    right-0
    z-10
    bg-[#121212]
    bg-opacity-100
`;

export const Container = tw.div`
    flex 
    container 
    lg:py-4 
    flex-wrap 
    items-center 
    justify-between 
    mx-auto 
    px-4 
    py-2
`;

export const Routes = tw.div`
    menu 
    hidden 
    md:block 
    md:w-auto
`;

export const List = tw.ul`
    flex 
    p-4 
    md:p-0 
    md:flex-row 
    md:space-x-8 
    mt-0
`;
