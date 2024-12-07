import tw from "tailwind-styled-components";

export const Section = tw.section`
  grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative
`;

export const CircleBackground = tw.div`
  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2
`;

export const ContentWrapper = tw.div`
  z-10
`;

export const Heading = tw.h5`
  text-xl font-bold text-white my-2
`;

export const Description = tw.p`
  text-[#ADB7BE] mb-4 max-w-md
`;

export const Socials = tw.div`
  socials flex flex-row gap-2
`;

export const FormWrapper = tw.div``;

export const InputField = tw.input`
  bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5
`;

export const TextAreaField = tw.textarea`
  bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5
`;

export const SubmitButton = tw.button`
  bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:bg-red-900
`;
