import {AuthButtons, MenuNavigation} from "@/components/Header";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher";
import {useState} from "react";
import {Drawer} from "@/components/Drawer";
import {Link} from "react-router-dom";
import {ERouteConstants} from "@/routes/constants.ts";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <header className="px-2 border-b flex justify-between items-center h-14 bg-white dark:bg-slate-900 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <Link className="dark:text-purple-500 font-bold text-logo-main" to={ERouteConstants.HomePage}>NewS</Link>
        <ThemeSwitcher/>
      </div>
      <nav className="hidden md:flex items-center">
        <MenuNavigation/>
        <AuthButtons/>
      </nav>
      <button className="inline-block md:hidden dark:text-white" onClick={toggleDrawer}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </button>
      {
        isDrawerOpen && (
          <Drawer onClose={toggleDrawer}>
            <nav className="flex flex-col h-full">
              <MenuNavigation className={"flex-col mt-4"}/>
              <AuthButtons className={"mt-auto ml-0"}/>
            </nav>
          </Drawer>
        )
      }
    </header>
  );
};

export default Header;