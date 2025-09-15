export const Education = () => {
  return (
    <section className='caret-transparent float-none break-words w-full mb-20 md:float-right md:mb-[60px]'>
      <h1 className='text-[19.2px] bg-teal-900 caret-transparent leading-[21.12px] break-words -ml-2.5 mb-5 p-2.5 rounded-[15px]'>
        Education
      </h1>
      <dl className='caret-transparent break-words'>
        <dt className='text-base caret-transparent leading-6 break-words mb-[5px]'>
          <a
            href='https://www.fergusson.edu/'
            className='caret-transparent break-words hover:text-slate-50 hover:border-slate-50'
          >
            Fergusson College, Pune, India
          </a>
        </dt>
        <dd className='text-slate-400 text-[14.4px] caret-transparent leading-[25.6px] break-words'>
          MS in Computer Science (2014 - 2016)
          <br className='caret-transparent break-words' />
          GPA: 3.8 / 4.0
        </dd>
        <br className='caret-transparent break-words' />
        <br className='caret-transparent break-words' />
        <dt className='text-base caret-transparent leading-6 break-words mb-[5px]'>
          <a
            href='https://pvgcosc.ac.in/'
            className='caret-transparent break-words hover:text-slate-50 hover:border-slate-50'
          >
            PVG&#39;s College Of Science, Pune, India
          </a>
        </dt>
        <dd className='text-slate-400 text-[14.4px] caret-transparent leading-[25.6px] break-words'>
          BS in Computer Science (2011 - 2014)
          <br className='caret-transparent break-words' />
          GPA: 3.8 / 4.0
        </dd>
      </dl>
    </section>
  );
};
