import {HTMLAttributes} from "react";
import {useLocation} from "react-router-dom";
import cn from "classnames";
import {ERouteConstants} from "@/routes/constants.ts";

interface IMenuNavigationProps extends Pick<HTMLAttributes<HTMLUListElement>, "className"> {
}

const MenuNavigation = ({className}: IMenuNavigationProps) => {
  const {pathname} = useLocation();

  return (
    <ul className={`inline-flex items-center ${className}`}>
      <li>
        <a
          className={cn("header-link", {"dark:text-purple-300 text-purple-800": pathname === ERouteConstants.HomePage})}
          href="#">Home</a>
      </li>
      <li>
        <a className="header-link" href="#">About</a>
      </li>
      <li>
        <a className="header-link" href="#">Contact</a>
      </li>
    </ul>
  );
};

export default MenuNavigation;