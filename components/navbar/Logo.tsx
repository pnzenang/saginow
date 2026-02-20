import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='sm:hidden'>
        <Image
          src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1719309232/newLogo_ixgk8v.svg'
          alt='logo'
          width={60}
          height={30}
        />
      </div>
      <div className='hidden sm:block'>
        <Image
          src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1719309232/newLogo_ixgk8v.svg'
          alt='logo'
          width={100}
          height={40}
        />
      </div>
    </>
  );
};
export default Logo;
