import { Background } from "@/sections/Background";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";

export const Main = () => {
  return (
    <main className='flex basis-[0%] flex-col grow min-w-[0%] break-words px-[25px] py-0 md:pt-20 md:pb-2.5 md:px-0'>
      <Background />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
};
