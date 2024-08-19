import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={s.link} to="login">
          Login
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={s.link} to="register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
