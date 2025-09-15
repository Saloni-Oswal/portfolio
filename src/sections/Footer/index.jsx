export const Footer = () => {
  return (
    <footer className='relative caret-transparent float-none break-words w-full pb-2.5 px-[25px] bottom-0'>
      <p className='text-slate-400 caret-transparent flex justify-center leading-[25.6px] break-words text-nowrap'>
        ©{new Date().getFullYear()}
        {` Built with React & Tailwind`}
      </p>
      <small className='text-[11px] caret-transparent flex justify-center leading-[16.5px] break-words text-nowrap'>
        Hosted on GitHub Pages
      </small>
    </footer>
  );
};
