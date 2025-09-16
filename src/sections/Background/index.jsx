import { SectionTitle } from "@/sections/SectionTitle";

export const Background = () => {
  return (
    <section className='float-none break-words w-full mb-5 md:float-right md:mb-[60px]'>
      <SectionTitle title={"Background"}></SectionTitle>
      <div className='rounded-[15px] text-slate-400 text-sm md:text-base transition-all duration-400 hover:bg-[rgba(45,212,191,0.1)]  hover:text-[#e2e8f0] leading-[25.6px]'>
        <p className='pb-[15px] md:px-[25px] md:py-[10px] md:pt-[20px]'>
          In 2016, fresh off completing my Master's in Computer Science, I
          embarked on a journey to explore web development by creating a custom
          static website. Little did I know, this venture would plunge me deep
          into the captivating world of coding and web development. Fast-forward
          to the present day, and I've had the honor of crafting software
          solutions for diverse clients, including an e-commerce giant, a
          prominent multinational banking corporation, and several other
          innovative MVPs. My true passion lies at the intersection of design
          and engineering, where I relish in crafting software that not only
          boasts aesthetic appeal but also operates flawlessly beneath the
          surface.
        </p>
        <p className='pb-[15px] md:px-[25px] md:py-[10px]'>
          In December 2022, I intentionally took a hiatus from my professional
          career to navigate a significant life transition. This break allowed
          me the opportunity to focus on personal growth, family commitments,
          and other aspects of my life. Despite not being formally employed I
          remained proactive in honing my skills, particularly in React, by
          freelancing and staying updated with the latest industry trends and
          developments. I'm a fast learner who thrives on complex projects, and
          I love crafting solutions that improve usability, performance, and
          accessibility. Now, as I prepare to re-enter the workforce, I am eager
          to bring forth my renewed dedication, enthusiasm, and a wealth of
          experiences that have shaped me both personally and professionally.
        </p>
        <p className='md:px-[25px] md:py-[10px] md:pb-[20px]'>
          When I'm not immersed in code, you can often find me exploring the
          vibrant streets of NYC, camera in hand, capturing moments of life and
          architecture. I have a penchant for savoring a good cup of coffee
          while delving into the city's myriad cultural offerings. Additionally,
          I'm an avid enthusiast of outdoor activities, always eager to embrace
          new adventures and experiences in nature.
        </p>
      </div>
    </section>
  );
};
