import { useDispatch, useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";
import { logoutThunk } from "../../redux/auth/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <header className={s.wrapper}>
      <nav className={s.menu}>
        <Navigation />
        {isLoggedIn ? (
          <div className={s.container}>
            <h2 className={s.title}>Welcome, {user.name}!</h2>
            <UserMenu />
            <button
              className={s.button}
              type="submit"
              onClick={() => {
                dispatch(logoutThunk());
              }}>
              Logout
            </button>
          </div>
        ) : (
          <AuthNav />
        )}
      </nav>
    </header>
  );
};

export default AppBar;
