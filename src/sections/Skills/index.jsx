export const SKILLS_LIST = [
  "HTML5",
  "CSS3",
  "Javascript",
  "jQuery",
  "Typescript",
  "React",
  "React Native",
  "Redux",
  "React Router",
  "Storybook",
  "Tailwind CSS",
  "Webpack",
  "Jest",
  "CSS Flexbox",
  "Vite",
  "Bootstrap",
];

export const Skills = () => {
  return (
    <section className='float-none break-words w-full mb-5 md:float-right md:mb-[60px]'>
      <h1 className='text-2xl bg-teal-900 leading-[21.12px]-ml-2.5 mb-5 p-2.5 rounded-[15px]'>
        Skills
      </h1>
      <table className='text-teal-300 w-full mb-5 border-collapse'>
        <tbody>
          <tr className='transition-all duration-400 hover:text-[#e2e8f0] flex basis-[0%] grow flex-wrap justify-start align-middle p-[5px] md:pt-[25px] md:pb-0 md:px-[25px]'>
            {SKILLS_LIST.map((skills, index) => (
              <td
                key={index}
                className='self-start text-base bg-teal-400/10 block text-left align-middle mr-2.5 mt-[5px] mb-0 px-2.5 py-[5px] rounded-[25px] md:mt-0 md:mb-2.5'
              >
                {skills}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
};
