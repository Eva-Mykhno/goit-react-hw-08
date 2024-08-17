import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectUser);
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={location} />;
};
export default PrivateRoute;
