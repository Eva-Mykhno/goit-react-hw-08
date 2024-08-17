import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
