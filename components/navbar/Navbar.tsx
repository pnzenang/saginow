import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className='border-b sticky top-0 z-50 bg-white  dark:bg-gray-900'>
      <div className='container flex flex-row justify-between sm:items-center flex-wrap gap-4 py-4 md:py-6 '>
        <Logo />
        {/* <NavLinks /> */}
        <div className='flex gap-4 items-center'>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
