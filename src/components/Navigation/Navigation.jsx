import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.item}>
            <NavLink className={buildLinkClass} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
