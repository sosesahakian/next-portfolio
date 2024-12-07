import { motion } from "framer-motion";
import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link";


export const Container = tw.div`
    grid 
    grid-cols-1 
    sm:grid-cols-12
`;

export const AnimationContainer = tw(motion.div)`
    col-span-8 
    place-self-center 
    text-center 
    sm:text-left 
    justify-self-start
`;

export const HeroTitle = tw.h1`
    text-white 
    mb-4 
    text-4xl 
    sm:text-5xl 
    lg:text-8xl 
    lg:leading-normal 
    font-extrabold
`;

export const TitleSpan = tw.span`
    bg-clip-text 
    bg-gradient-to-r 
    from-primary-400 
    to-secondary-600
`;

export const HeroSubText = tw.p`
    text-[#ADB7BE] 
    text-base 
    sm:text-lg 
    mb-6 
    lg:text-xl
`;

export const HeroImage = tw(Image)`
    rounded-full 
    bg-[#181818] 
    w-[250px] 
    h-[250px] 
    lg:w-[400px] 
    lg:h-[400px] 
    relative
`;

export const ImageContainer = tw.div`
    rounded-full 
    bg-[#181818] 
    w-[250px] 
    h-[250px] 
    lg:w-[400px] 
    lg:h-[400px] 
    relative
`;

export const ContactLink = tw(Link)`
    px-6 
    inline-block 
    py-3 
    w-full 
    sm:w-fit 
    rounded-full 
    mr-4 
    bg-gradient-to-br 
    from-primary-500 
    to-secondary-500 
    hover:bg-red-900 
    text-white
`;

export const DownloadLink = tw(Link)`
    px-1 
    inline-block 
    py-1 w-full 
    sm:w-fit 
    rounded-full 
    bg-gradient-to-br 
    from-primary-500 
    to-secondary-500 
    hover:bg-slate-800 
    text-white mt-3
`;

export const DownloadText = tw.span`
    block 
    bg-[#121212] 
    hover:bg-slate-800 
    rounded-full px-5 py-2
`;

export const MotionImage = tw(motion.div)`
    col-span-4 
    place-self-center 
    mt-4 
    lg:mt-0
`;