import { ContentWrapper } from "@/sections/MainContent/components/ContentWrapper";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <div className='gap-x-4 flex basis-[0%] flex-col grow break-words gap-y-4 mx-0 md:mx-[12%] z-10'>
      <ContentWrapper />
      <Footer />
    </div>
  );
};
