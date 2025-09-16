export const Footer = () => {
  return (
    <footer className='relative float-none break-words text-nowrap w-full pb-2.5 px-[25px] bottom-0'>
      <p className='text-xs md:text-sm text-slate-400 flex justify-center leading-[25.6px] '>
        ©{new Date().getFullYear()}
        {` Built with React & Tailwind`}
      </p>
      <small className='text-[11px] flex justify-center leading-[16.5px]'>
        Hosted on GitHub Pages
      </small>
    </footer>
  );
};
