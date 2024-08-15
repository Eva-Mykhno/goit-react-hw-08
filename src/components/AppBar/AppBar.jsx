import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div>
      <h2>Welcome {user.name}!</h2>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Navigation />
    </div>
  );
};

export default AppBar;
