import {HTMLAttributes} from "react";
import {Link, useLocation} from "react-router-dom";
import cn from "classnames";
import {ERouteConstants} from "@/routes/constants.ts";

interface IMenuNavigationProps extends Pick<HTMLAttributes<HTMLUListElement>, "className"> {
}

const MenuNavigation = ({className}: IMenuNavigationProps) => {
  const {pathname} = useLocation();

  return (
    <ul className={`inline-flex items-center ${className}`}>
      <li>
        <Link
          className={cn("header-link", {"dark:text-purple-300 text-purple-800": pathname === ERouteConstants.HomePage})}
          to={ERouteConstants.HomePage}
        >Home</Link>
      </li>
      <li>
        <Link className="header-link" to="#">About</Link>
      </li>
      <li>
        <Link className="header-link" to="#">Contact</Link>
      </li>
    </ul>
  );
};

export default MenuNavigation;