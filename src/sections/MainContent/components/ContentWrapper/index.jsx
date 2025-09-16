import { Sidebar } from "@/sections/Sidebar";
import { Main } from "@/sections/Main";

export const ContentWrapper = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar />
      <Main />
    </div>
  );
};
