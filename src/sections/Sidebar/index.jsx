import { ProfileHeader } from "@/sections/Sidebar/components/ProfileHeader";
import { ProfileImage } from "@/sections/Sidebar/components/ProfileImage";
import { ContactLinks } from "@/sections/Sidebar/components/ContactLinks";

export const Sidebar = () => {
  return (
    <aside className='sticky items-center flex basis-[0%] flex-col grow-[0.5] h-max max-h-fit pt-[25px] md:pb-0 top-auto md:max-h-[1000px] md:pt-20 pb-2.5 md:top-0'>
      <ProfileHeader />
      <ProfileImage />
      <ContactLinks />
    </aside>
  );
};
