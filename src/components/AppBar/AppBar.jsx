import { useDispatch, useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <Navigation />
      {isLoggedIn ? (
        <h2>Welcome {user.name}!</h2> && <UserMenu /> && (
          <button
            type="submit"
            onClick={() => {
              dispatch(logoutThunk());
            }}>
            Exit
          </button>
        )
      ) : (
        <AuthNav />
      )}
    </div>
  );
};

export default AppBar;
