export const Footer = () => {
  return (
    <footer className='relative caret-transparent float-none break-words w-full pb-2.5 px-[25px] bottom-0'>
      <p className='text-slate-400 caret-transparent flex justify-center leading-[25.6px] break-words text-nowrap'>
        Built and maintained by{"  "}
        <a
          href='https://github.com/Saloni-Oswal'
          className='text-slate-200 caret-transparent block break-words text-nowrap hover:text-slate-50 hover:border-slate-50'
        >
          yours truly.
        </a>
      </p>
      <small className='text-[11px] caret-transparent flex justify-center leading-[16.5px] break-words text-nowrap'>
        Hosted on GitHub Pages
      </small>
    </footer>
  );
};
