import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Welcome, {user.name}!</h2>
      <button
        className={s.button}
        type="submit"
        onClick={() => {
          dispatch(logout());
        }}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
