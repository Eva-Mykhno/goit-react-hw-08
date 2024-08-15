import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const user = useSelector(selectUser);

  return (
    <header>
      <h2>{user.name}</h2>
      <nav className={s.menu}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
