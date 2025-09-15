import { ContentWrapper } from "@/sections/MainContent/components/ContentWrapper";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className='caret-transparent gap-x-4 flex basis-[0%] flex-col grow break-words gap-y-4 mx-0 md:mx-[6%]'>
      <ContentWrapper />
      <Footer />
    </div>
  );
};
