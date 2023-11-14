import {AuthButtons, MenuNavigation} from "@/components/Header";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher";

const Header = () => {

  return (
    <header className="px-2 border-b flex justify-between items-center h-14">
      <div className="flex items-center gap-3">
        <a className="dark:text-purple-500 uppercase font-bold text-logo-main" href="#">App:)</a>
        <ThemeSwitcher/>
      </div>
      <nav className="hidden md:flex items-center">
        <MenuNavigation/>
        <AuthButtons/>
      </nav>
      <button className="inline-block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </button>
    </header>
  );
};

export default Header;