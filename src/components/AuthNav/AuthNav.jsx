import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul>
      <li className={s.item}>
        <NavLink to="login">Log In</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="register">Register</NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
