import { useEffect } from "react";

import { Overlay } from "@/components/Overlay";
import { MainContent } from "@/sections/MainContent";

const changeRadialGradient = function (event) {
  console.log(`Event Loaded ${event}`);

  const gradientDiv = document.querySelector(".radial-gradient");
  gradientDiv.style.background =
    "radial-gradient(600px at " +
    event.pageX +
    "px " +
    event.pageY +
    "px, rgba(29, 78, 216, 0.15), transparent 80%";
};

const App = () => {
  useEffect(() => {
    window.addEventListener("mousemove", changeRadialGradient, false);
    return () => {
      window.removeEventListener("mousemove", changeRadialGradient);
    };
  }, []);

  return (
    <div className='relative text-slate-200 text-sm not-italic normal-nums font-normal accent-auto bg-slate-900 caret-transparent flex basis-[0%] flex-col grow tracking-[normal] leading-[21px] list-outside list-disc break-words text-start indent-[0px] normal-case visible border-separate font-noto_sans'>
      <Overlay />
      <MainContent />
    </div>
  );
};

export default App;
