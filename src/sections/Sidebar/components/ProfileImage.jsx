const BASE_URL = import.meta.env.BASE_URL;

export const ProfileImage = () => {
  return (
    <p className='leading-[25.6px] pt-0 pb-[15px] px-0 md:p-[25px]'>
      <img
        src={`${BASE_URL}profile.png`}
        alt='Logo'
        className='h-[180px] max-w-full w-[180px] md:h-[270px] md:w-[270px]'
      />
    </p>
  );
};
