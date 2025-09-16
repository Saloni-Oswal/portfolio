export const Education = () => {
  return (
    <section className='float-none break-words w-full mb-20 md:float-right md:mb-[60px]'>
      <h1 className='text-2xl bg-teal-900 leading-[21.12px] -ml-2.5 mb-5 p-2.5 rounded-[15px]'>
        Education
      </h1>
      <dl>
        <dt className='text-base leading-6 mb-[5px]'>
          <a
            href='https://www.fergusson.edu/'
            target='_blank'
            className='hover:text-slate-50 hover:border-slate-50'
          >
            Fergusson College, Pune, India
          </a>
        </dt>
        <dd className='text-slate-400 text-base leading-[25.6px] '>
          MS in Computer Science (2014 - 2016)
          <br />
          GPA: 3.8 / 4.0
        </dd>
        <br />
        <br />
        <dt className='text-base leading-6  mb-[5px]'>
          <a
            href='https://pvgcosc.ac.in/'
            target='_blank'
            className='hover:text-slate-50 hover:border-slate-50'
          >
            PVG&#39;s College Of Science, Pune, India
          </a>
        </dt>
        <dd className='text-slate-400 text-base leading-[25.6px]'>
          BS in Computer Science (2011 - 2014)
          <br />
          GPA: 3.8 / 4.0
        </dd>
      </dl>
    </section>
  );
};
