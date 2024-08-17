import { NavLink } from "react-router-dom";
import s from "./UserMenu.module.css";
import clsx from "clsx";

const UserMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div>
      <ul>
        <li className={s.item}>
          <NavLink className={buildLinkClass} to="contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
